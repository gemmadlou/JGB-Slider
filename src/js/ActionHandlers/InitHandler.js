import Init from '../Actions/Init.js';

export default function(store, bus, numberOfSlides) {
    try {
        let newstate = new Init(numberOfSlides);
        store.update(newstate);
        bus.emit('Initiated');
    } catch (err) {
        bus.emit('InitiationFailed', err);
    }
}
