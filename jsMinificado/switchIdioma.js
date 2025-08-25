const toggle=document.getElementById("languageToggle");
// const text = document.getElementById("textContent");
toggle.addEventListener("change",function(){this.checked?(alert("Cambiado a inglés"),
// text.textContent = "Hello! Welcome to my website."
):(alert("Cambiado a español"),
// text.textContent = "¡Hola! Bienvenido a mi sitio web."
)});