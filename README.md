# Polaroid-Image-Gallery
Polaroid Image Gallery - is a simple image gallery.
Currently it requres jQuery but in the future shall be with vanilla javascript.
[View Example](https://hikwamehluli.github.io/Polaroid-Image-Gallery/)

### HTML - Dynamic Layout, powered by json
Create HTML like this and the rest will be handled by the script/s
```html
<div class="gallery">
    <div id="app"></div>
</div>
```

Adding images to JSON file
```javascript
var imageData = [
    {
        caption: "Image caption",
        photo: "../path-to-image"
    },
    {
        caption: "Image caption",
        photo: "../path-to-image"
    }
]
```

Before the body closing tag add the following scripts
```html
<script src=".path-to-jquery-file"></script>
<script src=".path-to-images-json-file"></script>
<script src=".path-to-polaroid-gallery-javascript"></script>
```

### Dependencies

JQuery 2.1.3 [Download JQuery](http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js)
<br>
Font family for polaroid caption - [Shadows Into Light](https://fonts.google.com/specimen/Shadows+Into+Light)

