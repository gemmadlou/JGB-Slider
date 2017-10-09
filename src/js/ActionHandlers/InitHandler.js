import Init from '../Actions/Init.js';

export default function(store, bus, numberOfSlides, slideDuration, autoplaySpeed, loopThrough) {
    try {
        store.update(new Init(numberOfSlides, slideDuration, autoplaySpeed, loopThrough));
        bus.emit('Initiated');
    } catch (err) {
        bus.emit(err.name, err);
    }
}
