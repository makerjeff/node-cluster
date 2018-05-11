// app_noCluster.js



// code to run if we're in a worker process

const express       = require('express');
const app           = express();

app.get('/', (req, res) => {
    res.send(`Hello world!`);
    console.log(`Sending Hello World.`);
});

app.listen(3000, () => {
    console.log(`Server starting on 3000.`);
});
