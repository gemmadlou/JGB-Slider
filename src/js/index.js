import Slider from './Slider.js';

class InitializerOld {
    constructor(options) {

        this.sliders = [];

        options = options || {};

        options.selector = (options.selector === undefined) ? '.js-slider' : options.selector;

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

let Initializer = function(options) {

    let sliders = [];

    options = options || {};

    options.selector = (options.selector === undefined) ? '.js-slider' : options.selector;

    var elements = document.querySelectorAll(options.selector);

    elements.forEach((element) => {

        /**
         * @todo Check slider has been initliazed already
         */

        if (options.selector.charAt(0) === '.' || options.selector.charAt(0) === '#') {
            options.blockname = options.selector.slice(1);
            options.el = element;
            sliders.push(new Slider(options));
        }

    });

    return sliders;
}

module.exports = Initializer;
