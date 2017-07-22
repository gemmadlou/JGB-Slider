import GetCurrentSlide from './GetCurrentSlide.js';

export default function(state) {
    let percentage = (GetCurrentSlide(state) - 1) * -100;
    return percentage + '%';
}
