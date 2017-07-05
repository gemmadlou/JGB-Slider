import Model from './Model.js';
import View from './View.js';

module.exports = class {

    constructor(userSettings) {

        let defaults = {
            el,
            blockname: 'js-slider',
            slideDuration: 800,
            beforeSlide: function() {},
            afterSlide: function() {},
            init: function() {}
        };

        this.settings = Object.assign({}, defaults, userSettings);

        this.init();
    }

    init() {
        this.view = new View(
            this.settings.el,
            this.settings.blockname
        );

        if (!this.view.isValid()) {
            this.log('Slider dom is invalid.')
            return;
        }

        this.model = new Model(
            this.view.slides.length,
            this.settings.slideDuration
        );

        this.view.slider.style.transitionDuration = this.model.data.slideDuration + 'ms';

        this.handleEvents();

        this.settings.init();
    }

    handleEvents() {
        if (this.view.canClickPreviousButton()) {
            this.view.prev.addEventListener('click', () => {
                this.previous();
            });
        }

        if (this.view.canClickNextButton()) {
            this.view.next.addEventListener('click', () => {
                this.next();
            });
        }
    }

    previous() {
        this.model.setPreviousSlide();
        this.view.updateSlidePosition(this.model.getSliderPosition());
    }

    next() {
        this.model.setNextSlide();
        this.view.updateSlidePosition(this.model.getSliderPosition());
    }

    log(msg) {
        console.log(msg);
    }

}
