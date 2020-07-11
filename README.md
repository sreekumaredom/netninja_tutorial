# netninja_tutorial
HTML &amp; CSS Tutorials + Notes

### Display
  * Inline: margin and padding will only push other elements horizontally away, not vertically. will not accept height and width.
  * Inline-block: similar, width and height will be respected.
  * Block: takes as much horizontal space as it can.

### Media Queries
  * Break-points: under 500px(smartphones), 501-768px(tablets), 769-1200(normal),1201+(wide screen)
  * <link rel="stylesheet" media="screen and (max-width:768px) href="mobile.css"> - Follow priority while placing the link tag

### Background
  * background: url(...) no-repeat center center /cover

### CSS Positioning
  * Static: not effected by tblr properties.
  * Relative: tblr values move element from its normal position.
  * Absolute: positioned relative to its parent element that is positioned relative.
  * Fixed: positioned relative to the viewport.
  * Sticky: positioned based on scroll position eg. top:0 => fixed(till then relative)
