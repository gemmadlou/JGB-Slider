import Exception from './Exception.js';

export default class CompleteTransitionFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'CompleteTransitionFailedException';
    }
};
