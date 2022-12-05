import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv.slice(2);

  const print = args.reduce((acc, arg, index) => {
    if (!index) return acc + arg.slice(2);
    if (index % 2) return `${acc} is ${arg}`;
    return `${acc}, ${arg.slice(2)}`;
  }, '');

  console.log(print);
};

parseArgs();
