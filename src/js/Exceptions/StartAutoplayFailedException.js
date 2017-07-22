import Exception from './Exception.js';

class StartAutoplayFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'StartAutoplayFailedException';
    }
}

export default StartAutoplayFailedException;
