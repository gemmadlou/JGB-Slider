import TransitionToNextSlide from '../Actions/TransitionToNextSlide.js';
import CompleteTransitionHandler from '../ActionHandlers/CompleteTransitionHandler.js';

export default function(store, bus) {
    try {
        store.update(new TransitionToNextSlide(store.get()));
        bus.emit('TransitionToNextSlideStarted');
        setTimeout(function() {
            CompleteTransitionHandler(store, bus);
        }, store.get().slideDuration);
    } catch (err) {
        bus.emit(err.name, err);
    }
}
