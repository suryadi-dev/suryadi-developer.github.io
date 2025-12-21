// Humberger menu
const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const iconBars = document.querySelector(".icon-bars");
const iconClose = document.querySelector(".icon-close");

hamburgerMenu.addEventListener("click", displayMenu);
menu.addEventListener("click", displayMenu);

function displayMenu() {
  if (menu.classList.contains("tampil")) {
    menu.classList.remove("tampil");
    iconBars.style.display = "inline";
    iconClose.style.display = "none";
  } else {
    menu.classList.add("tampil");
    iconBars.style.display = "none";
    iconClose.style.display = "inline";
  }
}

// Slider background manual
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// //slide otomatis

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 4 seconds
// }
