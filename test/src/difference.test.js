import chai from 'chai';
const expect = chai.expect;

import difference from "../../src/difference.js";

describe('difference.js', () => {

    describe('testing with right params', () => {

        it('should return with ', () => {
            expect(difference([2, 1], [2, 3])).to.be.eql([1]);
        });

        it('should return with ', () => {
            expect(difference([undefined, undefined], [2, 3])).to.be.eql([ undefined, undefined ]);
        });

        it('should return with ', () => {
            expect(difference([2, 1], [6,4])).to.be.eql([2,1]);
        });

    });
});