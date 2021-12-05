import chai from 'chai';
const expect = chai.expect;

import toInteger from "../../src/toInteger.js";

describe('toInteger.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to return with => 0', () => {
            expect(toInteger()).to.be.eql(0);
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to return with => 3', () => {
            expect(toInteger(3.2)).to.be.eql(3);
        });

        it('expected to return with => 0', () => {
            expect(toInteger(Number.MIN_VALUE)).to.be.eql(0);
        });

        it('expected to return with => 1.7976931348623157e+308', () => {
            expect(toInteger(Infinity)).to.be.eql(1.7976931348623157e+308);
        });

        it('expected to return with => 3', () => {
            expect(toInteger('3.2')).to.be.eql(3);
        });

    });

});