export default function(state, slideToGet) {
    if (state === undefined) {
        throw new Error('/state is undefined/');
    }
    if (state.loopThrough === undefined) {
        throw new Error('state.loopthrough is undefined');
    }

    let cannotLoopLeft = state.loopThrough === false
        && state.currentSlide === 1
        && slideToGet === state.numberOfSlides
        && state.direction === 'left';

    let whenCurrentSlideIsUndefinedAndDirectionIsLeft = state.loopThrough === false
        && state.currentSlide === undefined
        && slideToGet === state.numberOfSlides
        && state.direction === 'left';

    let whenCurrentSlideIsUndefinedAndDirectionIsRight = state.loopThrough === false
        && state.currentSlide === undefined
        && slideToGet === 1
        && state.direction === 'right';

    let cannotLoopRight = state.loopThrough === false
        && state.currentSlide === state.numberOfSlides
        && slideToGet === 1
        && state.direction === 'right';
        
    return !cannotLoopLeft 
        && !cannotLoopRight 
        && !whenCurrentSlideIsUndefinedAndDirectionIsLeft 
        && !whenCurrentSlideIsUndefinedAndDirectionIsRight;
}