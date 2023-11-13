const inquirer = require('inquirer')
const shapes = require('./lib/shapes.js')

init = function() {
    //Prompts the user 3 questions: shape, color and string to be displayed?
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

        //If the text is too long, will throw error and won't generate
        if (text.length != 3) throw new Error("Must enter 3 characters exactly")

        //Generates new shape depending on the inquirer prompts. Then renders it
        let logo;
        switch(shape)
        {
            case "triangle":
                logo = new shapes.triangle(color, text)
            break

            case "square":
                logo = new shapes.square(color, text)
            break

            case "circle":
                logo = new shapes.circle(color, text)
            break

        }
        logo.render()
    })
    .catch((error) => console.log(error))
}

//Main function call
init()


