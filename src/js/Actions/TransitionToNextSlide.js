import GetNextSlide from '../ActionHelper/GetNextSlide.js';
import TransitionTo from '../Actions/TransitionTo.js';
import copy from '../Helpers/Copy.js';

export default function(Slide) {
    let slide = copy(Slide);
        slide.direction = 'right';
    return TransitionTo(Slide, GetNextSlide(Slide));
}
