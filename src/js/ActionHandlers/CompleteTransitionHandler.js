import CompleteTransition from '../Actions/CompleteTransition.js';

export default function(store, bus) {
    try {
        store.update(new CompleteTransition(store.get()));
        bus.emit('TransitionCompleted')
    } catch (err) {
        bus.emit(err.name, err);
    }
}
