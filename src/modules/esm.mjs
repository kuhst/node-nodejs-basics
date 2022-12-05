import path from 'node:path';
import { release, version } from 'node:os';
import { createServer } from 'node:http';
import './files/c.js';
import a from './files/a.json' assert { type: "json" };
import b from './files/b.json' assert { type: "json" };

const random = Math.random();

const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
