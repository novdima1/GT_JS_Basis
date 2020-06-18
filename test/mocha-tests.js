var assert = require('assert');

// import {sum} from "./User.js";
function sum(a, b) {
    return a+b
}


describe('Array', function () {
    describe('#indexOf()', function () {

        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('checks sum function', function () {
            assert.equal(sum(2, 3), 5);
        });
    });
});


