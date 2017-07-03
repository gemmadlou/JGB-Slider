var merge = require('lodash.merge');

export default class Slider {

    constructor(userSettings) {
        let defaults = {
            el,
            blockname: 'slider'
        };

        this.settings = merge(defaults, userSettings);

        this.data = {
            currentSlide:  0,
            numberOfSlides: 0
        }

        this.init();
    }

    init() {

        this.defineDomElements();

        if (!this.isDomValid()) {
            return;
        }

        this.initializeData();

        this.handleNextSlideEvent();

        this.handlePrevSlideEvent();

    }

    defineDomElements() {
        if (this.settings.el !== 'undefined') {
            this.settings.slider = this.settings.el.querySelector('.' + this.settings.blockname + '__slider');
            this.settings.slides = this.settings.el.querySelectorAll('.' + this.settings.blockname + '__slide');
            this.settings.next = this.settings.el.querySelector('.' + this.settings.blockname + '__next-slide');
            this.settings.prev = this.settings.el.querySelector('.' + this.settings.blockname + '__prev-slide');
        }
    }

    isDomValid() {
        return (this.settings.el !== undefined) &&
                (this.settings.slider !== undefined) &&
                (this.settings.slides !== undefined);
    }

    initializeData() {
        this.set('numberOfSlides', this.settings.slides.length);
        this.set('currentSlide', 1);
    }

    handlePrevSlideEvent() {
        if (this.settings.prev !== 'undefined') {
            this.settings.prev.addEventListener('click', () => {
                this.handlePreviousSlide();
            });
        }
    }

    handleNextSlideEvent() {
        if (this.settings.next !== 'undefined') {
            this.settings.next.addEventListener('click', () => {
                this.handleNextSlide();
            });
        }
    }

    isLastSlide() {
        return (this.get('currentSlide') === this.get('numberOfSlides'));
    }

    isFirstSlide() {
        return (this.get('currentSlide')) === 1;
    }

    getSliderPosition() {
        let percentage = (this.get('currentSlide') - 1) * -100;
        return percentage + '%';
    }

    setNextSlide() {
        let nextSlideNumber = this.isLastSlide() ? 1 : this.get('currentSlide') + 1;
        this.set('currentSlide', nextSlideNumber);
    }

    handleNextSlide() {
        this.setNextSlide();
        this.settings.slider.style['margin-left'] = this.getSliderPosition();
    }

    setPreviousSlide() {
        let previousSlideNumber = this.isFirstSlide() ? this.get('numberOfSlides') : this.get('currentSlide') - 1;
        this.set('currentSlide', previousSlideNumber);
    }

    handlePreviousSlide() {
        this.setPreviousSlide();
        this.settings.slider.style['margin-left'] = this.getSliderPosition();
    }

    get(getter) {
        return this.data[getter];
    }

    set(setter, value) {
        this.data[setter] = value;
    }
}

var el = new Slider({
    el: document.querySelector('.js-slider'),
    blockname: 'js-slider'
});

console.log(el);
