import GetPreviousSlide from '../ActionHelper/GetPreviousSlide.js';
import TransitionTo from '../Actions/TransitionTo.js';
import copy from '../Helpers/Copy.js';

export default function(Slide) {
    let slide = copy(Slide);
        slide.direction = 'left';
    return TransitionTo(Slide, GetPreviousSlide(Slide));
}
