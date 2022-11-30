import { env } from 'node:process';

const prefix = 'RSS_';

const parseEnv = () => {
    Object.entries(env).forEach(([key, value]) => {
        if (key.startsWith(prefix)) console.log(`${key}=${value}`)
    })
};

parseEnv();
