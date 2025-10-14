// Referencias al modal y su contenido
const modal = document.getElementById("zoom-modal");
const modalImg = document.getElementById("imagen-ampliada");
const cerrar = document.querySelector(".cerrar");

// Función para abrir el modal con la imagen clicada o abrir PDF en nueva pestaña
function abrirModal(img) {
  const src = img.getAttribute("data-src") || img.src;
  if (!src) return;

  const extension = src.split('.').pop().toLowerCase();console.log(extension);

  if (extension === "pdf" || /^com.*$/.test(extension)) {
    window.open(src, "_blank"); // Abre el PDF en una nueva pestaña
  } else {
    if (modal && modalImg) {
      modalImg.src = src;       // Muestra la imagen clicada
      modalImg.alt = img.alt;   // Copia el texto alternativo
      setTimeout(() => {
        modal.style.display = "block"; // Abre el modal con un pequeño retardo
      }, 10);
    }
  }
}

// Aplica el comportamiento a todas las imágenes que pueden abrir el modal
document.querySelectorAll(".galeria-fotos img, .carrusel-imagenes img").forEach(img => {
  img.addEventListener("click", () => abrirModal(img));
});

// Cierra el modal al hacer clic en la "X"
if (cerrar) {
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Cierra el modal si se hace clic fuera de la imagen ampliada
document.addEventListener("click", function (e) {
  const esClickDentroDelModal = modal?.contains(e.target);
  const modalVisible = modal?.style.display === "block";

  if (!esClickDentroDelModal && modalVisible) {
    modal.style.display = "none";
  }
});
