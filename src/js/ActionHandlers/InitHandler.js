import Init from '../Actions/Init.js';

export default function(store, bus, numberOfSlides) {
    try {
        store.update(new Init(numberOfSlides));
        bus.emit('Initiated');
    } catch (err) {
        bus.emit(err.name, err);
    }
}
