window.addEventListener("load", function () {
  gsap.to(".header__logo", { y: 0, opacity: 1, delay: 1 });
  gsap.to(".header__link--0", { y: 0, opacity: 1, delay: 1.2 });
  gsap.to(".header__link--1", { y: 0, opacity: 1, delay: 1.4 });
  gsap.to(".header__link--2", { y: 0, opacity: 1, delay: 1.6 });
  gsap.to(".header__link--3", { y: 0, opacity: 1, delay: 1.8 });
  gsap.to(".header__link--4", { y: 0, opacity: 1, delay: 2 });
  gsap.to(".intro__paragraph", { x: 0, opacity: 1, delay: 2.2 });
  gsap.to(".intro__header", {
    opacity: 1,
    duration: 2.0,
    ease: "elastic.out( 1, 0.3)",
    x: 0,
    delay: 2.6,
  });
});
