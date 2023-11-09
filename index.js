const inquirer = require('inquirer')
const shapes = require('./lib/shapes.js')

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
        let {text, shape, color} = res

        if (text.length != 3) throw new Error("Must enter 3 characters exactly")

        switch(shape)
        {
            case "triangle":
                logo = new shapes.triangle(color, text)
                logo.render()
            break

            case "square":
                logo = new shapes.square(color, text)
                logo.render()
            break

            case "circle":
                logo = new shapes.circle(color, text)
                logo.render()
            break
        }
    })
    .catch((error) => console.log(error))
}

init()


