import chai from 'chai';
const expect = chai.expect;

import defaultTo from "../../src/defaultTo.js";

describe('defaultTo.js', () => {

    describe('testing with right parameters', () => {

        it('should return with 1', () => {
            expect(defaultTo(1, 10)).to.be.eql(1);
        });

        it('should return with 10', () => {
            expect(defaultTo(undefined, 10)).to.be.eql(10);
        });

        it('should return with \'undefined\'', () => {
            expect(defaultTo(undefined, undefined)).to.be.eql(undefined);
        });

    });
});
