// script.js
let slideIndex = 0;
let mySlideIndex = 0;
a
function showSlides() {
    const slides = document.querySelectorAll(".scrolling-images img");
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000);
}

function showMySlides() {
    const slides = document.querySelectorAll(".mySlides");
    slides.forEach((slide, index) => {
        slide.style.display = (index === mySlideIndex) ? "block" : "none";
    });
    mySlideIndex = (mySlideIndex + 1) % slides.length;
    setTimeout(showMySlides, 4000);
}

function submitTableNumber() {
    const tableNumber = document.getElementById('table-number').value;
    if (tableNumber) {
        document.getElementById('table-number-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        showSlides();
        showMySlides();
    } else {
        alert('Please enter a table number');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('table-number-section').style.display = 'block';
    document.getElementById('main-content').style.display = 'none';
});
