import chai from 'chai';
const expect = chai.expect;

import isSymbol from "../../src/isSymbol.js";

describe('isSymbol.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isSymbol(Boolean)).to.eql(false);
        });

        it('should return false', () => {
            expect(isSymbol()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isSymbol(Symbol.iterator)).to.eql(true);
        });

        it('should return false', () => {
            expect(isSymbol('abc')).to.eql(false);
        });

    });

});