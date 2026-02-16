import { mkdir, readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'out');

const ensureOutDir = async () => {
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }
};

const ensureNoJekyll = async () => {
  const nojekyllPath = path.join(outputDir, '.nojekyll');
  if (!existsSync(nojekyllPath)) {
    await writeFile(nojekyllPath, '');
  }
};

await ensureOutDir();
await ensureNoJekyll();
