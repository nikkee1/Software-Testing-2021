import chai from 'chai';
const expect = chai.expect;

import toNumber from "../../src/toNumber.js";

describe('toNumber.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to return with => NaN', () => {
            expect(toNumber()).to.be.eql(NaN);
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to return with => 3.2', () => {
            expect(toNumber(3.2)).to.be.eql(3.2);
        });

        it('expected to return with => 5e-324', () => {
            expect(toNumber(Number.MIN_VALUE)).to.be.eql(5e-324);
        });

        it('expected to return with => Infinity', () => {
            expect(toNumber(Infinity)).to.be.eql(Infinity);
        });

        it('expected to return with => 3.2', () => {
            expect(toNumber('3.2')).to.be.eql(3.2);
        });

    });

});