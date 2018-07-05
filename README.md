# Polaroid-Image-Gallery
Polaroid Image Gallery - is a simple image gallery.
Currently it requres jQuery but in the future shall be with vanilla javascript.

[View Example](https://hikwamehluli.github.io/Polaroid-Image-Gallery/)


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

Add scripts before body closing tag
```html
<script src=".path-to-jquery-file"></script>
<script src=".path-to-images-json-file"></script>
<script src=".path-to-polaroid-gallery-javascript"></script>
```


### Dependencies

JQuery 2.1.3 [Download JQuery](http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js)
<br>
Font family for polaroid caption - [Shadows Into Light](https://fonts.google.com/specimen/Shadows+Into+Light)


### Share This Project

[Tweet Project](https://twitter.com/home?status=Check%20out%20this%20cool%20Polaroid%20Image%20Gallery%20by%20%40HikwaMehluli%20%23javascript%20%23opensource%0A%0Ahttps%3A//goo.gl/5T11np) | [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A//goo.gl/5T11np) | [Share on Google+](https://plus.google.com/share?url=https%3A//goo.gl/5T11np) | [Share on LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//goo.gl/5T11np&title=Polaroid%20Image%20Gallery&summary=&source=)

