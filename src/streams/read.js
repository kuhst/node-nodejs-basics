import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const stream = createReadStream('./files/fileToRead.txt', 'utf-8');

    let data = '';

    stream.on('data', chunk => data += chunk);
    stream.on('end', () => stdout.write(data));
};

await read();
