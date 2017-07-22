import Exception from './Exception.js';

class TransitionToFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'TransitionToFailedException';
    }
}

export default TransitionToFailedException;
