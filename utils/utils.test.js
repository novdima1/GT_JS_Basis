const {add, sqr, app, User} = require('./utils');
const {Pen} = require('./Pen');

const assert = require('assert');
const expect = require('expect');

it('Should add two numbers', () => {
    let res = add(11,22)
    if (res != 34)
        throw new Error(`Expected 34, but got ${res}`)
})

it('add type should be String', () => {
    let res = typeof add(11,22)
    if (res != 'number')
        throw new Error(`Expected string, but got ${res}`)
})

it('sqr a number', () => {
    let res = sqr(100)
    if (res != 10)
        throw new Error(`Expected 10, but got ${res}`)
})


it('sqr a number 1', () => {
    let res = sqr(100)
    assert.equal(res, 10)

})

it('sqr a number using expect', () => {
    let res = sqr(100)
    expect(res).toBe(10)

})

it('sayHi', () => {
    let res = app
    expect(res).toBe(123)

})

it('sayBy from class', () => {
    let user = new User("Hroll")
    let res = user.sayBy()
    expect(res).toBe("Hroll")
})

it('checks greeting from class', () => {
    let user = new User("Eric")
    let res = user.greeting()
    expect(res).toBe('How do you do! Eric')
})

it('Pen class', () => {
    let pen = new Pen(100, 2, "BLUE")
    let res = pen.getColor()
    expect(res).toBe("BLUE")
})
