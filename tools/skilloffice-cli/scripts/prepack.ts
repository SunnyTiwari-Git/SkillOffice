/**
 * Runs before "npm pack" and "npm publish": compiles the helper to JavaScript in lib/ and copies
 * the files the installer needs into assets/, so the package works outside this repository.
 * postpack.ts removes both folders again. Nothing here runs when users install the package.
 */
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const packageDir = path.resolve(import.meta.dirname, '..');
const repoRoot = path.resolve(packageDir, '..', '..');
const assets = path.join(packageDir, 'assets');

/** Repository paths the installer and "init" read, copied to the same relative paths under assets/. */
const BUNDLED = [
  'registry/departments.yaml',
  'context-templates',
  'core/templates/agents-md-section.md',
  'dist/agents/skills',
  'dist/agents/third-party-licenses',
];

function fail(message: string): never {
  console.error(`prepack: ${message}`);
  process.exit(1);
}

for (const relative of BUNDLED) {
  if (!existsSync(path.join(repoRoot, relative))) fail(`missing ${relative}. Run "npm run build" at the repository root first.`);
}

rmSync(path.join(packageDir, 'lib'), { recursive: true, force: true });
rmSync(assets, { recursive: true, force: true });

const tsc = spawnSync(process.execPath, [path.join(packageDir, 'node_modules', 'typescript', 'bin', 'tsc'), '-p', 'tsconfig.build.json'], {
  cwd: packageDir,
  stdio: 'inherit',
});
if (tsc.status !== 0) fail('TypeScript compile failed.');

for (const relative of BUNDLED) {
  const destination = path.join(assets, relative);
  mkdirSync(path.dirname(destination), { recursive: true });
  cpSync(path.join(repoRoot, relative), destination, { recursive: true });
}
for (const file of ['LICENSE', 'NOTICE']) cpSync(path.join(repoRoot, file), path.join(packageDir, file));

console.log('prepack: compiled lib/ and bundled assets/.');
