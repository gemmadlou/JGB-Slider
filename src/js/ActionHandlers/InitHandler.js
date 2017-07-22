import Init from '../Actions/Init.js';

export default function(store, bus, numberOfSlides, slideDuration, autoplaySpeed) {
    try {
        store.update(new Init(numberOfSlides, slideDuration, autoplaySpeed));
        bus.emit('Initiated');
    } catch (err) {
        bus.emit(err.name, err);
    }
}
