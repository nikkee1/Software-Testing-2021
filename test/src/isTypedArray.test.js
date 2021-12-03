import chai from 'chai';
const expect = chai.expect;

import isTypedArray from "../../src/isTypedArray.js";

describe('isTypedArray.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isTypedArray(undefined)).to.eql(false);
        });

        it('should return false', () => {
            expect(isTypedArray()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isTypedArray(new Uint8Array)).to.eql(true);
        });


        it('should return false', () => {
            expect(isTypedArray([])).to.eql(false);
        });

    });

});