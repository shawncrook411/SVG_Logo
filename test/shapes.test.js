const shape = require('../lib/shapes')

describe('Shape', () => {
    describe('construct', () =>{
        test('new shape should construct with color properties', () =>{
            let Circle = new shape.circle('red', 'abc')
            expect(Circle.color).toMatch('red')
        })

        test('new shape should construct with text properties', () =>{
            let Circle = new shape.circle('red', 'abc')
            expect(Circle.text).toMatch('abc')
        })

        test('setColor method should work properly', () => {
            let Square = new shape.square('blue', 'xyz')
            Square.setColor('red')
            expect(Square.color).toMatch('red')
        })

        test('setText method should work properly', () => {
            let Square = new shape.square('blue', 'xyz')
            Square.setText('lol')
            expect(Square.text).toMatch('lol')
        })

        test('should expect error if .text is longer than 3 charcaters', () => {
            let Triangle = new shape.triangle('orange', 'jkl')
            expect(() => {Triangle.setText('1234')}).toThrow()
        })

        test('data should create properly', () => {
            let Square = new shape.square('purple', 'aaa')
            testData = [
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
                `<rect x="100" y="50" width="100" height="100" fill="${Square.color}"/>`,
                `<text x="150" y="125" font-size="45" text-anchor="middle" fill="white">${Square.text}</text>`,
                '</svg>'
            ]
            Square.render()
            expect(Square.data).toEqual(testData)
        })
    })
})


