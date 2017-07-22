Slider
-----

## Installation

```
<script src="../dist/btm-slider.min.js"></script>
```

or

```

let Slider = require('jgb-slider');
import Slider from 'jgbslider';

```

Import the sass file

```
@import .js-slider.scss;

<link href="./node_modules/jgb-slider/dist/btm-slider.min.css" rel="stylesheet" />

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

### Multiple sliders?

You are returned an array of instances which are created when you initialize jgbslider.
Therefore, you can have multiple sliders on a page using the same class.
