import chai from 'chai';
const expect = chai.expect;

import slice from "../../src/slice.js";

describe('slice.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to return with => []', () => {
            expect(slice()).to.be.eql([]);
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to return with => [3, 4]', () => {
            const array = [1, 2, 3, 4]
            expect(slice(array, 2)).to.be.eql([3, 4]);
        });

    });

});