/* gallery.js */

function upDate(previewPic) {
    // 1) Change the background image URL
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;

    // 2) Change the text content
    document.getElementById('image').textContent = previewPic.alt;
}

function unDo() {
    // 1) Reset background image to the original (empty in this case)
    document.getElementById('image').style.backgroundImage = 'url("")';

    // 2) Reset text content to the original
    document.getElementById('image').textContent = 'Hover over an image below to display here.';
}