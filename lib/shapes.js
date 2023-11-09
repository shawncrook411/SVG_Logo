const fs = require('fs');

class shape {
    constructor(color, text) {    
        this.color = color;
        this.text = text;
        this.data = [            
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
        '',
        `<text x="150" y="125" font-size="45" text-anchor="middle" fill="white">${this.text}</text>`,
        '</svg>']
    }  

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }   
   
    create() {
        fs.writeFile('logo.svg', this.data.join('\n'), (err) => err && console.error(err))
        console.log('Generated log.svg')
    }
}

class circle extends shape{
    constructor(color, text, data){
        super(color, text, data)
    }
    render() {
        this.data[1] =  `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
        this.create()
    }
}

class square extends shape{
    constructor(color, text, data){
        super(color, text, data)
    }
    render() {
        this.data[1] = `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`
        this.create()
    }
}

class triangle extends shape{
    constructor(color, text, data){
        super(color, text, data)
    }
    render() {
        this.data[1] = `<polygon points="150, 20 50, 150 250, 150" fill="${this.color}"/>`
        this.create()
    }
}

module.exports = {
    circle,
    square,
    triangle,
}