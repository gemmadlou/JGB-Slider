/**
 * Experimental
 * @todo Add tests
 */
class Slider {

    constructor(input) {
        this.events = {
            beforeSlide: [],
            afterSlide: [],
            onInit: []
        }

        this.option = Object.assign({}, {
            waiting: true,
            sliding: false,
            currentSlide: 1,
            nextSlide: undefined,
            numberOfSlides: 0,
            slideDuration: 1000,
            beforeSlide: function() {},
            afterSlide: function() {},
            onInit: function() {}
        }, input);

        this.on(beforeSlide, this.option.beforeSlide);
        this.on(afterSlide, this.option.afterSlide);
        this.on(onInit, this.option.onInit);
    }

    slide() {
        this.option.beforeSlide();
        this.option.state = STATE.sliding;
        var timer = setTimeout(() => {
            this.option.currentSlide = nextSlideNumber;
            this.option.state = STATE.waiting;
            this.option.afterSlide();
        }, this.option.slideDuration);
    }

    getNext() {
        let nextSlideNumber = this.isLastSlide() ? 1 : this.option.currentSlide + 1;
        this.option.nextSlide = nextSlideNumber;
        this.slide();
    }

    getPrevious() {
        let previousSlideNumber = this.isFirstSlide() ? this.option.numberOfSlides : this.option.currentSlide - 1;
        this.option.currentSlide = previousSlideNumber;
        this.slide();
    }

    isLastSlide() {
        return this.option.currentSlide === this.option.numberOfSlides;
    }

    isFirstSlide() {
        return this.option.currentSlide === 1;
    }

    emit(listener) {
        if (this.events['listener'] === 'undefined') {
            return;
        }

        for (var event in this.events[listener]) {
            event(this);
        }
    }

    on(listener, func) {
        if (this.events[listener] !== undefined && typeof func === 'function') {
            this.events[listener].push(func);
            console.log(this.events);
        }
    }
}

export default Slider;
