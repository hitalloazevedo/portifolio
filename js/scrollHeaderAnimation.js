const header = document.querySelector("#nav-menu");
const options = document.querySelectorAll("#nav-menu nav ul li a");
const menu = document.querySelector("ul.menus");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scroll");
    menu.classList.add("scrollb");
    options.forEach((i) => {
      i.classList.add("scrolla");
    });
  } else {
    header.classList.remove("scroll");
    menu.classList.remove("scrollb");
    options.forEach((i) => i.classList.remove("scrolla"));
  }
});
