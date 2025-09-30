document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuItems = document.querySelectorAll(".menu-item");

  // Monitora clique no hambúrguer
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      menuOverlay.style.opacity = "1";
      menuOverlay.style.visibility = "visible";
      document.body.style.overflow = "hidden"; // trava scroll
    } else {
      menuOverlay.style.opacity = "0";
      menuOverlay.style.visibility = "hidden";
      document.body.style.overflow = ""; // libera scroll
    }
  });

  // Fecha o menu ao clicar em qualquer link
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      checkbox.checked = false;
      menuOverlay.style.opacity = "0";
      menuOverlay.style.visibility = "hidden";
      document.body.style.overflow = ""; // libera scroll
    });
  });
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

document.addEventListener("DOMContentLoaded", () => {
  const botaoTopo = document.getElementById("scrollTop");

  // Clique no botão -> rola suavemente até o topo
  botaoTopo.addEventListener("click", () => {
    document.getElementById("topo").scrollIntoView({ behavior: "smooth" });
  });

  // Mostra/esconde o botão conforme o scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      botaoTopo.style.display = "flex";
    } else {
      botaoTopo.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const botaoTopo = document.getElementById("whatsappBtn");

  // Clique no botão -> rola suavemente até o topo
  botaoTopo.addEventListener("click", () => {
    document.getElementById("topo").scrollIntoView({ behavior: "smooth" });
  });

  // Mostra/esconde o botão conforme o scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      botaoTopo.style.display = "flex";
    } else {
      botaoTopo.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    function trocarImagem() {
      const img = document.getElementById("minhaImagem");
      const largura = window.innerWidth;

      if (largura >= 1200) {
        img.src = "imagens/fundo-g.png";
      } else if (largura >= 768) {
        img.src = "imagens/fundo-g.png";
      } else {
        img.src = "imagens/img-saiba.png";
      }
    }

    trocarImagem(); // roda ao abrir a página
    window.addEventListener("resize", trocarImagem); // roda se redimensionar
  });





