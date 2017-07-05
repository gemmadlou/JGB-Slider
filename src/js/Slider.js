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

        this.model = new Model(this.view.slides.length);

        this.eventHandlers();
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

    next() {
        this.model.action('next');
        this.view.slider.style['margin-left'] = this.model.getSliderPosition();
    }

    previous() {
        this.model.action('previous');
        this.view.slider.style['margin-left'] = this.model.getSliderPosition();
    }

    log(msg) {
        console.log(msg);
    }

}
