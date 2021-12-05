import chai from 'chai';
const expect = chai.expect;

import toFinite from "../../src/toFinite.js";

describe('toFinite.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to return with => 0', () => {
            expect(toFinite()).to.be.eql(0);
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to return with => 3.2', () => {
            expect(toFinite(3.2)).to.be.eql(3.2);
        });

        it('expected to return with => 5e-324', () => {
            expect(toFinite(Number.MIN_VALUE)).to.be.eql(5e-324);
        });

        it('expected to return with => 1.7976931348623157e+308', () => {
            expect(toFinite(Infinity)).to.be.eql(1.7976931348623157e+308);
        });

        it('expected to return with => 3.2', () => {
            expect(toFinite('3.2')).to.be.eql(3.2);
        });

    });

});