import Model from './Model.js';
import View from './View.js';

export default class {

    constructor(userSettings) {

        let defaults = {
            el,
            blockname: 'js-slider',
            slideDuration: 1200,
            autoplay: false,
            autoplaySpeed: 5000,
            autoplayState: 'stopped',
            prevAutoplayState: 'init',
            startAutoplayTimer: null,
            beforeSlide: function() {},
            afterSlide: function() {},
            onInit: function() {},
            onStartAutoplay: function() {},
            onStopAutoplay: function() {},
            onPauseAutoplay: function() {}
        };

        this.settings = Object.assign({}, defaults, userSettings);

        this.init();
    }

    init() {
        this.view = new View(
            this.settings.el,
            this.settings.blockname
        );

        if (!this.view.isValid()) {
            this.log('Slider dom is invalid.')
            return;
        }

        this.model = new Model(this.view.slides.length);

        this.setUpView();

        this.settings.onInit();

        this.eventHandlers();

        this.autoplay();
    }

    autoplay() {
        clearTimeout(this.settings.startAutoplayTimer);

        if (this.settings.autoplay) {

            this.handle.onStartAutoplay();

            this.settings.startAutoplayTimer = setTimeout(() => {
                this.next();
                this.autoplay();
            }, this.settings.autoplaySpeed);
        }
    }

    startAutoplay() {
        this.settings.autoplay = true;
        this.autoplay();
    }

    pauseAutoplay() {
        this.handle.onPauseAutoplay();
    }

    disableAutoplay() {
        this.handle.onStopAutoplay();
    }

    setUpView() {
        this.view.slider.style.transitionDuration = this.settings.slideDuration + 'ms';
    }

    eventHandlers() {
        if (this.view.canClickPreviousButton()) {
            this.view.prev.addEventListener('click', () => {
                this.previous();
            });
        }

        if (this.view.canClickNextButton()) {
            this.view.next.addEventListener('click', () => {
                this.next();
            });
        }

        this.view.el.addEventListener('mouseenter', () => {
            this.pauseAutoplay();
        });

        this.view.el.addEventListener('mouseleave', () => {
            this.autoplay();
        });
    }

    updateSliderPosition() {
        this.settings.beforeSlide();
        this.view.slider.style['margin-left'] = this.model.getSliderPosition();
        var timer = setTimeout(() => {
            this.settings.afterSlide();
        }, this.settings.slideDuration);
    }

    setNewAutoplayState(state) {
        this.settings.prevAutoplayState = this.settings.autoplayState;
        this.settings.autoplayState = state;
    }

    handle = {
        onStartAutoplay: () => {
            clearTimeout(this.settings.startAutoplayTimer);

            if (this.settings.autoplayState === 'paused') {
                return;
            }

            this.setNewAutoplayState('started');

            if (this.settings.autoplayState === 'started' &&
                this.settings.prevAutoplayState !== 'started') {
                this.settings.onStartAutoplay();
            }
        },
        onPauseAutoplay: () => {
            clearTimeout(this.settings.startAutoplayTimer);

            if (this.settings.autoplayState === 'stopped') {
                return;
            }

            this.setNewAutoplayState('paused');

            if (this.settings.autoplayState === 'paused') {
                this.settings.onPauseAutoplay();
            }
        },
        onStopAutoplay: () => {
            clearTimeout(this.settings.startAutoplayTimer);

            this.setNewAutoplayState('stopped');
            this.settings.autoplay = false;

            if (this.settings.autoplayState === 'stopped' && this.settings.prevAutoplayState !== 'stopped') {
                this.settings.onStopAutoplay();
            }
        }
    }

    next() {
        this.model.next();
        this.updateSliderPosition();
    }

    previous() {
        this.model.previous();
        this.updateSliderPosition();
    }

    log(msg) {
        console.log(msg);
    }

}
