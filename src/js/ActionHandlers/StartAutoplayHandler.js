import StartAutoplay from '../Actions/StartAutoplay.js';
import TransitionToNextSlideHandler from './TransitionToNextSlideHandler.js';

let runAutoplay = function(store, bus) {
    console.log(store.get())
    if (store.get().autoplay) {
        setTimeout(function() {
            if (store.get().autoplay) {
                TransitionToNextSlideHandler(store, bus)
                requestAnimationFrame(function() {
                    runAutoplay(store, bus)
                });
            }
        }, 4000)
    }
}

let StartAutoplayHandler = function(store, bus) {
    try {
        store.update(new StartAutoplay(store.get()));
        bus.emit('AutoplayStarted');
        console.log(store.get())
        if (!store.get().autoplay) {
            runAutoplay(store, bus);
        }
    } catch (err) {
        bus.emit(err.name, err);
    }
}

export default StartAutoplayHandler;
