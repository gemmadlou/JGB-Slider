import Exception from './Exception.js';

class TransitionToNextSlideFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'TransitionToNextSlideFailedException';
    }
}

export default TransitionToNextSlideFailedException;
