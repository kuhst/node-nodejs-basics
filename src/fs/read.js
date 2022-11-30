import { readdir, readFile } from 'node:fs/promises'
import { checkDirExist } from "./utils/filesUtils.js";

const dirPath = './files/';

const read = async () => {
    if (!await checkDirExist(dirPath)) throw Error('FS operation failed');

    const files = await readdir(dirPath);
    files.forEach(async (fileName) => {
        const fileContent = await readFile(dirPath + fileName, 'utf-8');
        console.log(fileContent)
    })
};

await read();
