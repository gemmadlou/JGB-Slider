export default class {
    constructor(el, blockname, model) {
        this.el = el;
        blockname = blockname;

        if (!this.isDomElement(this.el)) {
            return;
        }

        this.slider = this.el.querySelector('.' + blockname + '__slider');
        this.slides = this.el.querySelectorAll('.' + blockname + '__slide');
        this.next = this.el.querySelector('.' + blockname + '__next-slide');
        this.prev = this.el.querySelector('.' + blockname + '__prev-slide');
    }

    isValid() {
        return (this.el !== undefined) &&
                (this.slider !== undefined) &&
                (this.slides !== undefined);
    }

    isDomElement(element) {
        return element instanceof Element;
    }

    canClickPreviousButton() {
        return this.prev !== 'undefined';
    }

    canClickNextButton() {
        return this.next !== 'undefined';
    }
}
