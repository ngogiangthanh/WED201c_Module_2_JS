/* gallery.js */

function upDate(previewPic) {
    // Change the background to image URL
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;

    // Change the text to content
    document.getElementById('image').textContent = previewPic.alt;
}

function unDo() {
    // Reset background image to the original
    document.getElementById('image').style.backgroundImage = 'url("")';

    // Reset text content to the original
    document.getElementById('image').textContent = 'Please hover over an image below to display here!';
}