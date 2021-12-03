import chai from 'chai';
const expect = chai.expect;

import isObject from "../../src/isObject.js";

describe('isObject.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return true', () => {
            expect(isObject(Boolean)).to.eql(true);
        });

        it('should return false', () => {
            expect(isObject()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isObject({})).to.eql(true);
        });

        it('should return true', () => {
            expect(isObject([1, 2, 3])).to.eql(true);
        });

        it('should return true', () => {
            expect(isObject(Function)).to.eql(true);
        });

        it('should return false', () => {
            expect(isObject(null)).to.eql(false);
        });

    });

});