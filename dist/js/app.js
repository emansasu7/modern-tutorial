// SELECT DOM ITEMS
const menu_btn = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menu_branding = document.querySelector(".menu-branding");
const menu_nav = document.querySelector(".menu-nav");
const nav_items = document.querySelectorAll(".nav-item");

// SET INITIAL STATE
let showMenu = false;

// TOGGLE THE MENU
menu_btn.addEventListener("click", () => {
  if (!showMenu) {
    // adds show + close to class
    menu_btn.classList.add("close");
    menu.classList.add("show");
    menu_branding.classList.add("show");
    menu_nav.classList.add("show");
    nav_items.forEach((item) => item.classList.add("show"));
    // set menu state
    showMenu = true;
  } else {
    // removes show + close to class
    menu_btn.classList.remove("close");
    menu.classList.remove("show");
    menu_branding.classList.remove("show");
    menu_nav.classList.remove("show");
    nav_items.forEach((item) => item.classList.remove("show"));
    // nav_items.forEach((item) => item.classList.remove("show"));
    // set menu state
    showMenu = false;
  }
});
