// app.js

// include express
const express       = require('express');

// create new Express app
const app           = express();

// add a basic route - index page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// bind to a port
app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});