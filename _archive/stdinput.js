const http      = require('http');
const chalk     = require('chalk');
const clear     = require('clear');
const port      = process.env.PORT || 3000;

process.stdin.setEncoding('utf8');


const request_handler = (req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/':
        res.end('<h1>Hi from server!</h1> <p>You requested the root!</p>');
        break;

        case '/apinow':
        res.end(`<h1>${Date.now()}</h1>`);
        break;
    }
};

const server = http.createServer(request_handler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something horrible happened. ', err);
    } else {
        console.log(`server is listening on port ${port}`);

        process.stdin.on('readable', () => {
            let chunk = process.stdin.read();

            if (chunk !== null) {
                process_input(chunk);
            }
        });
        
        process.stdin.on('end', () =>{
            process.stdout.write('end');
        });

        process.stdout.write('command> ');
    }
});

function process_input(input) {
    let buffer = input.trim();
    console.log(buffer);
    process.stdout.write('command> ');
}