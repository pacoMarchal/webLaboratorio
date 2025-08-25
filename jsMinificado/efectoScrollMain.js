const observador=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");
// Si es la sección de alta potencia, lanza la animación
if(e.target.id==="alta-potencia"){const t=e.target.querySelector("span");t.classList.add("animar");
// Quitar la animación después de 1 segundo
setTimeout(()=>{t.classList.remove("animar")},1e3)}observador.unobserve(e.target)}})},{threshold:.1});document.querySelectorAll("main section").forEach(e=>{observador.observe(e)});