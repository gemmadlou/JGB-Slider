import InitiationFailedException from '../Exceptions/InitiationFailedException.js';

export default function (numberOfSlides, slideDuration) {

    if (numberOfSlides === undefined) {
        throw new InitiationFailedException('numberOfSlides is required');
    }

    if (numberOfSlides === 0) {
        throw new InitiationFailedException('number of slides must >= 1');
    }

    return {
        currentSlide: 1,
        numberOfSlides: numberOfSlides,
        transitionTo: undefined,
        slideDuration: slideDuration || 1200
    }
}
