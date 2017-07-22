import StartAutoplay from '../Actions/StartAutoplay.js';
import TransitionToNextSlideHandler from './TransitionToNextSlideHandler.js';

let runAutoplay = function(store, bus) {
    if (store.get().autoplay) {
        setTimeout(function() {
            if (store.get().autoplay) {
                TransitionToNextSlideHandler(store, bus)
                requestAnimationFrame(function() {
                    runAutoplay(store, bus)
                });
            }
        }, store.get().autoplaySpeed)
    }
}

let StartAutoplayHandler = function(store, bus) {
    try {
        if (store.get().autoplay) {
           return;
        }
        store.update(new StartAutoplay(store.get()));
        bus.emit('AutoplayStarted');
        runAutoplay(store, bus);
    } catch (err) {
        bus.emit(err.name, err);
    }
}

export default StartAutoplayHandler;
