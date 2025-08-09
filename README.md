# Polaroid Image Gallery

A lightweight, responsive, and customizable image gallery that displays your photos as scattered polaroids. Built with plain JavaScript, HTML, and CSS.

[View Demo](https://hikwamehluli.github.io/Polaroid-Image-Gallery/)

## Features

*   **Vanilla JS:** No jQuery dependency.
*   **Responsive Design:** Looks great on all devices.
*   **Easy to Customize:** Simply update a JSON file to add your images.
*   **Cool Polaroid Effect:** Images are randomly rotated for a cool, scattered look.

## Getting Started

### Prerequisites

- A modern web browser.
- A code editor for making changes.

### Installation

1.  Clone this repository or download the source code.
2.  Open `index.html` in your browser to see the gallery.

## How to Use

1.  **HTML Setup:**
    Your `index.html` should have a `div` with the id `app`. The gallery will be rendered inside this div.
    ```html
    <div id="app"></div>
    ```
    Make sure to include the stylesheet in the `<head>` and the script before the closing `</body>` tag.
    ```html
    <link rel="stylesheet" href="css/app.css">
    <script src="js/polaroid-gallery.js"></script>
    ```

2.  **Adding Images:**
    To add your own images, edit the `api/images.json` file. Add a new object to the array for each image with a `caption` and a `photo` URL.

    ```json
    [
        {
            "caption": "Your Image Caption",
            "photo": "path/to/your/image.jpg"
        },
        {
            "caption": "Another Caption",
            "photo": "path/to/another/image.jpg"
        }
    ]
    ```

## Development

This project uses [Sass](https://sass-lang.com/) for styling. If you want to modify the styles:

1.  Make sure you have Node.js and npm installed.
2.  Install Sass:
    ```bash
    npm install
    ```
3.  Run the Sass build script to watch for changes in `scss/style.scss` and compile it to `css/app.css`:
    ```bash
    npm run css-build
    ```

## Font

The font used for the polaroid captions is [Shadows Into Light](https://fonts.google.com/specimen/Shadows+Into+Light) from Google Fonts.

## Share This Project

[Tweet Project](https://twitter.com/home?status=Check%20out%20this%20cool%20Polaroid%20Image%20Gallery%20by%20%40HikwaMehluli%20%23javascript%20%23opensource%0A%0Ahttps%3A//goo.gl/5T11np) | [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A//goo.gl/5T11np) | [Share on LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//goo.gl/5T11np&title=Polaroid%20Image%20Gallery&summary=&source=)