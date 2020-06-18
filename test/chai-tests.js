const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
chai.should();
// import {User} from "./User.js";
// let ivan = new User("Иван");
// console.log(ivan.sayHi());

function sum(a, b) {
    return a+b
}

describe('example with assertions', function () {

    it('Egor check', function () {
        expect(1).to.be.equal(1)
    });

    it('pow in n', function () {
        assert.typeOf('12','string')
    });

    it('checks sum function', function () {
        assert.equal(sum(123,321), 444)
    });

    it('checks asdasd', function () {
        'asdasd'.should.be.a('string')
    });

});



describe('example with assertions', function () {

    it('equal test with Chai', function () {
        expect(1).to.be.equal(1)
    });

    it('pow in n', function () {
        assert.typeOf('12','string')
    });

    it('checks sum function', function () {
        assert.equal(sum(123,321), 444)
    });

    it('checks asdasd', function () {
        'asdasd'.should.be.a('string')
    });

});