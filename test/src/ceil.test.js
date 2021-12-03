import chai from 'chai';
const expect = chai.expect;
import ceil from "../../src/ceil.js";
import add from "../../src/add.js";


describe('ceil.js', () => {

    describe('testing with undefined params', () => {

        it('ceil() -> should return NaN', () => {
            expect(ceil()).to.eql(NaN);
        });

        it('ceil(undefined) -> should return NaN', () => {
            expect(ceil(undefined)).to.eql(NaN);
        });

    });

    describe('testing with unexpected params', () => {

        it('ceil("\'\'\'\'") -> should return NaN', () => {
            expect(ceil("\'\'\'\'")).to.eql(NaN);
        });

        it('ceil("\'3\', \'4\'") -> should return NaN', () => {
            expect(ceil("\'3\', \'4\'")).to.eql(NaN);
        });

        it('ceil("123") -> should return 123', () => {
            expect(ceil("123")).to.eql(123);
        });

        it('ceil(\'a[0].b.c\') -> should return NaN', () => {
            expect(ceil('a[0].b.c')).to.eql(NaN);
        });

    });

    describe('testing with right params', () => {

        it('ceil(4.006) -> should return 5', () => {
            expect(ceil(4.006)).to.eql(5);
        });

        it('ceil(6.004, 2) -> should return 6.01', () => {
            expect(ceil(6.004, 2)).to.eql(6.01);
        });

        it('ceil(6040, -2) -> should return 6100', () => {
            expect(ceil(6040, -2)).to.eql(6100);
        });

    });

    describe('testing together with add.js', () => {

        it('First adding, then rounding', () => {
            expect(ceil(add(6,8), 2)).to.eql(14.00);
        });

        it('First ceil, then adding', () => {
            expect(add(ceil(14, 2), ceil(22,2))).to.eql(36);
        });

    });

});