import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const runWorker = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
    })
}

const performCalculations = async () => {
    const cpuCoreCount = cpus().length;
    let number = 10;
    const ranWorkers = [];

    for (let i = 1; i <= cpuCoreCount; i++) {
        ranWorkers.push(runWorker(number++))
    }

    Promise.allSettled(ranWorkers).then(result => {
        const preparedResult = result.map(({ status, value }) => ({
            status: status === 'fulfilled' ? 'resolved' : 'error',
            data: value ?? null,
        }))

        console.log(preparedResult);
    })
};

await performCalculations();
