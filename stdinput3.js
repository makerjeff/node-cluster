const readline  = require('readline');
const clear     = require('clear');
const chalk     = require('chalk');

// --- init ---
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.blue('hola> ')
});

clear();
rl.prompt();

// --- readline events ---
rl.on('line', (line) => {
    switch (line) {
        case 'quit':
            exit_program();
            break;
        default:
            console.log(`You wrote: ${chalk.green(line.trim())}`);
            break;
    }
    rl.prompt();
});

rl.on('close', () => {
    exit_program();
});

function exit_program() {
    console.log(chalk.yellow('Goodbye!'));
    process.exit(0);
}