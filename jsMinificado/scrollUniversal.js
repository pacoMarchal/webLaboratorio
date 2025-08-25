(function(){
// Establecer offset según el archivo HTML
function actualizarOffset(){const e=window.location.pathname.split("/").pop();window.matchMedia("(max-width: 1000px)").matches?function(){switch(e){case"index.html":window.miOffset=-100;break;case"ensayos.html":window.miOffset=100;break;case"capacidadesTecnicas.html":window.miOffset=-10;break;default:window.miOffset=0}}():function(){switch(e){case"index.html":window.miOffset=-100;break;case"ensayos.html":window.miOffset=160;break;case"capacidadesTecnicas.html":window.miOffset=50;break;default:window.miOffset=0}}()}
// Actualizar offset al cargar y al redimensionar
actualizarOffset(),window.addEventListener("resize",actualizarOffset);
// Función global para hacer scroll con offset
window.scrollMarcador=function(e){const t=document.getElementById(e),o=document.querySelector("main")?.offsetTop??0,n=t?.offsetTop??0;window.scrollTo({top:n+o+window.miOffset,behavior:"smooth" // Cambia a "smooth" si quieres animación
})};
// Al cargar la página, aplicar scroll si hay hash
document.addEventListener("DOMContentLoaded",function(){const e=window.location.hash?.slice(1);e&&"function"==typeof window.scrollMarcador&&setTimeout(()=>window.scrollMarcador(e),100)});
// Intercepción de clics en enlaces
document.addEventListener("click",function(e){const t=e.target.closest("a");if(!t||!t.href)return;const o=new URL(t.href),n=o.pathname===window.location.pathname,r=o.origin!==window.location.origin,a=o.hash.length>1;
// Enlace interno con hash
if(n&&a){const n=o.hash.slice(1);window.scrollMarcador(n),e.preventDefault(),history.pushState(null,"","#"+n)}
// Enlace externo con hash → redirigir sin el #
r&&a&&(e.preventDefault(),window.location.href=`${o.origin}${o.pathname}${o.search}`)})})();