#!/usr/bin/env node
import path from 'node:path';
import { parseArgs } from 'node:util';
import { buildPackages } from './build.ts';
import { cacheGet, cachePut } from './cache.ts';
import { writeCatalog } from './catalog.ts';
import { readContextFields } from './context.ts';
import { UserFacingError } from './errors.ts';
import { fileStatus, verifyFile } from './fingerprint.ts';
import { formatFindings, isBlocking, type Finding } from './findings.ts';
import { initWorkspace } from './init.ts';
import { forget, logEvent } from './memory.ts';
import { scanPaths } from './scan.ts';
import { validatePaths } from './validate.ts';

const EXIT_OK = 0;
const EXIT_FAILED = 1;
const EXIT_USAGE = 2;

const DEFAULT_SKILL_PATHS = ['core', 'departments'];

const HELP = `skilloffice: helper for SkillOffice workspaces and skills

Usage: skilloffice <command> [options]

Workspace (run inside your project, or pass --root):
  init [dir] [--profile name]          Set up .skilloffice/ (safe to re-run)
  context <field...>                   Print only the requested context fields, e.g. brand.voice
  status [paths...]                    Show files changed since their last review
  verify-file <path> --summary s --by skill
                                       Record a file's fingerprint after review
  cache get|put --skill id@version --inputs a,b [--requirements c,d] [--result text]
                                       Reuse a result while inputs and requirements are unchanged
  log <type> --actor skill --summary s [--run id] [--data json] [--human-approved]
                                       Append to the memory ledger (redacted)
  forget --all | --older-than <days>   Delete memory (context is kept)

Skill library:
  validate [paths...]                  Check skills against the Agent Skills spec and skill.yaml rules
  scan [paths...]                      Static security scan (nothing is executed)
  catalog <department-dir>             Regenerate a department's catalog.yaml
  build [--layout manager-only|full]   Build dist/ packages for Claude Code and .agents/skills (run at repo root)

Options: --root <dir>  --json  --help`;

type Flags = Record<string, string | boolean | undefined>;

function list(value: string | boolean | undefined): string[] {
  return typeof value === 'string' ? value.split(',').map((item) => item.trim()).filter(Boolean) : [];
}

function text(flags: Flags, name: string): string {
  const value = flags[name];
  if (typeof value !== 'string' || value.trim() === '') throw new UserFacingError(`--${name} is required.`);
  return value;
}

function parseData(raw: string | boolean | undefined): Record<string, unknown> | undefined {
  if (typeof raw !== 'string') return undefined;
  try {
    const data: unknown = JSON.parse(raw);
    if (data === null || typeof data !== 'object' || Array.isArray(data)) throw new Error('must be a JSON object');
    return data as Record<string, unknown>;
  } catch (error) {
    throw new UserFacingError(`--data is not a valid JSON object (${(error as Error).message})`);
  }
}

function print(value: unknown, asJson: boolean, human: () => string): void {
  console.log(asJson ? JSON.stringify(value, null, 2) : human());
}

function reportFindings(findings: Finding[], asJson: boolean, scope: string): number {
  print({ findings }, asJson, () => `${scope}\n\n${formatFindings(findings)}`);
  return findings.some(isBlocking) ? EXIT_FAILED : EXIT_OK;
}

async function run(argv: string[]): Promise<number> {
  const { values, positionals } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      root: { type: 'string' },
      json: { type: 'boolean' },
      help: { type: 'boolean', short: 'h' },
      profile: { type: 'string' },
      summary: { type: 'string' },
      by: { type: 'string' },
      skill: { type: 'string' },
      inputs: { type: 'string' },
      requirements: { type: 'string' },
      result: { type: 'string' },
      actor: { type: 'string' },
      run: { type: 'string' },
      data: { type: 'string' },
      'human-approved': { type: 'boolean' },
      all: { type: 'boolean' },
      'older-than': { type: 'string' },
      layout: { type: 'string' },
    },
  });
  const flags = values as Flags;
  const [command, ...args] = positionals;
  const root = path.resolve(typeof flags['root'] === 'string' ? flags['root'] : process.cwd());
  const asJson = flags['json'] === true;

  if (!command || flags['help']) {
    console.log(HELP);
    return command ? EXIT_OK : EXIT_USAGE;
  }

  switch (command) {
    case 'init': {
      const target = path.resolve(root, args[0] ?? '.');
      const result = initWorkspace(target, typeof flags['profile'] === 'string' ? flags['profile'] : 'default');
      print(result, asJson, () =>
        `SkillOffice workspace ready in ${target}\nCreated: ${result.created.length}, already present: ${result.skipped.length}\nNext: fill in .skilloffice/context/ with your company details.`,
      );
      return EXIT_OK;
    }
    case 'context': {
      if (args.length === 0) throw new UserFacingError('Name at least one field, for example brand.voice');
      const fields = readContextFields(root, args);
      print(fields, asJson, () => Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n'));
      return EXIT_OK;
    }
    case 'status': {
      const report = fileStatus(root, args.length > 0 ? args : ['.']);
      print(report, asJson, () =>
        (['changed', 'added', 'deleted', 'unchanged'] as const)
          .map((kind) => `${kind} (${report[kind].length})${kind === 'unchanged' ? '' : report[kind].map((file) => `\n  ${file}`).join('')}`)
          .join('\n'),
      );
      return EXIT_OK;
    }
    case 'verify-file': {
      const target = args[0];
      if (!target) throw new UserFacingError('Name the file to record.');
      const record = await verifyFile(root, target, text(flags, 'summary'), text(flags, 'by'));
      print(record, asJson, () => `Recorded ${target} (${record.sha256.slice(0, 12)})`);
      return EXIT_OK;
    }
    case 'cache': {
      const request = { skill: text(flags, 'skill'), inputs: list(flags['inputs']), requirements: list(flags['requirements']) };
      if (args[0] === 'get') {
        const entry = cacheGet(root, request);
        print({ hit: entry !== null, entry }, asJson, () => (entry ? `HIT\n${entry.result}` : 'MISS'));
        return EXIT_OK;
      }
      if (args[0] === 'put') {
        const entry = await cachePut(root, request, text(flags, 'result'));
        print(entry, asJson, () => `Stored ${entry.key.slice(0, 12)}`);
        return EXIT_OK;
      }
      throw new UserFacingError('Use "cache get" or "cache put".');
    }
    case 'log': {
      const type = args[0];
      if (!type) throw new UserFacingError('Name the event type, for example skill_completed.');
      const event = await logEvent(root, {
        type,
        actor: text(flags, 'actor'),
        summary: text(flags, 'summary'),
        runId: typeof flags['run'] === 'string' ? flags['run'] : undefined,
        data: parseData(flags['data']),
        humanApprovedExtraCycle: flags['human-approved'] === true,
      });
      print(event, asJson, () => `Logged ${event.type}${event.runId ? ` (run ${event.runId})` : ''}`);
      return EXIT_OK;
    }
    case 'forget': {
      const olderThan = flags['older-than'];
      const result = await forget(root, {
        all: flags['all'] === true,
        olderThanDays: typeof olderThan === 'string' ? Number(olderThan) : undefined,
      });
      print(result, asJson, () => `Removed ${result.removedEvents} ledger events and ${result.removedFiles} cache or handoff entries.`);
      return EXIT_OK;
    }
    case 'validate': {
      const { skills, findings } = validatePaths(root, args.length > 0 ? args : DEFAULT_SKILL_PATHS);
      return reportFindings(findings, asJson, `Validated ${skills.length} skill folder(s).`);
    }
    case 'scan': {
      const findings = scanPaths(root, args.length > 0 ? args : DEFAULT_SKILL_PATHS);
      return reportFindings(findings, asJson, 'Security scan (static, nothing executed).');
    }
    case 'catalog': {
      const target = args[0];
      if (!target) throw new UserFacingError('Name the department folder.');
      const catalog = writeCatalog(path.resolve(root, target));
      print(catalog, asJson, () => `Wrote catalog.yaml with ${catalog.skills.length} skill(s).`);
      return EXIT_OK;
    }
    case 'build': {
      const layout = flags['layout'] ?? 'manager-only';
      if (layout !== 'manager-only' && layout !== 'full') throw new UserFacingError('--layout must be manager-only or full.');
      const result = buildPackages(root, layout);
      print(result, asJson, () =>
        `Built ${result.claudePlugins.length} Claude Code plugin(s) and ${result.agentsSkills.length} .agents/skills package(s) for: ${result.departments.join(', ') || 'no departments yet'}.`,
      );
      return EXIT_OK;
    }
    default:
      console.error(`Unknown command "${command}".\n\n${HELP}`);
      return EXIT_USAGE;
  }
}

run(process.argv.slice(2)).then(
  (code) => {
    process.exitCode = code;
  },
  (error: unknown) => {
    if (error instanceof UserFacingError) {
      console.error(`Error: ${error.message}`);
      process.exitCode = EXIT_FAILED;
    } else if (error instanceof Error && 'code' in error && String(error.code).startsWith('ERR_PARSE_ARGS')) {
      console.error(`Error: ${error.message}\n\nRun "skilloffice --help" for usage.`);
      process.exitCode = EXIT_USAGE;
    } else {
      console.error(error);
      process.exitCode = EXIT_FAILED;
    }
  },
);
