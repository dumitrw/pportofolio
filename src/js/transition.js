document.addEventListener("DOMContentLoaded", function() {
  const transitionElement = document.getElementById("transition-screen");

  // Verificăm calea curentă și aplicăm tranzitia doar pe pagina principală
  const isHomePage = window.location.pathname === "/" || window.location.pathname === "/index.html";

  console.log("Current Path: ", window.location.pathname);
  console.log("Este pagina principală? ", isHomePage);

  if (isHomePage) {
    console.log("Se aplică tranzitia pe pagina principală.");
    if (!sessionStorage.getItem("hasVisited")) {
      sessionStorage.setItem("hasVisited", "true");

      setTimeout(() => {
        transitionElement.classList.add("fade-out");

        setTimeout(() => {
          transitionElement.classList.add("hidden");
        }, 3000); // 3 secunde pentru fade-out
      }, 4000); // 4 secunde de pauză înainte de tranzitie
    } else {
      console.log("Pagina a fost deja vizitată în această sesiune. Ascund tranzitia.");
      transitionElement.classList.add("hidden");
    }
  } else {
    console.log("Nu suntem pe pagina principală. Ascund tranzitia imediat.");
    transitionElement.classList.add("hidden");
  }
});
