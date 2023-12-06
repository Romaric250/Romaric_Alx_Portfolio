"use strict";

var dropmenu = document.getElementById("drop-down"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    
    
    dropmenu.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};




//nav scroll

window.addEventListener('scroll', function() {
  var nav = document.querySelector('.nav');
  var scrolled = window.scrollY > 0;
  
  if (scrolled) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


//slider container


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}