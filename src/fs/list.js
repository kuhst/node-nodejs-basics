import { readdir } from 'node:fs/promises'
import { checkDirExist } from "./utils/filesUtils.js";

const dirPath = './files/';

const list = async () => {
    if (!await checkDirExist(dirPath)) throw Error('FS operation failed');

    console.log(await readdir(dirPath));
};

await list();
