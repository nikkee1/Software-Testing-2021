import chai from 'chai';
const expect = chai.expect;
import camelCase from "../../src/camelCase.js";

describe('camelCase.js', () => {

    describe('testing with undefined params', () => {

        it('should return undefined', () => {
            expect(camelCase()).to.eql(" undefined");
        });

        it('should return undefined', () => {
            expect(camelCase(undefined)).to.eql(" undefined");
        });

    });

    describe('testing with unexpected params', () => {

        it('should return \'\' \'\'', () => {
            expect(camelCase("")).to.eql(" ");
        });

        it('should return 34', () => {
            expect(camelCase("\'3\', \'4\'")).to.eql(" 34");
        });

        it('should return \'\' \'\'', () => {
            expect(camelCase("")).to.eql(" ");
        });

        it('should return 123', () => {
            expect(camelCase("123")).to.eql(" 123");
        });

        it('should return a0BC', () => {
            expect(camelCase('a[0].b.c')).to.eql(" a0BC");
        });

    });

    describe('testing with right params', () => {

        it('should return fooBar', () => {
            expect(camelCase("Foo Bar")).to.eql(" fooBar");
        });

        it('should return fooBar', () => {
            expect(camelCase("--foo-bar--")).to.eql(" fooBar");
        });

        it('should return fooBar', () => {
            expect(camelCase("__FOO_BAR__")).to.eql(" fooBar");
        });

    });

});