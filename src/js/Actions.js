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
    let currentslide = getCurrentSlide(slide);

    if (slideToGet > slide.numberOfSlides) {
        throw new Error('Transition slide does not exist');
    }

    if (slideToGet < 0) {
        throw new Error('Transition slide cannot be a negative number')
    }

    if (slideToGet === 0) {
        throw new Error('Transition slide cannot be zero');
    }

    if (slideToGet === currentslide) {
        throw new Error('Cannot transition to the same slide');
    }

    slide.transitionTo = slideToGet;
    slide.currentSlide = undefined;

    return slide;
}

export const getCurrentSlide = (Slide) => {
    return Slide.currentSlide || Slide.transitionTo;
}

export const getNextSlide = (Slide) => {
    if (Slide === undefined) {
        throw new Error('Getting next slide requires state');
    }
    let currentSlide = getCurrentSlide(Slide);
    return currentSlide === Slide.numberOfSlides ? 1 : currentSlide + 1;
}

export const getPreviousSlide = (Slide) => {
    if (Slide === undefined) {
        throw new Error('Getting previous slide requires state');
    }
    let currentSlide = getCurrentSlide(Slide);
    return currentSlide === 1 ? Slide.numberOfSlides : currentSlide - 1;
}

export const transitionToNextSlide = (Slide) => {
    return transitionTo(Slide, getNextSlide(Slide));
}

export const transitionToPreviousSlide = (Slide) => {
    return transitionTo(Slide, getPreviousSlide(Slide));
}

export const completeTransition = (state) => {
    if (state === undefined) {
        throw new Error('state is undefined');
    }
    let slide = copy(state);
    slide.currentSlide = slide.transitionTo;
    slide.transitionTo = undefined;
    return slide;
}
