document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".ul-nav-mob");


  function toggleMenu() {
    const isOpen = menuItems.classList.toggle("is-active");
    menuToggle.classList.toggle("is-active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "initial";
  }


  function closeMenu() {
    menuItems.classList.remove("is-active");
    menuToggle.classList.remove("is-active");
    document.body.style.overflow = "initial";
  }

  // Ao clicar no hambúrguer → abre/fecha
  menuToggle.addEventListener("click", toggleMenu);

  // Ao clicar em qualquer link → fecha
  menuItems.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Ao recarregar a página → fecha sempre
  closeMenu();
});
