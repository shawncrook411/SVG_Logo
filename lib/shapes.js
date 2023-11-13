const fs = require('fs');

//Shape parent class constructor
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
    //Method for resetting the color of shapes
    setColor(color) {
        this.color = color;
    }
    //Method for resetting the color of the shape
    setText(text) {
        if (text.length != 3) throw new Error("Must enter 3 characters exactly")
        this.text = text;
    }   
    //Method for created the cooresponding logo.svg. Using the .data property it writes to the file
    create() {
        fs.writeFile('logo.svg', this.data.join('\n'), (err) => err && console.error(err))
        console.log('Generated logo.svg')
    }
}

//Class circle that extends the parent class shape and includes the method render
class circle extends shape{
    constructor(color, text, data){
        super(color, text, data)
    }
    //Edits the .data property, so that when .create() is called is displays a circle not some other object
    render() {
        this.data[1] =  `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
        this.create()
    }
}
//Class circle that extends the parent class shape and includes the method render
class square extends shape{
    constructor(color, text, data){
        super(color, text, data)
    }
        //Edits the .data property, so that when .create() is called is displays a circle not some other object

    render() {
        this.data[1] = `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`
        this.create()
    }
}
//Class circle that extends the parent class shape and includes the method render
class triangle extends shape{
    constructor(color, text, data){
        super(color, text, data)
    }
        //Edits the .data property, so that when .create() is called is displays a circle not some other object

    render() {
        this.data[1] = `<polygon points="150, 20 50, 150 250, 150" fill="${this.color}"/>`
        this.create()
    }
}

//Exports the classes circle, square, and triangle for use in the index.js file
module.exports = {
    circle,
    square,
    triangle,
}