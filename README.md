# netninja_tutorial

HTML &amp; CSS Tutorials + Notes

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

### Pagination

- <h1 class="ribbon">
     <strong class="ribbon-content">Everybody loves ribbons</strong>
  </h1>

- .ribbon {
  font-size: 16px !important;
  /_ This ribbon is based on a 16px font side and a 24px vertical rhythm. I've used em's to position each element for scalability. If you want to use a different font size you may have to play with the position of the ribbon elements _/

width: 50%;
  
 position: relative;
background: #ba89b6;
color: #fff;
text-align: center;
padding: 1em 2em; /_ Adjust to suit _/
margin: 2em auto 3em; /_ Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. _/
}
.ribbon:before, .ribbon:after {
content: "";
position: absolute;
display: block;
bottom: -1em;
border: 1.5em solid #986794;
z-index: -1;
}
.ribbon:before {
left: -2em;
border-right-width: 1.5em;
border-left-color: transparent;
}
.ribbon:after {
right: -2em;
border-left-width: 1.5em;
border-right-color: transparent;
}
.ribbon .ribbon-content:before, .ribbon .ribbon-content:after {
content: "";
position: absolute;
display: block;
border-style: solid;
border-color: #804f7c transparent transparent transparent;
bottom: -1em;
}
.ribbon .ribbon-content:before {
left: 0;
border-width: 1em 0 0 1em;
}
.ribbon .ribbon-content:after {
right: 0;
border-width: 1em 1em 0 0;
}
