export default function (Slide) {
    return Slide.currentSlide || Slide.transitionTo;
}
