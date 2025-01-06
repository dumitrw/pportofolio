document.addEventListener("DOMContentLoaded", function() {
  const transitionElement = document.getElementById("transition-screen");
  
  // Verificăm dacă suntem pe pagina principală
  if (window.location.pathname === "/") {
    // Dacă suntem pe index, arătăm tranzitia doar o dată pe sesiune
    if (!sessionStorage.getItem("hasVisited")) {
      sessionStorage.setItem("hasVisited", "true");

      // Așteptăm un timp înainte de a începe tranziția
      setTimeout(() => {
        transitionElement.classList.add("fade-out");

        setTimeout(() => {
          transitionElement.classList.add("hidden");
        }, 3000);
      }, 4000);
    } else {
      // Dacă a fost vizitat deja, ascundem tranzitia imediat
      transitionElement.classList.add("hidden");
    }
  } else {
    // Dacă nu suntem pe pagina index, ascundem tranzitia imediat
    transitionElement.classList.add("hidden");
  }
});
