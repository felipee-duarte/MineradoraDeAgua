document.addEventListener('DOMContentLoaded', function() {
  // Código para o Menu Hambúrguer
  const checkbox = document.getElementById('checkbox');
  const menuOverlay = document.querySelector('.menu-overlay');
  const body = document.body;

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      menuOverlay.style.visibility = 'visible';
      menuOverlay.style.opacity = '1';
      body.style.overflow = 'hidden';
    } else {
      menuOverlay.style.visibility = 'hidden';
      menuOverlay.style.opacity = '0';
      body.style.overflow = 'auto';
    }
  });

  // Código para o Carrossel
  const images = document.querySelectorAll('.carousel-images img');
  const dots = document.querySelectorAll('.dot');
  const totalImages = images.length;
  let currentIndex = 0;
  let carouselInterval;

  const updateCarousel = () => {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateY(${offset}%)`;
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  };

  const startAutoScroll = () => {
    carouselInterval = setInterval(nextImage, 6000);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(carouselInterval);
      currentIndex = index;
      updateCarousel();
      startAutoScroll();
    });
  });

  startAutoScroll();
});