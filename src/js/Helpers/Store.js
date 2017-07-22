export default class {
    constructor() {
        this.data = {};
    }

    update(data) {
        this.data = data;
    }

    get() {
        return this.data;
    }
}
