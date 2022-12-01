import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const content = await readFile('./files/fileToCalculateHashFor.txt');
    const sha256Hash = createHash('sha256').update(content).digest('hex');

    console.log(sha256Hash);
};

await calculateHash();
