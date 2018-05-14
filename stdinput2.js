// modules
const readline  = require('readline');
const clear     = require('clear');
const chalk     = require('chalk');

// init
const rl = readline.createInterface({
    input: process.stdin, 
    outout: process.stdout,
    prompt: 'OHAI> '
});

// start!
clear();

// initial prompt-o
rl.prompt();

// --- EVENTS ---
rl.on('line', (line) => {
    // do something.

    let chunk = line.trim();
    process_input(chunk);
});

// close event
rl.on('close', () => {
    console.log(chalk.yellow('Goodbye!'));
    process.exit(0);
});


function process_input(blah) {
    console.log(blah);
}