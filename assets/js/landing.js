"use strict";

const menuButton = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
}
menuButton.addEventListener("click", () => {
  mobileNav.hidden = !mobileNav.hidden;
  menuButton.setAttribute("aria-expanded", String(!mobileNav.hidden));
});
mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
