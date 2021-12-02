import chai from 'chai';
const expect = chai.expect;
import chunk from "../../src/chunk.js";

describe('chunk.js', () => {

    describe('testing with undefined params', () => {

        it('should return Undefined', () => {
            expect(chunk()).to.eql([]);
        });

        it('should return Undefined', () => {
            expect(chunk(undefined)).to.eql([]);
        });

        it('should return Undefined', () => {
            expect(chunk(undefined, undefined)).to.eql([]);
        });

        it('should return Undefined', () => {
            expect(chunk(undefined, 3)).to.eql([]);
        });

    });

    describe('testing with unexpected params', () => {

        it('should not return undefined', () => {
            expect(chunk(['´', '´´´', '\'^\'', 4, 6, 3], 5)).to.not.be.undefined;
        });

        it('should return [ [ 444 ], , , , ,  ]', () => {
            expect(chunk([3,4,'f','4',444],1)).to.eql([ [ 444 ], , , , ,  ]);
        });

        it('should return [ [ 1, \'^```\', undefined ] ]', () => {
            expect(chunk([1,'^```',undefined], 3)).to.eql([ [ 1, '^```', undefined ] ]);
        });

        it('should return A[0].b.c', () => {
            expect(chunk([']a',[0],'.b.c'], 3)).to.eql([ [ ']a', [ 0 ], '.b.c' ] ]);
        });

        it('should return empty', () => {
            expect(chunk(['a', 'b', 'c', 'd'], -30)).to.eql([]);
        });

    });

    describe('testing with right params', () => {

        it('should return right result', () => {
            console.log(chunk(['a', 'b', 'c', 'd'], 2));
            expect(chunk(['a', 'b', 'c', 'd'], 2)[0]).to.eql([ 'c', 'd' ]);
        });

        it('should return right result', () => {
            expect(chunk(['a', 'b', 'c', 'd'], 3)[0]).to.eql([ 'd', undefined, undefined ]);
        });

        it('should return right result', () => {
            expect(chunk(['a', 'b', 'c', 'd', 'e'], 5)[0]).to.eql([ 'a', 'b', 'c', 'd', 'e' ]);
        });

    });

});