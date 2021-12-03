import chai from 'chai';
const expect = chai.expect;

import isArguments from "../../src/isArguments.js";

describe('isArguments.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isArguments(function() { }())).to.eql(false);
        });

        it('should return false', () => {
            expect(isArguments()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isArguments(function() { return arguments }())).to.eql(true);
        });

        it('should return false', () => {
            expect(isArguments([1, 2, 3])).to.eql(false);
        });

    });

});