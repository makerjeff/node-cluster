// app.js

const cluster       = require('cluster');

// cluster - check to see if we're on the master process
if (cluster.isMaster) {

    // count the CPUs
    let cpu_count = require('os').cpus().length;

    // create worker for each CPU
    for (let i = 0; i < cpu_count; i++) {
        cluster.fork();
    }

} else {
    // code to run if we're in a worker process

    const express       = require('express');
    const app           = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
        res.send(`Hello world from Worker ${cluster.worker.id}`);
    });
    
    app.listen(3000, () => {
        console.log(`Worker Server started with ID ${cluster.worker.id}`);
    });

}