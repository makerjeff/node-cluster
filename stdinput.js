const chalk = require('chalk');
const clear = require('clear');

clear();

process.stdin.setEncoding('utf8');

process.stdout.write('ping> ');

process.stdin.on('readable', () => {

    let chunk = process.stdin.read();

    if (chunk !== null) {
        process_chunk(chunk);
    }

});

process.stdin.on('end', () => {
    process.stdout.write('end');
});


function process_chunk(input_chunk) {
    let buffer = input.trim();
    process.stdout.write(`${chalk.red(input_chunk)} \n`);
}