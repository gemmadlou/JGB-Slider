export default function (numberOfSlides, slideDuration) {

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
