import { readFile } from 'node:fs/promises'
import { checkFileExist } from "./utils/filesUtils.js";

const filePath = './files/fileToRead.txt';

const read = async () => {
    if (!await checkFileExist(filePath)) throw Error('FS operation failed');

    console.log(await readFile(filePath, 'utf-8'));
};

await read();
