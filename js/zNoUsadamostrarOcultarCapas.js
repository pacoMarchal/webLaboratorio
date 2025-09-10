  let capaActual = null; // Ninguna visible al inicio

  function mostrarCapa(nuevaId) {
    if (nuevaId === capaActual) return;

    if (capaActual) {
      const actual = document.getElementById(capaActual);
      actual.classList.remove('activa');

      setTimeout(() => {
        const nueva = document.getElementById(nuevaId);
        nueva.classList.add('activa');
        capaActual = nuevaId;
      }, 500); // Espera a que se oculte la anterior
    } else {
      const nueva = document.getElementById(nuevaId);
      nueva.classList.add('activa');
      capaActual = nuevaId;
    }
  }

/*Ejemplo de cómo aplicarlo:
<article class="capacidad" onclick="mostrarCapa('camarasVacio'); return false;">
*/

/*CAPAS A MOSTRAR-OCULTAR
  <div id="amplificadores" class="capa texto-lateral">
    Esta es la Capa de amplificadores
  </div>

  <div id="camarasVacio" class="capa texto-lateral">
    Esta es la Capa de cámaras de vacío
  </div>

  <div id="areaLimpia" class="capa texto-lateral">
    Esta es la Capa de área limpia
  </div> 
*/ 