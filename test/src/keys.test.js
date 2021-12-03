import chai from 'chai';
const expect = chai.expect;

import keys from "../../src/keys.js";

describe('keys.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return []', () => {
            expect(keys(undefined)).to.eql([]);
        });

        it('should return []', () => {
            expect(keys()).to.eql([]);
        });
    });

    describe('Testing with expected/common input', () => {

        function Foo() {
            this.a = 1;
            this.b = 2;
        }

        Foo.prototype.c = 3

        it('should return [ \'a\', \'b\' ]', () => {
            expect(keys(new Foo)).to.eql([ 'a', 'b' ]);
        });

        it('should return [\'0\', \'1\']', () => {
            expect(keys('hi')).to.eql(['0', '1']);
        });

    });

});