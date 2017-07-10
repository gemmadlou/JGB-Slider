/**
 * This manages all the state for the slider. The view depends on this completely.
 */
export default class {
    constructor(numberOfSlides) {

        this.state = {
            currentSlide:  1,
            numberOfSlides: numberOfSlides || 0,
        }
    }

    setNumberOfSlides(numberOfSlides) {
        this.state.numberOfSlides = numberOfSlides;
    }

    isLastSlide() {
        return this.state.currentSlide === this.state.numberOfSlides;
    }

    isFirstSlide() {
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
