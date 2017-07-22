import Slider from './Slider.js';

module.exports = function(options) {

    options = options && typeof options === 'object' ? options : {};

    options.selector = (options.selector === undefined) ? '.js-slider' : options.selector;

    var elements = document.querySelectorAll(options.selector);

    elements.forEach((element) => {

        // Already instantiated
        if (element.slider) {
            return;
        }

        // Instantiate if has class or id
        if (options.selector.charAt(0) === '.' || options.selector.charAt(0) === '#') {
            options.blockname = options.selector.slice(1);
            options.el = element;
            element.slider = new Slider(options);
        }

    });

}
