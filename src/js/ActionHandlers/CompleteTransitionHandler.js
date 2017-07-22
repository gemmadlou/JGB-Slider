import CompleteTransition from '../Actions/CompleteTransition.js';

export default function(store, bus) {
    try {
        bus.emit('TransitionCompleted', new CompleteTransition(store.get()));
    } catch (err) {
        bus.emit(err.name, err);
    }
}
