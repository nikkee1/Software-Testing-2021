import chai from 'chai';
const expect = chai.expect;

import reduce from "../../src/reduce.js";

describe('reduce.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to be undefined', () => {
            expect(reduce()).to.be.eql(undefined);
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to return with => 3', () => {
            expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.be.eql(3);
        });

        it('expected to return with => { \'1\': [\'a\', \'c\'], \'2\': [\'b\'] }', () => {
            expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
                    return result},
                {})).to.eql({ '1': ['a', 'c'], '2': ['b'] });
        });

    });

});