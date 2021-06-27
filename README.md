# @eb3n/anime

Minimal animate on scroll library.

<a href="https://npmjs.com/package/@eb3n/anime">
  <img src="https://img.shields.io/npm/v/@eb3n/anime" alt="npm version">
</a>
<a href="https://npmjs.com/package/@eb3n/anime">
  <img src="https://img.shields.io/npm/l/@eb3n/anime" alt="npm version">
</a>

## Installation

Install the package:

```sh
# yarn
yarn add -D @eb3n/anime

# npm
npm i -D @eb3n/anime
```

Import the script and styles, and initialise:

```js
import anime from '@eb3n/anime'
import '@eb3n/anime/dist/anime.min.css'

anime()
```

## Usage

Simply set the `anime` attribute on any elements you wish to animate ([valid animation names](#animations)):

```html
<body>
  <p anime="fade">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</body>
```

## Configuation

> NOTE: `duration` and `delay` are limited to increments of `250` between `0 - 3000`.

### Global

You can pass options to `anime` when you initialise it:

```js
anime({
  duration: 1000, // the length of the animation (in ms)
  delay: 0, // the delay before the animation plays (in ms)
  offset: 0 // the offset from the original trigger point (in px)
})
```

### Per element

You can also configure `anime` per element:

```html
<body>
  <p anime="fade" anime-duration="500" anime-delay="250" anime-offset="100">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</body>
```

Elements also have access to `anime-trigger`, which requires a CSS selector. This lets you begin an element's animation when another (usually parent) element is scrolled into view.

```html
<body>
  <ul id="list">
    <li anime="fade-up" anime-delay="250" anime-trigger="#list">Lorem</li>
    <li anime="fade-up" anime-delay="500" anime-trigger="#list">ipsum</li>
    <li anime="fade-up" anime-delay="750" anime-trigger="#list">dolor</li>
    <li anime="fade-up" anime-delay="1000" anime-trigger="#list">Lorem</li>
    <li anime="fade-up" anime-delay="1250" anime-trigger="#list">Lorem</li>
  </ul>
</body>
```

## Animations

### Fade

- `fade`
- `fade-up`
- `fade-right`
- `fade-down`
- `fade-left`

### Zoom In

- `zoom-in`
- `zoom-in-up`
- `zoom-in-right`
- `zoom-in-down`
- `zoom-in-left`

### Zoom Out

- `zoom-out`
- `zoom-out-up`
- `zoom-out-right`
- `zoom-out-down`
- `zoom-out-left`

### Flip

- `flip-up`
- `flip-right`
- `flip-down`
- `flip-left`
