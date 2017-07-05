/**
 * This manages all the state for the slider. The view depends on this completely.
 *
 * @example Example usage
 *          import Slider, {isFirstSlide, isLastSlide} from './Slider.js';
 *          let slider = new Model(5);
 *          slider.action('next')
 *          slider.action('previous')
 */
export default class {
    constructor(numberOfSlides) {
        this.state = {
            currentSlide:  1,
            numberOfSlides: numberOfSlides || 0
        }
    }

    handle = {

        next: (state) => {
            let nextSlideNumber = isLastSlide(state) ? 1 : state.currentSlide + 1;
            state.currentSlide = nextSlideNumber;
            return state;
        },

        previous: (state) => {
            let previousSlideNumber = isFirstSlide(state) ? state.numberOfSlides : state.currentSlide - 1;
            state.currentSlide = previousSlideNumber;
            return state;
        }

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
}

export function isLastSlide(state) {
    return state.currentSlide === state.numberOfSlides;
}

export function isFirstSlide(state) {
    return state.currentSlide === 1;
}
