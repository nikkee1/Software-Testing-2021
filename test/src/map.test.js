import chai from 'chai';
const expect = chai.expect;

import map from "../../src/map.js";

describe('map.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return []', () => {
            expect(map(undefined,undefined)).to.eql([]);
        });

        it('should return []', () => {
            expect(map()).to.eql([]);
        });
    });

    describe('Testing with expected/common input', () => {

        function square(n) {
            return n * n;
        }

        it('should return [ 16, 64 ]', () => {
            expect(map([4, 8], square)).to.eql([ 16, 64 ]);
        });

        it('should return []', () => {
            expect(map([], square)).to.eql([]);
        });

    });

});