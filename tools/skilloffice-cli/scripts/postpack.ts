/** Runs after "npm pack" and "npm publish": removes what prepack.ts generated, so the repository stays clean. */
import { rmSync } from 'node:fs';
import path from 'node:path';

const packageDir = path.resolve(import.meta.dirname, '..');
for (const generated of ['lib', 'assets', 'LICENSE', 'NOTICE']) {
  rmSync(path.join(packageDir, generated), { recursive: true, force: true });
}
console.log('postpack: removed lib/, assets/ and the copied license files.');
