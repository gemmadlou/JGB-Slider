import StopAutoplay from '../Actions/StopAutoplay.js';

export default function(store, bus) {
    try {
        store.update(new StopAutoplay(store.get()));
        bus.emit('StopAutoplay');
    } catch (err) {
        bus.emit(err.name, err);
    }
}
