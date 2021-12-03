import chai from 'chai';
const expect = chai.expect;

import isObjectLike from "../../src/isObjectLike.js";

describe('isObjectLike.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isObjectLike(undefined)).to.eql(false);
        });

        it('should return false', () => {
            expect(isObjectLike()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isObjectLike({})).to.eql(true);
        });

        it('should return true', () => {
            expect(isObjectLike([1, 2, 3])).to.eql(true);
        });

        it('should return false', () => {
            expect(isObjectLike(Function)).to.eql(false);
        });

        it('should return false', () => {
            expect(isObjectLike(null)).to.eql(false);
        });

    });

});