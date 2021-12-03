import chai from 'chai';
const expect = chai.expect;

import compact from "../../src/compact.js";

describe('compact.js', () => {

    describe('testing with undefined params', () => {

        it('should return []', () => {
            expect(compact([])).to.be.eql([]);
        });

        it('should return []', () => {
            expect(compact([undefined, undefined, undefined])).to.be.eql([]);
        });

    });

    describe('testing with unexpected params', () => {

        it('should return []', () => {
            expect(compact([false, true, false, false, false, false])).to.be.eql([]);
        });

        it('should return [1,[],2,3]', () => {
            expect(compact([1, 1, [], 2, '', 3])).to.be.eql([1,[],2,3]);
        });

        it('should return [[],[],[],[],[]]', () => {
            expect(compact([[], [], [], [], [], []])).to.be.eql([[],[],[],[],[]]);
        });

        it('should return []', () => {
            expect(compact(['', '', false, '', '', ''])).to.be.eql([]);
        });

    });

    describe('testing with right params', () => {

        it('should return [1, 2, 3]', () => {
            expect(compact([0, 1, false, 2, '', 3])).to.be.eql([1, 2, 3]);
        });

    });

});