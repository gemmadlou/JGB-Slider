import copy from '../Helpers/Copy.js';
import GetCurrentSlide from '../ActionHelper/GetCurrentSlide.js';
import TransitionToFailedException from '../Exceptions/TransitionToFailedException.js';

export default function(Slide, slideToGet) {

    if (Slide === undefined) {
        throw new TransitionToFailedException('Slide state must be provided');
    }

    if (slideToGet === undefined) {
        throw new TransitionToFailedException('Transition slide must be provided');
    }

    let slide = copy(Slide);
    let currentslide = GetCurrentSlide(slide);

    if (slideToGet > slide.numberOfSlides) {
        throw new TransitionToFailedException('Transition slide does not exist');
    }

    if (slideToGet < 0) {
        throw new TransitionToFailedException('Transition slide cannot be a negative number')
    }

    if (slideToGet === 0) {
        throw new TransitionToFailedException('Transition slide cannot be zero');
    }

    if (slideToGet === currentslide) {
        throw new TransitionToFailedException('Cannot transition to the same slide');
    }

    slide.transitionTo = slideToGet;
    slide.currentSlide = undefined;
    slide.transitionStartedAt = Date.now();

    return slide;
}
