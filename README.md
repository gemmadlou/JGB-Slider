Slider
-----

## Installation

First set up your javascript

```
<script src="../dist/btm-slider.min.js"></script>
```

or

```
import Slider from 'BTMSlider';

```

Import the sass file

```
@import .js-slider.scss;

<link href="../dist/btm-slider.min.css" rel="stylesheet" />

```

## Instantiation

```
BTMSlider({
    el: document.querySelector('.js-slider'),
    slideDuration: 1000, // default set
    autoplay: true, // default is false
});
```

### The css follows BEM

.block
.block__slider
.block__slide
.block__prev-button
.block__next-button


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
onStartAutoplay

onPauseAutoplay

onStopAutoplay

onInit

beforeSlide

afterSlide

```

### Multiple sliders?

You are returned an array of event handlers which are created when you initialise BTMSlider.
Therefore, you can have multiple sliders on a page using the same class.

### Changing transition speed

Do this via CSS.
