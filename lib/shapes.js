const fs = require('fs');

class shape {
    constructor(color, text) {    
        this.color = color;
        this.text = text;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    create() {
        const SVG = 
            `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">`

        fs.writeFile('logo.sv', SVG)
    } 

    appendText() {
        fs.appendFile('logo.svg', `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`)
        fs.appendFile('logo.sv', '<svg>');
        console.log('Successfully rendered "logo.svg"')
    }    
}

class circle extends shape{
    constructor(color, text){
        super(color, text)
    }
    render() {
        this.create()
        fs.appendFile('logo.sv', `<circle cx="150" cy="100" r="80" fill="${this.color}" />`);
        this.appendText()
    }
}

class square extends shape{
    constructor(color, text){
        super(color, text)
    }
    render() {
        this.create()
        fs.appendFile('logo.svg', `<rect x="100" y="50" width="100" height="100" fill="${this.color}/>`)
        this.appendText()
    }
}

class triangle extends shape{
    constructor(color, text){
        super(color, text)
    }
    render() {
        this.create()
        fs.appendFile('logo.svg', `<polygon points="150, 20 50, 150 250, 150" fill="${this.color}"/>`)
        this.appendText()
    }
}

module.exports = {
    circle,
    square,
    triangle,
}