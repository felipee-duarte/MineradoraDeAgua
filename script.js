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


