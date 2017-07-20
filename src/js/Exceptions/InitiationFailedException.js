import Exception from './Exception.js';

class InitiationFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'InitiationFailedException';
    }
}

export default InitiationFailedException;
