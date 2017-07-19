import CompleteTransition from '../Actions/CompleteTransition.js';

export default function(state, bus) {
    try {
        bus.emit('TransitionCompleted', new CompleteTransition(state));
    } catch (err) {
        bus.emit('TransitionFailed', err);
    }
}
