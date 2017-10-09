export default function(state, slideToGet) {
    if (state === undefined) {
        throw new Error('/state is undefined/');
    }
    if (state.loopThrough === undefined) {
        throw new Error('state.loopthrough is undefined');
    }

    let whenAtCurrentSlideIsOne = state.loopThrough === false
        && state.currentSlide === 1
        && slideToGet === state.numberOfSlides
        && state.direction === 'left';

    let whenCurrentSlideIsUndefined = state.loopThrough === false
        && state.currentSlide === undefined
        && slideToGet === state.numberOfSlides
        && state.direction === 'left';

    let cannotLoopRight = state.loopThrough === false
        && state.currentSlide === state.numberOfSlides
        && slideToGet === 1
        && state.direction === 'right';
        
    return !whenAtCurrentSlideIsOne && !cannotLoopRight && !whenCurrentSlideIsUndefined;
}