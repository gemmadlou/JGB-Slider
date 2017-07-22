import TransitionToPreviousSlide from '../Actions/TransitionToPreviousSlide.js';
import CompleteTransitionHandler from '../ActionHandlers/CompleteTransitionHandler.js';

export default function(store, bus) {
    try {
        store.update(new TransitionToPreviousSlide(store.get()));
        bus.emit('TransitionToPreviousSlideStarted');
        setTimeout(function() {
            CompleteTransitionHandler(store.get(), bus);
        }, store.get().slideDuration);
    } catch (err) {
        bus.emit(err.name, err);
    }
}
