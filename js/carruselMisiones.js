// Referencias al carrusel y sus elementos
const carrusel = document.querySelector(".carrusel-imagenes");
const imagenes = carrusel?.querySelectorAll("img");
const flechaIzq = document.querySelector("button.mision-flecha:nth-of-type(1)");
const flechaDer = document.querySelector("button.mision-flecha:nth-of-type(2)");

if (carrusel && imagenes.length > 0 && flechaIzq && flechaDer) {
  let indice = 0;           // Índice actual del carrusel
  const visibles = 3;       // Número de imágenes visibles al mismo tiempo

  // Calcula y aplica el desplazamiento horizontal
  function actualizarCarrusel() {
    const anchoImagen = imagenes[0].offsetWidth + 16; // 16px de margen entre imágenes
    const maxDesplazamiento = (imagenes.length - visibles) * anchoImagen;
    const desplazamiento = Math.min(indice * anchoImagen, maxDesplazamiento);
    carrusel.style.transform = `translateX(-${desplazamiento}px)`;
  }

  // Recalcula el carrusel al redimensionar la ventana
  window.addEventListener("resize", actualizarCarrusel);

  // Avanza el carrusel hacia la derecha
  flechaDer.addEventListener("click", () => {
    if (indice < imagenes.length - visibles) {
      indice++;
      actualizarCarrusel();
    }
  });

  // Retrocede el carrusel hacia la izquierda
  flechaIzq.addEventListener("click", () => {
    if (indice > 0) {
      indice--;
      actualizarCarrusel();
    }
  });

  // Añade el atributo title a cada imagen al pasar el mouse
  imagenes.forEach(imagen => {
    imagen.addEventListener("mouseover", () => {
      imagen.title = imagen.alt;
    });
  });
}