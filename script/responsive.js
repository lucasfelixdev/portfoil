// document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

let show = true;
const menuSection = document.querySelector(".container__responsividade");
const menuToggle = document.querySelector(".menu-toggle");
const itens = document.querySelectorAll(".nav__items a");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menuSection.classList.toggle("on", show);
  show = !show;
});

itens.forEach(item => {
  item.addEventListener("click", () => {
    menuSection.classList.remove("on");
    document.body.style.overflow = "initial";
    show = true;
  });
});

