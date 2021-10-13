window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".header__logo", {
    scrollTrigger: {
      trigger: ".header__logo",
      toggleActions: "pause restart play pause",
    },
    y: 0,
    opacity: 1,
    delay: 0.5,
  });
  gsap.to(".header__link", { y: 0, opacity: 1, delay: 1.2, stagger: 0.2 });

  gsap.to(".intro__paragraph", { x: 0, opacity: 1, delay: 2.2 });
  gsap.to(".intro__header", {
    opacity: 1,
    duration: 2.0,
    ease: "elastic.out( 1, 0.3)",
    x: 0,
    delay: 2.6,
  });
});

const myAnimation = new hoverEffect({
  parent: document.querySelector(".intro__banner"),
  intensity: 0.3,
  image1: "assets/images/hero-banner--desktop.jpg",
  image2: "assets/images/hero-banner--2-desktop.jpg",
  displacementImage: "assets/images/hero-banner--desktop.jpg",
});
