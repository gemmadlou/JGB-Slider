import Slider from './Slider.js';

class Initializer {
    constructor(options) {

        this.sliders = [];

        if (options.selector === undefined) {
            return;
        }

        var elements = document.querySelectorAll(options.selector);

        elements.forEach((element) => {

            /**
             * @todo Check slider has been initliazed already
             */

            if (options.selector.charAt(0) === '.' || options.selector.charAt(0) === '#') {
                options.blockname = options.selector.slice(1);
                options.el = element;
                this.sliders.push(new Slider(options));
            }

        });
    }
}

module.exports = Initializer;
