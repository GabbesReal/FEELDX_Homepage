document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#navbar-nav");
  const navLinks = document.querySelectorAll("nav ul li a");
  const navbar = document.querySelector(".navbar");
  const fadeIns = document.querySelectorAll(".fade-in");
  const logos = document.querySelectorAll(".testimonials-logos img");
  const lightbox = document.getElementById("lightbox");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });

  const observerOptions = {
    threshold: 0.1,
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  fadeIns.forEach((el) => {
    fadeInObserver.observe(el);
  });

  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      const img = document.createElement("img");
      img.src = logo.src;
    
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }

      lightbox.appendChild(img);
      lightbox.style.display = "flex";

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${window.innerWidth - document.body.offsetWidth}px`;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.marginRight = "0";
  });
});
