const encabezado = document.getElementById("encabezado");
const imagenesFondo = [
  "imagenes/fondoCabecera.jpg",
  "imagenes/multipactor.jpg",
  "imagenes/fondoAntena.jpg",
  "imagenes/fondoPanel.jpg",
  "imagenes/fondoAnecoica.png",
  "imagenes/corona.jpg",
  "imagenes/pim.jpg",
  "imagenes/powerHandling.jpg"
];

let indiceActual = 0;
let intervaloCambio;
let pausado = false;

function mostrarImagen(indice) {
  encabezado.style.backgroundImage = `url("${imagenesFondo[indice]}")`;
}

function iniciarCambioAutomatico() {
  clearInterval(intervaloCambio);
  if (!pausado) {
    intervaloCambio = setInterval(() => {
      indiceActual = (indiceActual + 1) % imagenesFondo.length;
      mostrarImagen(indiceActual);
    }, 5000);
  }
}

function cambiarManual(direccion) {
  if (direccion === "izquierda") {
    indiceActual = (indiceActual - 1 + imagenesFondo.length) % imagenesFondo.length;
  } else {
    indiceActual = (indiceActual + 1) % imagenesFondo.length;
  }
  mostrarImagen(indiceActual);
  iniciarCambioAutomatico();
}



document.querySelector(".izquierda").addEventListener("click", () => {
  cambiarManual("izquierda");
});

document.querySelector(".derecha").addEventListener("click", () => {
  cambiarManual("derecha");
});

const botonPausa = document.getElementById("boton-pausa");
botonPausa.addEventListener("click", () => {
  pausado = !pausado;
  if (pausado) {
    clearInterval(intervaloCambio);
    botonPausa.textContent = "▶";
  } else {
    iniciarCambioAutomatico();
    botonPausa.textContent = "❚❚";
  }
});

mostrarImagen(indiceActual);
iniciarCambioAutomatico();

