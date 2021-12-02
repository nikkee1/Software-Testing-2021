import chai from 'chai';
const expect = chai.expect;

import drop from "../../src/drop.js";

describe('drop.js', () => {

    describe('testing with right params', () => {

        it('should return with [2, 3]', () => {
            expect(drop([1, 2, 3])).to.be.eql([2, 3]);
        });

        it('should return with [3]', () => {
            expect(drop([1, 2, 3], 2)).to.be.eql([3]);
        });

        it('should return with []', () => {
            expect(drop([1, 2, 3], 5)).to.be.eql([]);
        });

        it('should return with [1, 2, 3]', () => {
            expect(drop([1, 2, 3], 0)).to.be.eql([1, 2, 3]);
        });

    });
});