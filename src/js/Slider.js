import InitHandler from './ActionHandlers/InitHandler.js';
import TransitionToNextSlideHandler from './ActionHandlers/TransitionToNextSlideHandler.js';
import TransitionToPreviousSlideHandler from './ActionHandlers/TransitionToPreviousSlideHandler.js';
import TransitionToHandler from './ActionHandlers/TransitionToHandler.js';
import StartAutoplayHandler from './ActionHandlers/StartAutoplayHandler.js';
import StopAutoplayHandler from './ActionHandlers/StopAutoplayHandler.js';

import GetCurrentSlide from './ActionHelper/GetCurrentSlide.js';
import GetNextSlide from './ActionHelper/GetNextSlide.js';
import GetSliderPositionAsPercentage from './ActionHelper/GetSliderPositionAsPercentage.js';

import Bus from './Helpers/Bus.js';
import Store from './Helpers/Store.js';

export default class {

    constructor(userSettings) {
        
        let defaults = {
          onInit: function() {},
          beforeSlide: function() {},
          afterSlide: function() {},
          onStartAutoplay: function() {},
          onStopAutoplay: function() {},
          prevNextButtons: true
        };

        this.options = Object.assign({}, defaults, userSettings);

        try {
            this.dom = {};
            this.dom.slider = this.options.el.querySelector('.' + this.options.blockname + '__slider');
            this.dom.slides = this.options.el.querySelectorAll('.' + this.options.blockname + '__slide');
        } catch (err) {
            console.log('The dom is missing some elements', err);
            return;
        }

        this.store = new Store();
        this.bus = new Bus();

        this.listenToErrors();
        this.listen();

        InitHandler(
            this.store, 
            this.bus, 
            this.dom.slides.length, 
            this.options.slideDuration,
            this.options.autoplaySpeed
        );
        
        this.initBulletsUI();
        this.initButtonsUI();
    }
    
    initBulletsUI() {
        if (!this.options.bullets) {
            return;
        }
        
        let bullets = document.createElement("ol");
        bullets.classList.add(this.options.blockname + '__bullets');
        
        for (let i = 1; i <= this.store.get().numberOfSlides; i++) {
            let bullet = document.createElement("li");
            bullet.classList.add(this.options.blockname + '__bullet');
            bullet.addEventListener('click', () => {
                this.goTo(i);
            });
            bullets.appendChild(bullet);
        }
        this.options.el.appendChild(bullets);
        this.dom.bullets = bullets;
    }
    
    initButtonsUI() {
        if (!this.options.prevNextButtons) {
            return;
        }
        
        this.dom.next = document.createElement("span");
        this.dom.next.classList.add(this.options.blockname + '__next-slide');
        
        this.dom.prev = document.createElement("span");
        this.dom.prev.classList.add(this.options.blockname + '__prev-slide');
        
        this.options.el.appendChild(this.dom.prev);
        this.options.el.appendChild(this.dom.next);
        
        this.dom.next.addEventListener('click', () => {
            this.next();
        });
        this.dom.prev.addEventListener('click', () => {
            this.prev();
        });
        
    }

    listenToErrors() {
        this.bus.on('InitiationFailedException', (err) => {
            console.log('init failed', err.name, err.message, err.stack);
        });
        this.bus.on('TransitionToNextSlideFailedException', (err) => {
            console.log(err, 'error', this.store);
        });
        this.bus.on('TransitionToPreviousSlideFailedException', (err) => {
            console.log(err, 'error', this.store);
        });
        this.bus.on('TransitionToFailedException', (err) => {
            console.log(err, 'error', this.store);
        });
        this.bus.on('TransitionToFailedException', (err) => {
            console.log(err, 'error');
        });
        this.bus.on('CompleteTransitionFailedException', (err) => {
            console.log(err, 'error');
        })
    }

    listen() {
        this.bus.on('Initiated', (state) => {
            this.dom.slider.style.transitionDuration = this.store.get().slideDuration + 'ms';
            this.options.onInit();
        });
        this.bus.on('TransitionToNextSlideStarted', (state) => {
            this.dom.slider.style['margin-left'] = GetSliderPositionAsPercentage(this.store.get());
            this.options.beforeSlide();
        });
        this.bus.on('TransitionToPreviousSlideStarted', (state) => {
            this.dom.slider.style['margin-left'] = GetSliderPositionAsPercentage(this.store.get());
            this.options.beforeSlide();
        });
        this.bus.on('TransitionToStarted', (state) => {
            this.dom.slider.style['margin-left'] = GetSliderPositionAsPercentage(this.store.get());
            this.options.beforeSlide();
        });
        this.bus.on('TransitionCompleted', (state) => {
            this.options.afterSlide();
        });
        this.bus.on('AutoplayStopped', (state) => {
            this.options.onStopAutoplay(); 
        });
        this.bus.on('AutoplayStarted', (state) => {
            this.options.onStartAutoplay(); 
        });
    }

    next() {
        TransitionToNextSlideHandler(this.store, this.bus);
    }

    prev() {
        TransitionToPreviousSlideHandler(this.store, this.bus);
    }

    goTo(slideNumber) {
        TransitionToHandler(this.store, this.bus, slideNumber);
    }

    autoplay() {
        StartAutoplayHandler(this.store, this.bus);
    }

    stopAutoplay() {
        StopAutoplayHandler(this.store, this.bus);
    }

}
