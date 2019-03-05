// PLACING OF IMAGES INTO HTML
function galleryTemplate(art) {
    return `
    <div class="gallery">
        <figure class="polaroid">
            <img src="${art.photo}">
            <figcaption>${art.caption}</figcaption>
        </figure>
    </div>
  `;
}
document.getElementById("app").innerHTML = imageGalleryData.map(galleryTemplate).join("");

// RANDOM LAYOUT OF POLAROID IMAGES
$('.polaroid').each(function () {
    var depth = Math.floor(Math.random() * 256);
    var rotate = Math.random() * 41 - 15;
    $(this).css({
        'z-index': depth,
        'transform': 'rotateZ(' + rotate + 'deg)'
    });
});

// CREDITS
console.log('%cPolaroid Image Gallery\n\nProduced & Developed by: Mehluli Hikwa\n\nInstagram - @thatafro\n\nTwitter - @HikwaMehluli\n\n(C) thatAfro - 2019', 'color: green; font-weight: bold;');
