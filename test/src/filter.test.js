import chai from 'chai';
const expect = chai.expect;

import filter from "../../src/filter.js";

describe('filter.js', () => {

    describe('testing with right params', () => {

        it('should return with [{ user: \'barney\', active: true }]', () => {
            const users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'fred',   'active': false }
            ];
            expect(filter(users, ({ active }) => active)).to.be.eql([{ user: 'barney', active: true }]);
        });

        it('should return with [{test: \'barney\', active: true }]', () => {
            const users = [
                { 'test': 'barney', 'active': true },
                { 'test': 'fred',   'active': false }
            ];
            expect(filter(users, ({ active }) => active)).to.be.eql([{ test: 'barney', active: true }]);
        });

        it('should return with [[]]', () => {
            const users = [
                { 'test': undefined, 'active': null },
                { 'test': undefined,   'active': null }
            ];
            expect(filter(users, ({ active }) => active)).to.be.eql([[]]);
        });

    });
});
