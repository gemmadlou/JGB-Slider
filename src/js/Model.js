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
        return (this.get('currentSlide') === this.get('numberOfSlides'));
    }

    isFirstSlide() {
        return (this.get('currentSlide')) === 1;
    }

    setPreviousSlide() {
        let previousSlideNumber = this.isFirstSlide() ? this.get('numberOfSlides') : this.get('currentSlide') - 1;
        this.set('currentSlide', previousSlideNumber);
    }

    setNextSlide() {
        let nextSlideNumber = this.isLastSlide() ? 1 : this.get('currentSlide') + 1;
        this.set('currentSlide', nextSlideNumber);
    }

    getSliderPosition() {
        let percentage = (this.get('currentSlide') - 1) * -100;
        return percentage + '%';
    }
}
