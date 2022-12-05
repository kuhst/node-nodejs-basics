import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const inPath = './files/destination.txt.gz';
const outPath = './files/fileToCompress.txt';

const decompress = async () => {
  const read = createReadStream(inPath);
  const unzip = createUnzip();
  const write = createWriteStream(outPath, 'utf-8');

  pipeline(read, unzip, write, (err) => {
    console.log(err);
  });

  await rm(inPath);
};

await decompress();
