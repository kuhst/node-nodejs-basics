import { writeFile } from 'node:fs/promises';
import { checkFileExist } from "./utils/filesUtils.js";

const filePath = './files/fresh.txt';

const create = async () => {
    if (await checkFileExist(filePath)) throw Error('FS operation failed');

    await writeFile(filePath, 'I am fresh and young');
};

await create();
