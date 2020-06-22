const {Pen} = require('./Pen');
const assert = require('assert');
const expect = require('expect');

let pen = new Pen(100, 2, "BLUE")
it('checks Blue ink color applying', () => {
    pen.color = "BLUE"
    let res = pen.getColor()
    expect(res).toBe("BLUE")
})

it('Pen class', () => {
    pen.color = "BLUE"
    let res = pen.getColor()
    expect(res).toBe("BLUE")
})