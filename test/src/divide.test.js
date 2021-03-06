import chai from 'chai';
const expect = chai.expect;

import divide from "../../src/divide.js";

describe('divide.js', () => {

    describe('testing with null params', () => {

        it('should return with 1', () => {
            expect(divide()).to.be.eql(1);
        });

    });

    describe('testing with right params', () => {

        it('should return with NaN', () => {
            expect(divide(4, 0)).to.be.eql(NaN);
        });

        it('should return with 1.5', () => {
            expect(divide(6, 4)).to.be.eql(1.5);
        });

    });
});