import chai from 'chai';
const expect = chai.expect;
import castArray from "../../src/castArray.js";

describe('castArray.js', () => {

    describe('testing with undefined params', () => {

        it('should return Undefined', () => {
            expect(castArray()).to.eql([undefined]);
        });

        it('should return Undefined', () => {
            expect(castArray(undefined)).to.eql([undefined]);
        });

    });

    describe('testing with unexpected params', () => {

        it('should return false', () => {
            expect(castArray([{name: 'Test Person', address: 'Test Avenue 3', zip: 322223}])).to.
            not.be.true;
        });

        it('should return false', () => {
            expect(castArray("\'3\', \'4\'")).to.not.be.true;
        });

        it('should return false', () => {
            expect(castArray("123")).to.not.be.true;
        });

        it('should return false', () => {
            expect(castArray('a',[0],'.b.c')).to.not.be.true;
        });

    });

    describe('testing with right params', () => {

        it('should return [1, 2, 3]', () => {
            expect(castArray([1, 2, 3])).to.eql([1, 2, 3]);
        });

        it('should return []', () => {
            expect(castArray([])).to.eql([]);
        });

        it('should return [1,\'2\', 3]', () => {
            expect(castArray([1, "2", 3])).to.eql([1, "2", 3]);
        });

    });

});