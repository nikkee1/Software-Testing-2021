import chai from 'chai';
const expect = chai.expect;

import defaultToAny from "../../src/defaultToAny.js";

describe('defaultToAny.js', () => {

    describe('testing with right params', () => {

        it('should return with 1', () => {
            expect(defaultToAny(1, 10, 20)).to.be.eql(1);
        });

        it('should return with 10', () => {
            expect(defaultToAny(undefined, 10, 20)).to.be.eql(10);
        });

        it('should return with 20', () => {
            expect(defaultToAny(undefined, null, 20)).to.be.eql(20);
        });

        it('should return with NaN', () => {
            expect(defaultToAny(undefined, null, NaN)).to.be.eql(NaN);
        });

    });
});