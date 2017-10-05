var chai = require('chai');
var assert = chai.assert;

import CanLoopThrough from '../../src/js/Specifications/CanLoopThrough.js';

describe('Specification', function() {
    describe('Can loop through', function() {
        it('should be able to loop through when loopthrough is true', function() {
            assert.isTrue(CanLoopThrough({
                loopThrough: true
            }));
        });
        it('should not be able to loop through when loopthrough is false', function() {
            assert.isFalse(CanLoopThrough({
                loopThrough: false
            }));
        });
        it('should throw an error if state is not passed in as a parameter', function() {
            assert.throw(function() {
                CanLoopThrough();
            }, /state is undefined/);
        });
        it('should throw an error if state does not have loopThrough as a parameter', function() {
            assert.throw(function() {
                CanLoopThrough({});
            }, /state.loopthrough is undefined/);
        });
    });
});