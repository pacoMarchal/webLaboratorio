const carrusel = document.querySelector(".carrusel-imagenes");
const imagenes = carrusel.querySelectorAll("img");
const flechaIzq = document.querySelector("button.mision-flecha:nth-of-type(1)");
const flechaDer = document.querySelector("button.mision-flecha:nth-of-type(2)");

let indice = 0;
const visibles = 3;

function actualizarCarrusel() {
  const anchoImagen = imagenes[0].offsetWidth + 16; // 16px de gap
  const maxDesplazamiento = (imagenes.length - visibles) * anchoImagen;
  const desplazamiento = Math.min(indice * anchoImagen, maxDesplazamiento);
  carrusel.style.transform = `translateX(-${desplazamiento}px)`;
}
window.addEventListener("resize", actualizarCarrusel);


flechaDer.addEventListener("click", () => {
  if (indice < imagenes.length - visibles) {
    indice++;
    actualizarCarrusel();
  }
});

flechaIzq.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    actualizarCarrusel();
  }
});

imagenes.forEach(imagen=>{
  imagen.addEventListener("mouseover", ()=>{

    imagen.title=imagen.alt;
  })
});

// MODAL
const modal = document.getElementById("zoom-modal");
const modalImg = document.getElementById("imagen-ampliada");
const cerrar = document.querySelector(".cerrar");

document.querySelectorAll(".carrusel-imagenes img").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.style.display = "block";
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});


