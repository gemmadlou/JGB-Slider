import TransitionToNextSlide from '../Actions/TransitionToNextSlide.js';
import CompleteTransitionHandler from '../ActionHandlers/CompleteTransitionHandler.js';

export default function(store, bus) {
    try {
        let newstate = new TransitionToNextSlide(store.get());
        store.update(newstate);
        bus.emit('TransitionToNextSlideStarted');
        setTimeout(function() {
            CompleteTransitionHandler(store.get(), bus);
        }, store.get().slideDuration);
    } catch (err) {
        bus.emit('TransitionToNextSlideFailed', err);
    }
}
