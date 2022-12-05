import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { checkDirExist } from './utils/filesUtils.js';

const dirPath = './files/';
const copyDirPath = './files_copy/';

const copy = async () => {
  if (!(await checkDirExist(dirPath))) {
    throw Error('FS operation failed');
  }

  if (await checkDirExist(copyDirPath)) {
    throw Error('FS operation failed');
  }

  await mkdir(copyDirPath);

  const files = await readdir(dirPath);
  files.forEach(async (fileName) => {
    const fileContent = await readFile(dirPath + fileName);
    await writeFile(copyDirPath + fileName, fileContent);
  });
};

copy();
