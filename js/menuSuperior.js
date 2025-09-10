function alternarMenu() {
  const menu = document.getElementById("elementos-menu");
  menu.classList.toggle("mostrar");
}

document.querySelectorAll(".tiene-submenu > a").forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const padre = this.parentElement;
      document.querySelectorAll(".tiene-submenu").forEach(item => {
        if (item !== padre) {
          item.classList.remove("mostrar-submenu");
        }
      });
      padre.classList.toggle("mostrar-submenu");
    }
  });
});

document.addEventListener("click", function (e) {
  const menu = document.querySelector(".menu");
  if (!menu.contains(e.target)) {
    document.querySelectorAll(".tiene-submenu").forEach(item => {
      item.classList.remove("mostrar-submenu");
    });
  }
});