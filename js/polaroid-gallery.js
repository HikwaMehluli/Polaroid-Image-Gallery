// Placing of images into HTML
function galleryTemplate(art) {
    return `
        <figure class="polaroid">
            <img src="${art.photo}">
            <figcaption>${art.caption}</figcaption>
        </figure>
    `;
}

// Fetch gallery data from JSON file and render
fetch('./api/images.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(galleryData => {
        document.getElementById("app").innerHTML = galleryData.map(galleryTemplate).join("");
        // Randomize polaroid images (plain JavaScript)
        document.querySelectorAll('.polaroid').forEach(function (el) {
            const depth = Math.floor(Math.random() * 100);
            const rotate = Math.random() * 40 - 19;
            el.style.zIndex = depth;
            el.style.transform = 'rotateZ(' + rotate + 'deg)';
        });
    })
    .catch(error => {
        document.getElementById("app").innerHTML = '<p>Failed to load gallery data.</p>';
        console.error('Error loading gallery data:', error);
    });

// Credits
console.log('%cPolaroid Image Gallery\n\nDesign by: Mehluli Hikwa\n\nhttps://thatafro.netlify.app', 'font-size: 14px; font-weight: bold;')