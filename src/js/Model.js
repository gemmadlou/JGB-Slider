export default class {
    constructor(numberOfSlides) {
        this.state = {
            currentSlide:  1,
            numberOfSlides: numberOfSlides || 0
        }
    }

    isLastSlide(state) {
        return state.currentSlide === state.numberOfSlides;
    }

    isFirstSlide(state) {
        return state.currentSlide === 1;
    }

    getSliderPosition() {
        let percentage = (this.state.currentSlide - 1) * -100;
        return percentage + '%';
    }

    getState() {
        return Object.assign({}, this.state);
    }

    action(action, data) {
        if (typeof this.handle[action] !== 'function') {
            return;
        }

        try {
            this.state = this.handle[action](this.getState(), data);
        } catch (e) {
            console.log(e);
        }
    }

    handle = {

        next: (state) => {
            let nextSlideNumber = this.isLastSlide(state) ? 1 : state.currentSlide + 1;
            state.currentSlide = nextSlideNumber;
            return state;
        },

        previous: (state) => {
            let previousSlideNumber = this.isFirstSlide(state) ? state.numberOfSlides : state.currentSlide - 1;
            state.currentSlide = previousSlideNumber;
            return state;
        }

    }
}
