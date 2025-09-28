// Alternar visibilidad del menú principal (responsive)
function alternarMenu() {
  const menu = document.getElementById("elementos-menu");
  menu.classList.toggle("mostrar");
}

// Alternar submenús en modo responsive
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

// Cerrar menú y submenús al hacer clic fuera
document.addEventListener("click", function (e) {
  const menu = document.querySelector(".menu");
  const menuElementos = document.getElementById("elementos-menu");

  if (!menu.contains(e.target)) {
    // Cierra submenús
    document.querySelectorAll(".tiene-submenu").forEach(item => {
      item.classList.remove("mostrar-submenu");
    });

    // Cierra menú principal si está abierto
    if (menuElementos.classList.contains("mostrar")) {
      menuElementos.classList.remove("mostrar");
    }
  }
});

// Cerrar menú y submenús al hacer scroll
// window.addEventListener("scroll", function () {
//   const menuElementos = document.getElementById("elementos-menu");

//   if (menuElementos.classList.contains("mostrar")) {
//     menuElementos.classList.remove("mostrar");
//   }

//   document.querySelectorAll(".tiene-submenu").forEach(item => {
//     item.classList.remove("mostrar-submenu");
//   });
// });

// Cerrar menú y submenús al redimensionar la ventana
window.addEventListener("resize", function () {
  const menuElementos = document.getElementById("elementos-menu");

  if (menuElementos.classList.contains("mostrar")) {
    menuElementos.classList.remove("mostrar");
  }

  document.querySelectorAll(".tiene-submenu").forEach(item => {
    item.classList.remove("mostrar-submenu");
  });
});
