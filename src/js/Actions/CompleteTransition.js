import copy from '../Helpers/Copy.js';

//@todo - tests for completeTransition
export default function(state) {
    if (state === undefined) {
        throw new Error('state is undefined');
    }
    let slide = copy(state);

    if (Date.now() - slide.transitionStartedAt < slide.slideDuration) {
        throw new Error('slide has not finished transitioning');
    }

    slide.currentSlide = slide.transitionTo;
    slide.transitionTo = undefined;
    return slide;
}
