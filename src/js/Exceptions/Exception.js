class Exception extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'Exception';
    }
}


export default Exception;
