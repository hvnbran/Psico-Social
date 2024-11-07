const carousel = document.querySelector('.carousel');
let index = 0;

function showNextImage() {
  index++;
  if (index >= carousel.children.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Cambia cada 4 segundos
setInterval(showNextImage, 4000);
