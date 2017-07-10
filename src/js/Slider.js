import Model from './Model.js';
import View from './View.js';

export default class {

    constructor(userSettings) {

        let defaults = {
            el,
            blockname: 'js-slider',
            beforeSlide: function() {},
            afterSlide: function() {},
            onInit: function() {}
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

        this.model = new Model(this.view.slides.length);

        this.eventHandlers();

        this.settings.onInit();
    }

    eventHandlers() {
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

    updateSliderPosition() {
        this.settings.beforeSlide();
        this.view.slider.style['margin-left'] = this.model.getSliderPosition();
        var timer = setTimeout(() => {
            this.settings.afterSlide();
        }, this.settings.slideDuration);
    }

    next() {
        this.model.action('next');
        this.updateSliderPosition();
    }

    previous() {
        this.model.action('previous');
        this.updateSliderPosition();
    }

    log(msg) {
        console.log(msg);
    }

}
