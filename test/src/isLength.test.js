import chai from 'chai';
const expect = chai.expect;

import isLength from "../../src/isLength.js";

describe('isLength.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isLength(Number)).to.eql(false);
        });

        it('should return false', () => {
            expect(isLength()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isLength(3)).to.eql(true);
        });

        it('should return false', () => {
            expect(isLength(Number.MIN_VALUE)).to.eql(false);
        });

        it('should return false', () => {
            expect(isLength(Infinity)).to.eql(false);
        });

        it('should return false', () => {
            expect(isLength('3')).to.eql(false);
        });

    });

});

