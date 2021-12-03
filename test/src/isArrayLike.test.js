import chai from 'chai';
const expect = chai.expect;

import isArrayLike from "../../src/isArrayLike.js";

describe('isArrayLike.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isArrayLike(function() { }())).to.eql(false);
        });

        it('should return false', () => {
            expect(isArrayLike()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isArrayLike([1, 2, 3])).to.eql(true);
        });

        it('should return true', () => {
            expect(isArrayLike('abc')).to.eql(true);
        });

        it('should return false', () => {
            expect(isArrayLike(Function)).to.eql(false);
        });

    });

});