# Polaroid-Image-Gallery
Polaroid Image Gallery - is a simple image gallery. HTML/CSS display
Currently it requres jQuery but in the future shall be with vanilla javascript.

### HTML Layout
```
<div class="gallery">
  <figure class="polaroid">
    <img src="#" alt=" "/>
    <figcaption>Caption or Name</figcaption>
  </figure>
</div>
```
### JQUERY Snippet
```
jQuery(function($) {
  $('.polaroid').each(function() {
    var depth = Math.floor(Math.random() * 256);
    var rotate = Math.random() * 41 - 15;
      $(this).css({
        'z-index' : depth,
        'transform' : 'rotateZ(' + rotate + 'deg)'
      });
    });
});
```

[View Example](https://hikwamehluli.github.io/Polaroid-Image-Gallery/)

### Dependencies

jQuery 2.1.3 [Download JQuery](http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js)
