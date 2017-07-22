var chai = require('chai');
var assert = chai.assert;

import Init from '../../src/js/Actions/Init.js';
import StartAutoplay from '../../src/js/Actions/StartAutoplay.js';

describe('StartAutoplay', function() {
    it('should set autoplay to true', function() {
        let slider = Init(5);
            slider = StartAutoplay(slider);
        assert.equal(true, slider.autoplay);
    });
    it('should throw an error if no slide is provided', function() {
        assert.throws(function() {
            let slider = Init(5);
                slider = StartAutoplay();
        }, /Slider state is required/);
    });
});
