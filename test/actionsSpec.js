var assert = require('assert');

import * as actions from '../src/js/Actions.js';

describe('Slide Instance:', function() {
    describe('Initiation', function() {
        it('current slide should equal 1', function() {
            let slider = actions.Init(5);
            assert.equal(slider.currentSlide, 1);
        });

        it('next slide should remain undefined', function() {
            let slider = actions.Init(5);
            assert.equal(slider.nextSlide, undefined);
        });

        it('total slides should equal a constructor defined amount', function() {
            let slider = actions.Init(10);
            assert.equal(slider.numberOfSlides, 10);
        });

        it('slide duration should be a constructor defined amount', function() {
            let slider = actions.Init(2, 500);
            assert.equal(slider.slideDuration, 500);
        });

        it('should not initiate if total number of slides are 0', function() {
            assert.throws(function() {
                let slider = actions.Init(0);
            }, Error);
        });

        it('should not initiate if total number of slides are not provided', function() {
            assert.throws(function() {
                let slider = actions.Init();
            });
        });
    });


    describe('Next slide', function() {
        it('should not go to the next slide if a state is not provided', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.transitionTo();
            }, /Slide state must be provided/);
        });

        it('should not transition if a slide number is not provided', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.transitionTo(slider);
            }, /Transition slide must be provided/);
        });

        it('should transitionTo slide provided', function() {
            let slider = actions.Init(2);
            slider = actions.transitionTo(slider, 2);
            assert.equal(slider.transitionTo, 2);
        });

        it('should have an undefined currentSlide', function() {
            let slider = actions.Init(2);
            slider = actions.transitionTo(slider, 2);
            assert.equal(slider.currentSlide, undefined);
        });

        it('should not transition to a slide that does not exist', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.transitionTo(slider, 3);
            }, /Transition slide does not exist/);
        });

        it('should not transition to a negative numbered slide', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.transitionTo(slider, -1);
            }, /Transition slide cannot be a negative number/);
        });

        it('should not transition to a 0 numbered slide', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.transitionTo(slider, 0);
            }, /Transition slide cannot be zero/);
        });
    });
});
