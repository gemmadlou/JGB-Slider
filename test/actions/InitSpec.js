var chai = require('chai');
var assert = chai.assert;

import * as actions from '../../src/js/Actions';

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
        }, /number of slides must >= 1/);
    });

    it('should not initiate if total number of slides are not provided', function() {
        assert.throws(function() {
            let slider = actions.Init();
        }, /numberOfSlides is required/);
    });

    it('should have a loopthrough option of false by default', function() {
        let slider = actions.Init(5, 500, 1000);
        assert.isFalse(slider.loopThrough);
    })
});