import chai from 'chai';
const expect = chai.expect;

import isBuffer from "../../src/isBuffer.js";

describe('isBuffer.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return false', () => {
            expect(isBuffer(function() { }())).to.eql(false);
        });

        it('should return false', () => {
            expect(isBuffer()).to.eql(false);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return true', () => {
            expect(isBuffer(new Buffer(2))).to.eql(true);
        });

        it('should return false', () => {
            expect(isBuffer(new Uint8Array(2))).to.eql(false);
        });

        it('should return false', () => {
            expect(isBuffer(Function)).to.eql(false);
        });

    });

});