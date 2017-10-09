var chai = require('chai');
var assert = chai.assert;

import CanLoopThrough from '../../src/js/Specifications/CanLoopThrough.js';

describe('CanLoopThrough Specification', function() {

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

    describe('Given loopThrough is true', function() {
        describe('And slider direction is previous', function() {
            describe('And current slide is 1', function() {
                it('should loop through', function() {
                    assert.equal(true, CanLoopThrough({
                        currentSlide: 1,
                        loopThrough: true,
                        direction: 'left',
                        numberOfSlides: 5
                    }, 5)); 
                })
            });
        })
    });
    describe('Given loopThrough is false', function() {
        describe('When slider direction is left', function() {
            describe('And current slide is 1', function() {
                it('cannot loop through', function() {
                    assert.isFalse(CanLoopThrough({
                        currentSlide: 1,
                        loopThrough: false,
                        direction: 'left',
                        numberOfSlides: 5
                    }, 5));
                });
            });
            describe('And current slide is not first or last', function() {
                it('should loop through', function() {
                    assert.isTrue(CanLoopThrough({
                        currentSlide: 2,
                        loopThrough: false,
                        direction: 'left',
                        numberOfSlides: 5
                    }, 1));
                });
            });

            describe('And current slide is the last slide', function() {
                it('should loop through', function() {
                    assert.isTrue(CanLoopThrough({
                        currentSlide: 5,
                        loopThrough: false,
                        direction: 'left',
                        numberOfSlides: 5
                    }, 4));
                });
            });
            
            describe('And current slide is undefined, but transitionTo slide is lastSlide', function() {
                it('should not loop through', function() {
                    assert.isFalse(CanLoopThrough({
                        currentSlide: undefined,
                        loopThrough: false,
                        transitionTo: 5,
                        direction: 'left',
                        numberOfSlides: 5
                    }, 5));
                });
            });
        });
        describe('When slider direction is right', function() {
            describe('and current slide is the last slide,', function() {
                it('should not loop through', function() {
                    assert.isFalse(CanLoopThrough({
                        currentSlide: 5,
                        loopThrough: false,
                        direction: 'right',
                        numberOfSlides: 5
                    }, 1));
                });
            });

            describe('And current slide is undefined, but transitionTo slide is firstSlide', function() {
                it('should not loop through', function() {
                    assert.isFalse(CanLoopThrough({
                        currentSlide: undefined,
                        loopThrough: false,
                        transitionTo: 1,
                        direction: 'right',
                        numberOfSlides: 5
                    }, 1));
                });
            });

            describe('And current slide is first slide', function() {
                it('should loop through', function() {
                    assert.isTrue(CanLoopThrough({
                        currentSlide: 1,
                        loopThrough: false,
                        direction: 'right',
                        numberOfSlides: 5
                    }, 1));
                });
            });

            describe('And current slide is not first or last slide', function() {
                it('should loop through', function() {
                    assert.isTrue(CanLoopThrough({
                        currentSlide: 3,
                        loopThrough: false,
                        direction: 'right',
                        numberOfSlides: 5
                    }, 4));
                });
            });
        });
    });
});