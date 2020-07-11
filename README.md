# netninja_tutorial
HTML &amp; CSS Tutorials + Notes

### Display
  * Inline: margin and padding will only push other elements horizontally away, not vertically. will not accept height and width.
  * Inline-block: similar, width and height will be respected.
  * Block: takes as much horizontal space as it can.

### Media Queries
  * Break-points: under 500px(smartphones), 501-768px(tablets), 769-1200(normal),1201+(wide screen)
  * "<link rel="stylesheet" media="screen and (max-width:768px) href="mobile.css">" follow priority while placing the link tags
  
### Background
  * background: url(...) no-repeat center center /cover

### CSS Positioning
  * Static: not effected by tblr properties.
  * Relative: tblr values move element from its normal position.
  * Absolute: positioned relative to its parent element that is positioned relative.
  * Fixed: positioned relative to the viewport.
  * Sticky: positioned based on scroll position eg. top:0 => fixed(till then relative)

### CSS Flexbox
  * .container { display: flex | inline-flex }
  * .container { flex-direction: row | row-reverse | column | column-reverse }
  * .container { flex-wrap: nowrap | wrap | wrap-reverse }
  * .container { flex-flow: column wrap } (shorthand)
  * .container { justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right }
  * .container { align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end}

  
### CSS Transform
  * transform: translate(200px, 200px);
  * transform: scale(2);
  * transform: rotateX(100deg);
