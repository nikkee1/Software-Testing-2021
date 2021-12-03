import chai from 'chai';
const expect = chai.expect;

import memoize from "../../src/memoize.js";

describe('memoize.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to be any', () => {
            expect(memoize(function(){})).to.be.any;
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to be any', () => {
            function values(){};
            expect(memoize(values)).to.be.any;
        });

        it('memoize.Cache should be type: WeakMap', () => {
            memoize.Cache = WeakMap;
            expect(memoize.Cache).to.eql(WeakMap);
        });

    });

});