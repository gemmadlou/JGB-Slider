let copy = (Item) => {
    return Object.assign({}, Item);
}

export const Init = (numberOfSlides, slideDuration) => {

    if (numberOfSlides === undefined) {
        throw new Error('Total number of slides must be provided');
    }

    if (numberOfSlides === 0) {
        throw new Error('Total slides cannot be 0');
    }

    return {
        currentSlide: 1,
        numberOfSlides: numberOfSlides,
        transitionTo: undefined,
        slideDuration: slideDuration || 1200
    }
}

export const transitionTo = (Slide, slideToGet) => {

    if (Slide === undefined) {
        throw new Error('Slide state must be provided');
    }

    if (slideToGet === undefined) {
        throw new Error('Transition slide must be provided');
    }

    let slide = copy(Slide);

    if (slideToGet > slide.numberOfSlides) {
        throw new Error('Transition slide does not exist');
    }

    if (slideToGet < 0) {
        throw new Error('Transition slide cannot be a negative number')
    }

    if (slideToGet === 0) {
        throw new Error('Transition slide cannot be zero');
    }

    slide.transitionTo = slide.currentSlide + 1;
    slide.currentSlide = undefined;

    return slide;
}

export const getNextSlide = (Slide) => {

}
