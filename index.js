const ora = require('ora');
const argv = require('minimist')(process.argv.slice(2));
const wait = require('waait');

async function thinker(){
  const spinner = ora('Thinking').start(); 
  if(argv['naked']) {
    await wait(1000);
    spinner.color = 'yellow';
    spinner.text = 'Thinking made my body hot, removing my cloths';
    await wait(5000);
    spinner.color = 'blue';
    spinner.text = 'Now I am thinking naked';
    await wait(5000);
  }
  if(argv['deep']){
    await wait(1000);
    spinner.color = 'red';
    spinner.text = 'This is taking too much, have to think deep';
  }
}

thinker();