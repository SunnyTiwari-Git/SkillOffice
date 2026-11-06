/**
 * Runs department workflows in Claude Code (headless) and records token use.
 *
 * For each scenario, three runs on fresh copies of the fixture:
 *   cold          first run, empty memory
 *   warm          same project again, memory kept, files unchanged
 *   warm-no-memory  same project state, memory wiped (the baseline for "warm")
 * Savings from memory = warm vs warm-no-memory.
 *
 * Usage (from the repo root, after "npm run build"):
 *   node tools/skilloffice-cli/scripts/measure.ts [scenario-id...]
 *
 * This spends Claude usage on the account Claude Code is signed in with.
 */
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { initWorkspace, REPO_ROOT } from '../src/init.ts';
import { readLedger } from '../src/memory.ts';
import { workspacePaths } from '../src/workspace.ts';

interface Scenario {
  id: string;
  plugin: string;
  fixture: string;
  prompt: string;
  allowedTools: string[];
  expect: { ledgerEvents: string[]; command?: string };
}

interface RunResult {
  scenario: string;
  run: 'cold' | 'warm' | 'warm-no-memory';
  ok: boolean;
  inputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  outputTokens: number;
  costUsd: number;
  turns: number;
  durationMs: number;
  reportWritten: boolean;
  ledgerEvents: string[];
  commandPassed: boolean | null;
  error?: string;
}

const WORKFLOWS = path.join(REPO_ROOT, 'tests', 'workflows');
const MAX_TURNS = '60';

/** Puts a `skilloffice` command on PATH, the way an installed helper would be. */
function helperBinDir(): string {
  const bin = mkdtempSync(path.join(tmpdir(), 'skilloffice-bin-'));
  const cli = path.join(REPO_ROOT, 'tools', 'skilloffice-cli', 'src', 'cli.ts');
  writeFileSync(path.join(bin, 'skilloffice'), `#!/bin/sh\nexec node "${cli}" "$@"\n`, { mode: 0o755 });
  return bin;
}

const HELPER_BIN = helperBinDir();
const HELPER_TOOLS = ['Bash(skilloffice *)', 'Bash(shasum -a 256 *)', 'Bash(sha256sum *)'];

function runClaude(project: string, scenario: Scenario): Record<string, unknown> {
  const plugin = path.join(REPO_ROOT, 'dist', 'claude-code', 'plugins', scenario.plugin);
  if (!existsSync(plugin)) throw new Error(`Plugin not built: ${plugin}. Run "npm run build" first.`);
  const result = spawnSync(
    'claude',
    [
      '-p', scenario.prompt,
      '--output-format', 'json',
      '--plugin-dir', plugin,
      '--permission-mode', 'acceptEdits',
      '--allowedTools', [...scenario.allowedTools, ...HELPER_TOOLS].join(','),
      '--max-turns', MAX_TURNS,
      '--no-session-persistence',
    ],
    {
      cwd: project,
      encoding: 'utf8',
      timeout: 20 * 60_000,
      maxBuffer: 64 * 1024 * 1024,
      env: { ...process.env, PATH: `${HELPER_BIN}${path.delimiter}${process.env['PATH'] ?? ''}` },
    },
  );
  if (result.error) throw result.error;
  try {
    return JSON.parse(result.stdout) as Record<string, unknown>;
  } catch {
    throw new Error(`claude exited ${result.status}: ${(result.stderr || result.stdout).slice(0, 500)}`);
  }
}

function measure(project: string, scenario: Scenario, run: RunResult['run']): RunResult {
  const base: RunResult = {
    scenario: scenario.id, run, ok: false, inputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0,
    outputTokens: 0, costUsd: 0, turns: 0, durationMs: 0, reportWritten: false, ledgerEvents: [], commandPassed: null,
  };
  try {
    const output = runClaude(project, scenario);
    const usage = (output['usage'] ?? {}) as Record<string, number>;
    const reports = path.join(project, '.skilloffice', 'reports');
    const events = readLedger(workspacePaths(project)).map((event) => event.type);
    const command = scenario.expect.command;
    return {
      ...base,
      ok: output['is_error'] !== true,
      inputTokens: usage['input_tokens'] ?? 0,
      cacheReadTokens: usage['cache_read_input_tokens'] ?? 0,
      cacheWriteTokens: usage['cache_creation_input_tokens'] ?? 0,
      outputTokens: usage['output_tokens'] ?? 0,
      costUsd: Number(output['total_cost_usd'] ?? 0),
      turns: Number(output['num_turns'] ?? 0),
      durationMs: Number(output['duration_ms'] ?? 0),
      reportWritten: existsSync(reports) && readdirSync(reports).length > 0,
      ledgerEvents: events,
      commandPassed: command ? spawnSync(command, { cwd: project, shell: true }).status === 0 : null,
    };
  } catch (error) {
    return { ...base, error: (error as Error).message };
  }
}

function freshCopy(fixture: string): string {
  const project = mkdtempSync(path.join(tmpdir(), 'skilloffice-measure-'));
  cpSync(path.join(WORKFLOWS, fixture), project, { recursive: true });
  initWorkspace(project);
  return project;
}

function wipeMemory(project: string): void {
  rmSync(path.join(project, '.skilloffice', 'memory'), { recursive: true, force: true });
  rmSync(path.join(project, '.skilloffice', 'reports'), { recursive: true, force: true });
  initWorkspace(project);
}

function main(): void {
  const { scenarios } = JSON.parse(readFileSync(path.join(WORKFLOWS, 'scenarios.json'), 'utf8')) as { scenarios: Scenario[] };
  const wanted = process.argv.slice(2);
  const selected = wanted.length > 0 ? scenarios.filter((scenario) => wanted.includes(scenario.id)) : scenarios;
  const results: RunResult[] = [];

  for (const scenario of selected) {
    console.log(`\n${scenario.id}`);
    const cold = freshCopy(scenario.fixture);
    results.push(measure(cold, scenario, 'cold'));
    // Warm and its baseline start from the same post-cold project state.
    const baseline = mkdtempSync(path.join(tmpdir(), 'skilloffice-measure-'));
    cpSync(cold, baseline, { recursive: true });
    wipeMemory(baseline);
    results.push(measure(cold, scenario, 'warm'));
    results.push(measure(baseline, scenario, 'warm-no-memory'));
    for (const result of results.slice(-3)) {
      const total = result.inputTokens + result.cacheReadTokens + result.cacheWriteTokens + result.outputTokens;
      console.log(`  ${result.run.padEnd(15)} ${result.ok ? 'ok ' : 'ERR'} tokens=${total} cost=$${result.costUsd.toFixed(4)} turns=${result.turns} report=${result.reportWritten} test=${result.commandPassed ?? '-'}${result.error ? ` ${result.error}` : ''}`);
    }
  }

  const resultsDir = path.join(WORKFLOWS, 'results');
  mkdirSync(resultsDir, { recursive: true });
  const file = path.join(resultsDir, `${new Date().toISOString().slice(0, 10)}-claude-code.json`);
  writeFileSync(file, `${JSON.stringify({ platform: 'claude-code', results }, null, 2)}\n`);
  console.log(`\nSaved ${path.relative(REPO_ROOT, file)}`);
}

main();
