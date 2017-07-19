import GetPreviousSlide from '../ActionHelper/GetPreviousSlide.js';
import TransitionTo from '../Actions/TransitionTo.js';

export default function(Slide) {
    return TransitionTo(Slide, GetPreviousSlide(Slide));
}
