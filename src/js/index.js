import _ from 'lodash';

export default class Slider {

    constructor(userSettings) {
        let defaults = {};

        defaults.el;
        defaults.blockname = 'slider';

        this.settings = _.merge(defaults, userSettings);

        this.init();
    }

    init() {

        console.log('here');

        this.defineElements();

        if (!this.isValidOptions()) {
            console.log(this, 'hero');
            return;
        }

    }

    defineElements() {
        console.log(this.settings.el !== 'undefined');
        if (this.settings.el !== 'undefined') {
            this.settings.slider = this.settings.el.querySelector(this.blockname + '__slider');
            this.settings.slides = this.settings.el.querySelectorAll(this.blockname + '__slide');
        }
    }

    isValidOptions() {
        return (this.settings.el !== undefined) &&
                (this.settings.slider !== undefined) &&
                (this.settings.slides !== undefined);
    }

    handlePrevSlide() {

    }

    handleNextSlide() {

    }
}

var el = new Slider({
    el: document.querySelector('.btm-slider'),
    blockname: 'btm-slider'
});

console.log(el);
