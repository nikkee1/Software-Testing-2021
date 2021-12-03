import chai from 'chai';
const expect = chai.expect;

import isEmpty from "../../src/isEmpty.js";

describe('isBuffer.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return true', () => {
            expect(isEmpty(Boolean)).to.eql(true);
        });

        it('should return true', () => {
            expect(isEmpty()).to.eql(true);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isEmpty(null)).to.eql(true);
        });

        it('should return true', () => {
            expect(isEmpty(true)).to.eql(true);
        });

        it('should return true', () => {
            expect(isEmpty(1)).to.eql(true);
        });

        it('should return false', () => {
            expect(isEmpty([1, 2, 3])).to.eql(false);
        });

        it('should return false', () => {
            expect(isEmpty('abc')).to.eql(false);
        });

        it('should return false', () => {
            expect(isEmpty({ 'a': 1 })).to.eql(false);
        });

    });

});