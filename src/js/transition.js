document.addEventListener("DOMContentLoaded", function() {
  const transitionElement = document.getElementById("transition-screen");

  // Verificăm dacă suntem pe pagina principală și dacă tranzitia nu a fost deja arătată
  if (window.location.pathname === "/" && !sessionStorage.getItem("hasVisited")) {
    // Setăm că am vizitat pagina principală
    sessionStorage.setItem("hasVisited", "true");

    // Așteptăm 4 secunde înainte de a începe tranziția (pentru a da timp efectului de fade-in)
    setTimeout(() => {
      transitionElement.classList.add("fade-out"); // Aplicăm clasa care va începe tranziția

      // Ascundem tranzitia după 3 secunde (timpul tranzitiei, ajustabil)
      setTimeout(() => {
        transitionElement.classList.add("hidden"); // Ascundem elementul
      }, 3000); // Acest timp ar trebui să corespundă cu durata tranziției
    }, 4000); // Așteptăm 4 secunde înainte de a începe fade-out
  } else {
    // Dacă nu suntem pe pagina principală, ascundem tranzitia imediat
    transitionElement.classList.add("hidden");
  }
});
