import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { checkDirExist } from "./utils/filesUtils.js";

const dirPath = './files/';
const copyDirPath = './files_copy/';

const copy = async () => {
    // check if "files" folder doesn't exists
    if (!await checkDirExist(dirPath)) {
        throw Error('FS operation failed');
    }

    // check if "files_copy" folder has already been created
    if (await checkDirExist(copyDirPath)) {
        throw Error('FS operation failed');
    }

    // create new dir
    await mkdir(copyDirPath);

    // get files from "dirPath"
    const files = await readdir(dirPath);
    files.forEach(async (fileName) => {
        const fileContent = await readFile(dirPath + fileName);
        await writeFile(copyDirPath + fileName, fileContent);
    })
};

copy();
