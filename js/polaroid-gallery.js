// Placing of images into HTML
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
document.getElementById("app").innerHTML = galleryData.map(galleryTemplate).join("")

// Randomize polaroid images
$('.polaroid').each(function () {
    const depth = Math.floor(Math.random() * 100);
    const rotate = Math.random() * 41 - 15;
    
    $(this).css({
        'z-index': depth,
        'transform': 'rotateZ(' + rotate + 'deg)'
    });
});

// Credits
console.log('%cPolaroid Image Gallery\n\nDesign by: Mehluli Hikwa\n\nwww.thatafro.com', 'font-size: 14px; font-weight: bold;')