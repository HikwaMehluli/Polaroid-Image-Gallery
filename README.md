# Polaroid Image Gallery
Responsive Polaroid Image Gallery - is a simple image gallery.
Currently it requires jQuery but in the future shall be with vanilla JavaScript.

[View Example](https://hikwamehluli.github.io/Polaroid-Image-Gallery/)

## HTML setup
Create an HTML file with following tag and ID, the rest will be handled by the script/s
```html
<div id="app"></div>
```

## Scripts
Add Scripts before body closing tag, and you almost there. Dont forget JQuery & Polaroid Caption font - see dependencies section below
```html
<script src=".path-to-jquery-file"></script>
<script src=".path-to-image-gallery-json-file"></script>
<script src=".path-to-polaroid-gallery-javascript"></script>
```

## Images
Add your Images in a JSON file. The name of JSON should match the name you placed in the scripts area. Note that the varible "imageGalleryData" should be left as is. If changed the script won't work.
```javascript
var imageGalleryData = [
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

### Dependencies
JQuery 2.1.3 [Download JQuery](http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js)
<br>
Font family for polaroid caption - [Shadows Into Light](https://fonts.google.com/specimen/Shadows+Into+Light)

### Share This Project
[Tweet Project](https://twitter.com/home?status=Check%20out%20this%20cool%20Polaroid%20Image%20Gallery%20by%20%40HikwaMehluli%20%23javascript%20%23opensource%0A%0Ahttps%3A//goo.gl/5T11np) | [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A//goo.gl/5T11np) | [Share on LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//goo.gl/5T11np&title=Polaroid%20Image%20Gallery&summary=&source=)
