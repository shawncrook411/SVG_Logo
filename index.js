const inquirer = require('inquirer')

let data;

init = function() {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What three characters would you like displayed in your logo?'
        },     
        {
            type: 'rawlist',
            name: 'shape',
            message: 'Which shape would you like to display?',
            choices: [
                {name: 'Triangle', value: 'triangle'},
                {name: 'Square', value: 'square'},
                {name: 'Circle', value: 'circle'}                
            ]},
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like your background to be? (color keyword or #hexadecimal number is valid)',
        }])
    .then((res) => {
        data = res
    })
    .catch((error) => console.log(error))
}

init()


