import chai from 'chai';
const expect = chai.expect;

import capitalize from "../../src/capitalize.js";

describe('capitalize.js', () => {

    describe('testing with undefined params', () => {

        it('should return Undefined', () => {
            expect(capitalize()).to.eql("Undefined");
        });

        it('should return Undefined', () => {
            expect(capitalize(undefined)).to.eql("Undefined");
        });

    });

    describe('testing with unexpected params', () => {

        it('should return \'\'\'\'', () => {
            expect(capitalize("")).to.eql("");
        });

        it('should return \'3\', \'4\'', () => {
            expect(capitalize("\'3\', \'4\'")).to.eql("'3', '4'");
        });

        it('should return 123', () => {
            expect(capitalize("123")).to.eql("123");
        });

        it('should return A[0].b.c', () => {
            expect(capitalize('a[0].b.c')).to.eql("A[0].b.c");
        });

    });

    describe('testing with right params', () => {

        it('should return "Fred', () => {
            expect(capitalize('FRED')).to.eql("Fred");
        });

        it('should return ´fred´', () => {
            expect(capitalize('´FRED´')).to.eql("´fred´");
        });

        it('should return -fred-', () => {
            expect(capitalize('-FRED-')).to.eql("-fred-");
        });

    });

});