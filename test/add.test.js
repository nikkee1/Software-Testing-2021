import chai from 'chai';
const expect = chai.expect;
import add from "../src/add.js";

describe('add.js', () => {

    describe('createMathOperation()', () => {

        it('should return defaultValue', () => {
            expect(add("","2")).to.be.contain(2);
        });

        it('should return operator', () => {
            expect(add("1","")).to.be.contain(1);
        });

        it('should return total', () => {
            expect(add("1","2")).to.be.contain(12);
        });
    });

});
