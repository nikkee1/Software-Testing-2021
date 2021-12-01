const chai = require('chai');
const add = require("../src/add");
const createMathOperation = require("../src/.internal/createMathOperation");

const addTest = createMathOperation(1,2);

describe('add.js', () => {

    describe('createMathOperation()', () => {

        it('should return defaultValue', () => {
            expect(createMathOperation(1,2)).to.be.contain(2);
        });

        it('should return operator', () => {
            expect(createMathOperation(1,2)).to.be.contain(1);
        });

        it('should return total', () => {
            expect(createMathOperation(1,2)).to.be.contain(3);
        });
    });

});
