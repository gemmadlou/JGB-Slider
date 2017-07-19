import copy from '../Helpers/Copy.js';

export default function(state) {
    if (state === undefined) {
        throw new Error('state is undefined');
    }
    let slide = copy(state);
    slide.currentSlide = slide.transitionTo;
    slide.transitionTo = undefined;
    return slide;
}
