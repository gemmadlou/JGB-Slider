var assert = require('assert');

import * as actions from '../src/js/Actions';
import GetNextSlide from '../src/js/ActionHelper/GetNextSlide.js';
import GetPreviousSlide from '../src/js/ActionHelper/GetPreviousSlide.js';
import GetCurrentSlide from '../src/js/ActionHelper/GetCurrentSlide.js';

console.log(actions)

describe('Slide Instance:', function() {
    describe('Initiation', function() {
        it('current slide should equal 1', function() {
            let slider = actions.Init(5);
            assert.equal(1, slider.currentSlide);
        });

        it('next slide should remain undefined', function() {
            let slider = actions.Init(5);
            assert.equal(undefined, slider.nextSlide);
        });

        it('total slides should equal a constructor defined amount', function() {
            let slider = actions.Init(10);
            assert.equal(10, slider.numberOfSlides);
        });

        it('slide duration should be a constructor defined amount', function() {
            let slider = actions.Init(2, 500);
            assert.equal(500, slider.slideDuration);
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


    describe('TransitionTo', function() {
        it('should not go to the next slide if a state is not provided', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.TransitionTo();
            }, /Slide state must be provided/);
        });

        it('should not transition if a slide number is not provided', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.TransitionTo(slider);
            }, /Transition slide must be provided/);
        });

        it('should TransitionTo slide provided', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 2);
            assert.equal(2, slider.transitionTo);
        });

        it('should not transition to the same slide', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.TransitionTo(slider, 1);
            }, /Cannot transition to the same slide/);
        });

        it('should have an undefined currentSlide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 2);
            assert.equal(undefined, slider.currentSlide);
        });

        it('should not transition to a slide that does not exist', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.TransitionTo(slider, 3);
            }, /Transition slide does not exist/);
        });

        it('should not transition to a negative numbered slide', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.TransitionTo(slider, -1);
            }, /Transition slide cannot be a negative number/);
        });

        it('should not transition to a 0 numbered slide', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                slider = actions.TransitionTo(slider, 0);
            }, /Transition slide cannot be zero/);
        });

        it('should be able to change transition slide mid transition', function() {
            let slider = actions.Init(3);
            slider = actions.TransitionTo(slider, 2);
            slider = actions.TransitionTo(slider, 3);
            assert.equal(3, slider.transitionTo);
        });
    });

    describe('GetNextSlide', function() {
        it('should fail if slide is not provided', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                GetNextSlide();
            }, /Getting next slide requires state/);
        });

        it('should get next incremental slide if not on last slide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, GetNextSlide(slider));
            assert.equal(2, slider.transitionTo);
        });
        it('should get first slide if on last slide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 2);
            slider = actions.TransitionTo(slider, GetNextSlide(slider));
            assert.equal(1, slider.transitionTo);
        });
    });
    describe('GetPreviousSlide', function() {
        it('should fail if slide is not provided', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                GetPreviousSlide();
            }, /Getting previous slide requires state/);
        });

        it('should get next decremental slide if not on first slide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 2);
            slider = actions.TransitionTo(slider, GetPreviousSlide(slider));
            assert.equal(1, slider.transitionTo);
        });

        it('should get last slide if on first slide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, GetPreviousSlide(slider));
            assert.equal(2, slider.transitionTo);
        });
    });

    describe('TransitionToNextSlide', function() {
        it('should go to next incremental slide 1 -> 2', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionToNextSlide(slider);
            assert.equal(2, slider.transitionTo);
        });
        it('should go to next incremental slide 1 -> 2 -> 3', function() {
            let slider = actions.Init(3);
            slider = actions.TransitionToNextSlide(slider);
            slider = actions.TransitionToNextSlide(slider);
            assert.equal(3, slider.transitionTo);
        });
    });

    describe('TransitionToPreviousSlide', function() {
        it('should go to next incremental slide 1 -> 2', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionToNextSlide(slider);
            assert.equal(2, slider.transitionTo);
        });
        it('should go to next incremental slide 1 -> 3 -> 2', function() {
            let slider = actions.Init(3);
            slider = actions.TransitionToPreviousSlide(slider);
            slider = actions.TransitionToPreviousSlide(slider);
            assert.equal(2, slider.transitionTo);
        });
    });

    describe('CompleteTransition', function() {
        it('should fail if state is undefined', function() {
            assert.throws(function() {
                let slider = actions.Init(3);
                slider = actions.TransitionTo(slider, 2);
                slider = actions.CompleteTransition();
            }, /state is undefined/);
        });
        it('should set currentSlide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionToNextSlide(slider);
            slider = actions.CompleteTransition(slider);
            assert.equal(2, slider.currentSlide);
        });
        it('should set TransitionTo as defined', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionToNextSlide(slider);
            slider = actions.CompleteTransition(slider);
            assert.equal(undefined, slider.transitionTo);
        });
    });

});
