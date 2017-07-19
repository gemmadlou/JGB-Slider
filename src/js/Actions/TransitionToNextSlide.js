import GetNextSlide from '../ActionHelper/getNextSlide.js';
import TransitionTo from '../Actions/TransitionTo.js';

export default function(Slide) {
    return TransitionTo(Slide, GetNextSlide(Slide));
}
