export default class {
    constructor(el, blockname) {
        this.dom = {};
        this.dom.el = el;
        this.blockname = blockname;

        if (!this.isDomElement(this.dom.el)) {
            return;
        }

        this.dom.slider = this.dom.el.querySelector('.' + this.blockname + '__slider');
        this.dom.slides = this.dom.el.querySelectorAll('.' + this.blockname + '__slide');
        this.dom.next = this.dom.el.querySelector('.' + this.blockname + '__next-slide');
        this.dom.prev = this.dom.el.querySelector('.' + this.blockname + '__prev-slide');
    }

    isValid() {
        return (this.dom.el !== undefined) &&
                (this.dom.slider !== undefined) &&
                (this.dom.slides !== undefined);
    }

    isDomElement(element) {
        return element instanceof Element;
    }

    canClickPreviousButton() {
        return this.dom.prev !== 'undefined';
    }

    canClickNextButton() {
        return this.dom.next !== 'undefined';
    }
}
