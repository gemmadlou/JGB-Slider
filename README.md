JGB Slider
-----

A simple vanilla js slider with basic controls, event handlers, and accessible methods for customisation.

Please note:

This is still in progress. The api may change until it's officially at v1.0.0.


## Installation

```js
npm install jgb-slider

<script src="../dist/jgb-slider.min.js"></script>
```

```

let Slider = require('jgb-slider');
import Slider from 'jgb-slider';

```

Import the styl file

```css
@import "~/jgb-slider/src/js-slider";

// or

@import "~/jgb-slider/src/slider"; // For mixin

// or

<link href="./node_modules/jgb-slider/dist/jgb-slider.min.css" rel="stylesheet" />

```

## Instantiation

Previous and next buttons as well as bullets are automatically created
and managed based on your javascript options.

```html
<div class="example-slider">
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

```js
jgbslider();
```

or

```js
jgbslider({
    selector: '.example-slider',
    slideDuration: 1000, // default set
    autoplay: true, // default is false
    loopThrough: true, // default is false
    onInit: function() {
        alert('Slider initialized')
    }
});
```

The slider instance attaches itself to the DOM element. Therefore, you can have
multiple instances of the slider in the page. You would access it in the following means.

```js
    var instance = document.querySelector('example-slider:first-child').slider;
        instance.stopAutoplay();
```

### The css follows BEM

.block

.block__slider

.block__slide

.block__prev-slide // autogenerated

.block__next-slide //autogenerated


### Methods

##### Goes to the next slide
instance.next();

##### Goes to the previous slide
instance.previous();

##### Starts autoplay
instance.autoplay();

##### End autoplay
instance.stopAutoplay();

### Eventhandlers

```js
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
npm run # to find out what dev commands you can use
```

Before you push the project - run a build to generate the dist files and test with either a new example - or an updated example.
