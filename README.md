Slider
-----

A simple vanilla js slider with basic controls, event handlers, and accessible methods for customisation.


## Installation

```
npm install jsb-slider

<script src="../dist/jgb-slider.min.js"></script>
```

or

```

let Slider = require('jgb-slider');
import Slider from 'jgbslider';

```

Import the sass file

```
@import .js-slider.scss;

<link href="./node_modules/jgb-slider/dist/jgb-slider.min.css" rel="stylesheet" />

```

## Instantiation

```
<div class="example-slider">
    <span class="example-slider__prev-slide"></span>
    <span class="example-slider__next-slide"></span>
    <ol class="example-slider__slider">
        <li class="example-slider__slide">
            <img src="http://unsplash.it/1200/500" />
        </li>
        <li class="example-slider__slide">
            <img src="http://unsplash.it/1200/500?image=123" />
        </li>
        <li class="example-slider__slide">
            <img src="http://unsplash.it/1200/500?image=173" />
        </li>
        <li class="example-slider__slide">
            <img src="http://unsplash.it/1200/500?image=143" />
        </li>
        <li class="example-slider__slide">
            <img src="http://unsplash.it/1200/500?image=423" />
        </li>
    </ol>
</div>
```

```
var sliders = new jgbslider();
```

or

```
var sliders = new jgbslider({
    el: document.querySelector('.example-slider'),
    slideDuration: 1000, // default set
    autoplay: true, // default is false
    onInit: function() {
        alert('Slider initialized')
    }
});
```

### The css follows BEM

.block

.block__slider

.block__slide

.block__prev-slide

.block__next-slide


### Methods

##### Goes to the next slide
instance.next();

##### Goes to the previous slide
instance.previous();

##### Starts autoplay
instance.startAutoplay();

##### End autoplay
instance.disableAutoplay();

### Eventhandlers

```
onStartAutoplay: function() { ... },

onStopAutoplay: function() { ... },

onInit: function() { ... },

beforeSlide: function() { ... },

afterSlide: function() { ... }

```


## Contributing

The fun part of this slider - is the underlying domain model which was built with pure functions, inspired by elm, redux and the SAM pattern (of which I'm yet to understand well).

Just make a pull request. Any additional logic should have a test to go with it. 

```
npm run # to find out what dev commands you can fun
```

Before you push the project - run a build to generate the dist files and test with either a new example - or an updated example.
