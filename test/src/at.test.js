import chai from 'chai';
const expect = chai.expect;
import at from "../../src/at.js";

describe('at.js', () => {

    describe('testing undefined params', () => {

        it('should return [undefined, undefined]', () => {
            const object = {};
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([undefined, undefined]);
        });

        it('should return [undefined, 5]', () => {
            const object = { 'a': [{ 'b': { 'c': undefined } }, 5] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([undefined, 5]);
        });

        it('should return [3, undefined]', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }, undefined] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3, undefined]);
        });
    });

    describe('testing wrong type params', () => {

        it('should return [\'3\', \'4\']', () => {
            const object = { 'a': [{ 'b': { 'c': "3" } }, "4"] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql(['3','4']);
        });

        it('should return [undefined, undefined]', () => {
            const object = { '': [{ '': { '': 1 } }, 2] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([undefined, undefined]);
        });

        it('should return [undefined, undefined]', () => {
            const object = { '1': [{ '2': { '3': 1 } }, 2] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([undefined, undefined]);
        });

        it('should return [undefined, undefined]', () => {
            const object = { 'c': [{ 'b': { 'a': 1 } }, 2] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([undefined, undefined]);
        });

    });

    describe('testing right params', () => {

        it('should return [3,4]', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3,4]);
        });

        it('should return [2,4]', () => {
            const object = { 'a': [{ 'b': { 'c': 2 } }, 6] };
            expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([2,6]);
        });

    });

});
