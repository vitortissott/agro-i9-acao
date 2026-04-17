function iniciarTradutor() {
  new google.translate.TranslateElement(
    { pageLanguage: 'pt' },
    'google_tradutior'
  );
}

function alternarIdioma() {
  const dropdown = document.getElementById("idiomaDropdown");
  dropdown.classList.toggle("mostrar");
}

window.onclick = function(evento) {
  if (!evento.target.matches('.idioma_botao')) {
    const dropdown = document.getElementById("idiomaDropdown");
    if (dropdown.classList.contains('mostrar')) {
      dropdown.classList.remove('mostrar');
    }
  }
};

function googleTranslateElementInit() {
  iniciarTradutor();
}