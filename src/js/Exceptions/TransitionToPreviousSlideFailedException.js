import Exception from './Exception.js';

class TransitionToPreviousSlideFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'TransitionToPreviousSlideFailedException';
    }
}

export default TransitionToPreviousSlideFailedException;
