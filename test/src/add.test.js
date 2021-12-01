import chai from 'chai';
const expect = chai.expect;
import add from "../../src/add.js";

describe('add.js', () => {

    describe('Testing with faulty parameters', () => {

        it('should return defaultValue', () => {
            expect(add("",2)).to.eql("2");
        });

        it('should return operator', () => {
            expect(add(1,"")).to.eql("1");
        });

        it('should return null', () => {
            expect(add("","")).to.empty;
        });
    });

    describe('Testing with right parameters', () => {

        it('should return 0', () => {
            expect(add()).to.eql(0);
        });

        it('should return total', () => {
            expect(add(6,4)).to.eql(10);
        });
    });

});
