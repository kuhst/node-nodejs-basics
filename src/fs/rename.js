import * as fs from 'node:fs/promises';
import { checkFileExist } from './utils/filesUtils.js';

const oldPath = './files/wrongFilename.txt';
const newPath = './files/properFilename.md';

const rename = async () => {
  if (!(await checkFileExist(oldPath))) throw Error('FS operation failed');
  if (await checkFileExist(newPath)) throw Error('FS operation failed');

  await fs.rename(oldPath, newPath);
};

await rename();
