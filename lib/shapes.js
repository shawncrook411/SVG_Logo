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
    create(){}
}

class circle extends shape{
    constructor(color, text){
        super(text, color)
    }
    render() {}
}

class square extends shape{
    constructor(color, text){
        super(text, color)
    }
    render() {}


}

class triangle extends shape{
    constructor(color, text){
        super(text, color)
    }
    render() {}

}


module.exports = {
    circle,
    square,
    triangle,
    shape
}