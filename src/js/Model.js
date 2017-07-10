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

    isLastSlide(state) {
        return this.state.currentSlide === this.state.numberOfSlides;
    }

    isFirstSlide(state) {
        return this.state.currentSlide === 1;
    }

    next() {
        let nextSlideNumber = this.isLastSlide() ? 1 : this.state.currentSlide + 1;
        this.state.currentSlide = nextSlideNumber;
    }

    previous() {
        let previousSlideNumber = this.isFirstSlide() ? this.state.numberOfSlides : this.state.currentSlide - 1;
        this.state.currentSlide = previousSlideNumber;
    }

    getSliderPosition() {
        let percentage = (this.state.currentSlide - 1) * -100;
        return percentage + '%';
    }

}
