# netninja_tutorial

HTML &amp; CSS Tutorials and Notes

### Snippets 

1. Image overlay hover - shorturl.at/mvN45

### Overlay

- .hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  }
  
- .hero \*{
  z-index: 10;
  }

### Horizontal card scroll

- .container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  cursor: pointer;
  }

- .item {
  flex: 0 0 auto;
  }

### Note

- object-fit: cover

### Display

- Inline: margin and padding will only push other elements horizontally away, not vertically. will not accept height and width.
- Inline-block: similar, width and height will be respected.
- Block: takes as much horizontal space as it can.

### Media Queries

- Break-points: under 500px(smartphones), 501-768px(tablets), 769-1200(normal),1201+(wide screen)
- "<link rel="stylesheet" media="screen and (max-width:768px) href="mobile.css">" follow priority while placing the link tags

### Background

- background: url(...) no-repeat center center /cover

### CSS Positioning

- Static: not effected by tblr properties.
- Relative: tblr values move element from its normal position.
- Absolute: positioned relative to its parent element that is positioned relative.
- Fixed: positioned relative to the viewport.
- Sticky: positioned based on scroll position eg. top:0 => fixed(till then relative)

### CSS Flexbox

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- .container { display: flex | inline-flex }
- .container { flex-direction: row | row-reverse | column | column-reverse }
- .container { flex-wrap: nowrap | wrap | wrap-reverse } (jump to next line or not)
- .container { flex-flow: column wrap } (shorthand)
- .container { justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right } (main axis)
- .container { align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end} (cross-axis)
- .container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline }

- .items { flex: 1 0 200px } (grow shrink basis)
- .item { align-self: auto | flex-start | flex-end | center | baseline | stretch }
- .item { order: 5 } (default is 0)
- .item { flex-grow: 4} (default:0, spread evenly,take up space)

### CSS Transform

- transform: translate(200px, 200px);
- transform: scale(2);
- transform: rotateX(100deg);

### CSS Grid
  - grid-template-columns: repeat(3, 1fr);    //column no and size
  - grid-template-rows: repeat(3, 1fr);       //row no and size

  - grid-auto-rows:minmax(200px,auto)         //row height

  - align-items: start;                       //no row height, only element height
  - align-items: end;                          
  - align-items: stretch;


  - justify-items: start;                     //no column width, only element width
  - justify-items: end;                        
  - justify-items: stretch;

  - grid-gap:20px                             //item gap

  - grid-template-areas:                      //position items
    'header header header header'



### CSS Grid Item
  - grid-column:1/3                           //spanning
  - grid-row:1/3                              //spanning
  - grid-column: span 3;

  - justify-self:start
  - align-self:end
