import chai from 'chai';
const expect = chai.expect;
import words from "../../src/words.js";

describe('words.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return empty array', () => {
            expect(words("")).to.eql([]);
        });
        it('should return array of input integers converted strings', () => {
            expect(words("5+5+10")).to.eql(['5', '5', '10']);
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return words without question marks', () => {
            expect(words('What is your favourite character? Mine is ?')).to.eql(['What', 'is', 'your', 'favourite', 'character', 'Mine', 'is']);
        });

        it('should return array of strings', () => {
            expect(words('Testing is nice')).to.eql(['Testing', 'is', 'nice']);
        });
    });

});