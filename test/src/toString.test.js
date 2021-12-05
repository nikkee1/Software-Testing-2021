import chai from 'chai';
const expect = chai.expect;

import toString from "../../src/toString.js";

describe('toString.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to return with => \'\'', () => {
            expect(toString()).to.be.eql('');
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to return with => \'\'', () => {
            expect(toString(null)).to.be.eql('');
        });

        it('expected to return with => \'-0\'', () => {
            expect(toString(-0)).to.be.eql('-0');
        });

        it('expected to return with => \'1,2,3\'', () => {
            expect(toString([1, 2, 3])).to.be.eql('1,2,3');
        });

    });

});