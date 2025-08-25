const toggle = document.getElementById("languageToggle");

function updateLanguage(lang) {
  const traduccion = lang === "en" ? traduccionEn : traduccionEs;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = traduccion[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
  const key = el.getAttribute("data-i18n-html");
  if (traduccion[key]) {
    el.innerHTML = traduccion[key];
  }
});

  document.querySelectorAll("*").forEach(el => {
    Array.from(el.attributes).forEach(attr => {
      const match = attr.name.match(/^data-i18n-(.+)$/);
      if (match) {
        const targetAttr = match[1];
        const key = attr.value;
        if (traduccion[key]) {
          el.setAttribute(targetAttr, traduccion[key]);
        }
      }
    });
  });

  localStorage.setItem("preferredLang", lang);
  toggle.checked = lang === "en";
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "es";
  updateLanguage(savedLang);
});

toggle.addEventListener("change", function () {
  const lang = this.checked ? "en" : "es";
  updateLanguage(lang);
});
