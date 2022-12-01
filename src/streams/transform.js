import { Transform, pipeline } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const trans = new Transform({
        transform(chunk, enc, cd) {
            const reversedChunk = chunk
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('')

            cd(null, reversedChunk + '\n')
        }
    })

    pipeline(stdin, trans, stdout, err => {
        console.log(err);
    })
};

await transform();
