
const images = [
    "https://source.unsplash.com/600x350/?nature,water",
    "https://source.unsplash.com/600x350/?mountain,sunset",
    "https://source.unsplash.com/600x350/?forest,green",
    "https://source.unsplash.com/600x350/?city,night"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function showImage(index) {
    slider.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}


setInterval(nextImage, 3000);

showImage(currentIndex);
