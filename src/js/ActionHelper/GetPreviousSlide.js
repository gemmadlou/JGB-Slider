import GetCurrentSlide from './GetCurrentSlide.js';

export default function (Slide) {
    if (Slide === undefined) {
        throw new Error('Getting previous slide requires state');
    }
    let currentSlide = GetCurrentSlide(Slide);
    return currentSlide === 1 ? Slide.numberOfSlides : currentSlide - 1;
}
