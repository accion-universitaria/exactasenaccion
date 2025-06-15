document.addEventListener("DOMContentLoaded", () => {
  inicializarMenuPrincipal();
  inicializarSubMenu();
});

function inicializarMenuPrincipal() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
  });
}

function inicializarSubMenu() {
  const toggleSub = document.getElementById("sub-menu-toggle");
  const subMenu = document.getElementById("sub-menu-candidatos");

  if (!toggleSub || !subMenu) return;

  toggleSub.addEventListener("click", () => {
    subMenu.classList.toggle("oculto");
  });
}
