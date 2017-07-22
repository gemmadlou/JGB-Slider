import Exception from './Exception.js';

class StopAutoplayFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'StopAutoplayFailedException';
    }
}

export default StopAutoplayFailedException;
