import chai from 'chai';
const expect = chai.expect;

import every from "../../src/every.js";

describe('every.js', () => {

    describe('testing with right params', () => {

        it('should return with false', () => {
            expect(every([true, 1, null, 'yes'], Boolean)).to.be.eql(false);
        });

        it('should return with true', () => {
            expect(every([1, 2, 3, 4], Boolean)).to.be.eql(true);
        });

    });
});
