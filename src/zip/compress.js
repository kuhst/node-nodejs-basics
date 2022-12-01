import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const inPath = './files/fileToCompress.txt';
const outPath = './files/destination.txt.gz';

const compress = async () => {
    const read = createReadStream(inPath, 'utf-8');
    const gzip = createGzip();
    const write = createWriteStream(outPath);

    pipeline(read, gzip, write, err => {
        console.log(err);
    })

    await rm(inPath);
};

await compress();
