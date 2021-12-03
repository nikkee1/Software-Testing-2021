import chai from 'chai';
const expect = chai.expect;

import isDate from "../../src/isDate.js";

describe('isDate.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isDate(function() { }())).to.eql(false);
        });

        it('should return false', () => {
            expect(isDate(undefined)).to.eql(false);
        });

        it('should return false', () => {
            expect(isDate()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isDate(new Date)).to.eql(true);
        });

        it('should return false', () => {
            expect(isDate('Mon April 23 2012')).to.eql(false);
        });

    });

});