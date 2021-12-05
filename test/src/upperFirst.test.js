import chai from 'chai';
const expect = chai.expect;

import upperFirst from "../../src/upperFirst.js";

describe('upperFirst.js', () => {

    describe('Testing with unexpected input', () => {

        it('expected to return with => ""', () => {
            expect(upperFirst()).to.be.eql("");
        });

    });

    describe('Testing with expected/common input', () => {

        it('expected to return with => \'Fred\'', () => {
            expect(upperFirst('fred')).to.be.eql('Fred');
        });

        it('expected to return with => \'FRED\'', () => {
            expect(upperFirst('FRED')).to.be.eql('FRED');
        });

    });

});