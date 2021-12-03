import chai from 'chai';
const expect = chai.expect;

import clamp from "../../src/clamp.js";

describe('capitalize.js', () => {

    describe('testing with undefined params', () => {

        it('should return NaN', () => {
            expect(clamp()).to.be.eql(NaN);
        });

        it('should return NaN', () => {
            expect(clamp(undefined,undefined,undefined)).to.be.eql(NaN);
        });

    });

    describe('testing with unexpected params', () => {

        it('should return \'\'\'\'', () => {
            expect(clamp(+300,5,-150)).to.be.eql(5);
        });

        it('should return \'3\', \'4\'', () => {
            expect(clamp(3.5,4.33,6.55)).to.be.eql(4.33);
        });

        it('should return 123', () => {
            expect(clamp(3.213233213123,4.123213123123,22)).to.be.eql(4.123213123123);
        });

        it('should return A[0].b.c', () => {
            expect(clamp(4,"¤",3)).to.be.eql(0);
        });

    });

    describe('testing with right params', () => {

        it('should return -5', () => {
            expect(clamp(-10, -5, 5)).to.be.eql(-5);
        });

        it('should return 5', () => {
            expect(clamp(10, -5, 5)).to.be.eql(5);
        });

    });

});