const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');

      // Si es la sección de alta potencia, lanza la animación
      if (entrada.target.id === 'alta-potencia') {
        const span = entrada.target.querySelector('span');
        span.classList.add('animar');

        // Quitar la animación después de 1 segundo
        setTimeout(() => {
          span.classList.remove('animar');
        }, 1000);
      }

      observador.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('main section').forEach(seccion => {
  observador.observe(seccion);
});
