import GetNextSlide from '../ActionHelper/GetNextSlide.js';
import TransitionTo from '../Actions/TransitionTo.js';

export default function(Slide) {
    return TransitionTo(Slide, GetNextSlide(Slide));
}
