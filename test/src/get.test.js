import chai from 'chai';
const expect = chai.expect;
import get from "../../src/get.js";

const television = {
    price: "1000",
    producer: "Sony",
    category: "entertainment"
}

const candy = {
    price: "0.5",
    producer: "Fazer",
    category: "food",
    subcategory: ""
}

describe('get.js', () => {

    describe('Testing with unexpected input', () => {

        it('should return default value when undefined input', () => {
            expect(get(television, 'subcategory', 'Not set')).to.eql('Not set');
        });
    });

    describe('Testing with expected/common input', () => {

        it('should return correct price when price is below 1', () => {
            expect(get(candy, 'price')).to.eql('0.5');
        });
        it('should return correct price when price is above 1', () => {
            expect(get(television, 'price')).to.eql('1000');
        });
        it('should return empty string', () => {
            expect(get(candy, 'subcategory')).to.eql('');
        });
    });

});