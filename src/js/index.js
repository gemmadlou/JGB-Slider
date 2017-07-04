import Model from './Model.js';
import View from './View.js';

module.exports = class {

    constructor(userSettings) {

        let defaults = {
            el,
            blockname: 'js-slider'
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

        this.model = new Model(this.view.dom.slides.length);

        this.previousSlideHandler();
        this.nextSlideHandler();
    }

    previousSlideHandler() {
        if (this.view.canClickPreviousButton()) {
            this.view.dom.prev.addEventListener('click', () => {
                this.model.setPreviousSlide();
                this.view.dom.slider.style['margin-left'] = this.model.getSliderPosition();
            });
        }
    }

    nextSlideHandler() {
        if (this.view.canClickNextButton()) {
            this.view.dom.next.addEventListener('click', () => {
                this.model.setNextSlide();
                this.view.dom.slider.style['margin-left'] = this.model.getSliderPosition();
            });
        }
    }

    log(msg) {
        console.log(msg);
    }

}
