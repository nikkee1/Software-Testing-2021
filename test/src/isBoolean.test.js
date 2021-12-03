import chai from 'chai';
const expect = chai.expect;

import isBoolean from "../../src/isBoolean.js";

describe('isBoolean.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isBoolean(function() { }())).to.eql(false);
        });

        it('should return false', () => {
            expect(isBoolean()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isBoolean(false)).to.eql(true);
        });

        it('should return false', () => {
            expect(isBoolean(null)).to.eql(false);
        });

    });

});