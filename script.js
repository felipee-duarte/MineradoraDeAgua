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

  
// clique nas bolinhas
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// inicia mostrando a primeira
updateCarousel();
});

const swiper = new Swiper('.embalagem', {
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView:2,
    },
    992: {
        slidesPerView:3,
    }
  }
});