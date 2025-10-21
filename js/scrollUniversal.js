(function() {
  // Establecer offset según el archivo HTML
  function actualizarOffset() {
    const pagina = window.location.pathname.split("/").pop();
    const seccion = window.location.hash; // Esto captura el fragmento como "#misiones"

    if (window.matchMedia("(max-width: 1000px)").matches) {
      switch (pagina) {
        case "index.html":
          if (seccion === "#misiones") {
            window.miOffset = -50; // Offset específico para #misiones en móvil
          } else {
              window.miOffset = -100;
            }
          break;
        case "ensayos.html":
          window.miOffset = 35;
          break;
        case "capacidadesTecnicas.html":
          window.miOffset = -20;
          break;
        case "multimedia.html":
          window.miOffset = -10;
          break;
        default:
          window.miOffset = 0;
      }
    } else {
      switch (pagina) {
        case "index.html":
          if (seccion === "#misiones") {
            window.miOffset = 0; // Offset específico para #misiones en escritorio
          } else {
              window.miOffset = -100;
            }
          break;
        case "ensayos.html":
          window.miOffset = 160;
          break;
        case "capacidadesTecnicas.html":
          window.miOffset = -10;
          break;
        case "multimedia.html":
          window.miOffset = -30;
          break;
        default:
          window.miOffset = 0;
      }
    }
  }

  // Actualizar offset al cargar y al redimensionar
  actualizarOffset();
  window.addEventListener("resize", actualizarOffset);

  // Función global para hacer scroll con offset
  window.scrollMarcador = function(enlace) {
    const destino = document.getElementById(enlace);
    const plus = document.querySelector("main")?.offsetTop ?? 0;
    const posicion = destino?.offsetTop ?? 0;

    window.scrollTo({
      top: posicion + plus + window.miOffset,
      behavior: "smooth" // Cambia a "smooth" si quieres animación
    });
  };

  // Al cargar la página, aplicar scroll si hay hash
  document.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash?.slice(1);
    if (hash && typeof window.scrollMarcador === "function") {
      setTimeout(() => window.scrollMarcador(hash), 100);
    }
  });

  // Intercepción de clics en enlaces
  document.addEventListener("click", function(event) {
    const enlace = event.target.closest("a");
    if (!enlace || !enlace.href) return;

    const url = new URL(enlace.href);
    const mismoDocumento = url.pathname === window.location.pathname;
    const esExterna = url.origin !== window.location.origin;
    const tieneHash = url.hash.length > 1;

    // Enlace interno con hash
    if (mismoDocumento && tieneHash) {
      const id = url.hash.slice(1); // Sin "#"
      window.scrollMarcador(id);
      event.preventDefault();
      history.pushState(null, "", "#" + id);
    }

    // Enlace externo con hash → redirigir sin el #
    if (esExterna && tieneHash) {
      event.preventDefault();
      window.location.href = `${url.origin}${url.pathname}${url.search}`;
    }
  });
})();
