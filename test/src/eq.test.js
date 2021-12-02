import chai from 'chai';
const expect = chai.expect;

import eq from "../../src/eq.js";

describe('eq.js', () => {

    describe('testing with right params', () => {

        it('should return with true', () => {
            const object = { 'a': 1 };
            expect(eq(object, object)).to.be.eql(true);
        });

        it('should return with false', () => {
            const object = { 'a': 1 };
            const other = { 'a': 1 };
            expect(eq(object, other)).to.be.eql(false);
        });

        it('should return with true', () => {
            expect(eq('a', 'a')).to.be.eql(true);
        });

        it('should return with false', () => {
            const object = { 'a': 1 };
            expect(eq('a', object)).to.be.eql(false);
        });

        it('should return with true', () => {
            expect(eq(NaN, NaN)).to.be.eql(true);
        });

    });
});