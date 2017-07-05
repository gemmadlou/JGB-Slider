export default class {
    constructor(numberOfSlides) {
        this.data = {
            currentSlide:  1,
            numberOfSlides: numberOfSlides || 0
        }
    }

    get(getter) {
        return this.data[getter];
    }

    set(setter, value) {
        this.data[setter] = value;
    }

    isLastSlide() {
        return this.data.currentSlide === this.data.numberOfSlides;
    }

    isFirstSlide() {
        return this.data.currentSlide === 1;
    }

    setPreviousSlide() {
        let previousSlideNumber = this.isFirstSlide() ? this.data.numberOfSlides : this.data.currentSlide - 1;
        this.data.currentSlide = previousSlideNumber;
    }

    setNextSlide() {
        let nextSlideNumber = this.isLastSlide() ? 1 : this.data.currentSlide + 1;
        this.data.currentSlide = nextSlideNumber;
    }

    getSliderPosition() {
        let percentage = (this.data.currentSlide - 1) * -100;
        return percentage + '%';
    }
}
