// Gallery Slider functionality
let currentIndex = 0;
const images = document.querySelectorAll('.slider-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slider-images').style.transform = 'translateX(${offset}%)';
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

showSlide(currentIndex);

// Initialize map (Leaflet)
const map = L.map('map').setView([latitude, longitude], 13);  // Ganti dengan koordinat desa Anda

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([latitude, longitude]).addTo(map)
    .bindPopup('<b>Desa Kami</b><br>Lokasi Desa')
    .openPopup();
