import TransitionTo from '../Actions/TransitionTo.js';
import CompleteTransitionHandler from '../ActionHandlers/CompleteTransitionHandler.js';

export default function(store, bus, slideNumber) {
    try {
        store.update(new TransitionTo(store.get(), slideNumber));
        bus.emit('TransitionToStarted');
        setTimeout(function() {
            CompleteTransitionHandler(store.get(), bus);
        }, store.get().slideDuration);
    } catch (err) {
        bus.emit('TransitionToFailed', err);
    }
}
