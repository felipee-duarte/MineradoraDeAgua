const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // roda só 1 vez
    }
  });
});

document.querySelectorAll(".fade-title, .fade-img").forEach(el => {
  observer.observe(el);
});
