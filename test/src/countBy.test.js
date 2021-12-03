import chai from 'chai';
const expect = chai.expect;

import countBy from "../../src/countBy.js";

describe('countBy.js', () => {

    describe('testing with right params', () => {

        it('should return { true: 1, false: 0 }', () => {
            const users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'betty', 'active': true },
                { 'user': 'fred', 'active': false }
            ];
            expect(countBy(users, value => value.active)).to.be.eql({ true: 2, false: 0 });
        });

        it('should return { true: 0, false: 1 }', () => {
            const users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'betty', 'active': false },
                { 'user': 'fred', 'active': false }
            ];
            expect(countBy(users, value => value.active)).to.be.eql({true: 1,false: 2});
        });

        it('should return { false: 2 }', () => {
            const users = [
                { 'user': 'barney', 'active': false },
                { 'user': 'betty', 'active': false },
                { 'user': 'fred', 'active': false }
            ];
            expect(countBy(users, value => value.active)).to.be.eql({false: 3});
        });

    });
});