import { rm } from 'node:fs/promises';
import { checkFileExist } from "./utils/filesUtils.js";

const filePath = './files/fileToRemove.txt';

const remove = async () => {
    if (!await checkFileExist(filePath)) throw Error('FS operation failed');

    await rm(filePath);
};

await remove();
