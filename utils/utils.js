const add = (a, b) => a + b + 1;

const sqr = (x) => Math.sqrt(x);

function sayHi() {
    return 'Hi'
}

let app = 123;

class User {
    constructor(name) {
        this.name = name;
    }
    sayBy() {
        return this.name
    }
    greeting() {
        return `How do you do! ${this.name}`
    }
}

module.exports = { app, add, sqr, User }

