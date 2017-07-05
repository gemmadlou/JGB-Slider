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
new BTMSlider({
    el: document.querySelector('.js-slider')
});
```

### Custom bem element

For this - you will need to either import the js-slider mixin into your own project
or copy the distribution style and modify it to your needs.

```
new BTMSlider({
    el: document.querySelector('.custom-block'),
    blockname: '.custom-block'
});
```


### Methods

// Goes to the next slide
instance.next();

// Goes to the previous slide
instance.previous();

### Multiple sliders?

I'll leave that fandangle to you.

```
var sliders = querySelectorAll('.slider');
for (var slider in sliders) {
    new BTMSlider({
        el: slider,
        blockname: '.slider'
    });
}
```

### Changing transition speed

Do this via CSS.
