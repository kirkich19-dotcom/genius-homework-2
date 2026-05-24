const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".mobile-menu__menu-button-open");
const menuBtnClose = document.querySelector(".menu-button-close");

const toggleMenu = () => mobileMenu.classList.toggle("mobile-menu__is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);
