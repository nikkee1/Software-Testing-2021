import chai from 'chai';
const expect = chai.expect;

import endsWith from "../../src/endsWith.js";

describe('endsWith.js', () => {

    describe('testing with right params', () => {

        it('should return with true', () => {
            expect(endsWith('abc', 'c')).to.be.eql(true);
        });

        it('should return with false', () => {
            expect(endsWith('abc', 'b')).to.be.eql(false);
        });

        it('should return with true', () => {
            expect(endsWith('abc', 'b', 2)).to.be.eql(true);
        });

    });
});