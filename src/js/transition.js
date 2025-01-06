window.addEventListener("load", function () {
  console.log("Page Loaded");

  // Verificăm dacă tranziția a fost deja realizată în sesiune
  if (!sessionStorage.getItem('transitionDone')) {
    // Dacă nu a fost realizată, pornim tranziția
    startTransition();
  } else {
    console.log("Transition already completed, skipping.");
    // Ascundem imediat ecranul de tranziție dacă a fost deja completat
    document.getElementById("transition-screen").style.display = "none";
  }
});

function startTransition() {
  const transitionScreen = document.getElementById("transition-screen");
  const logo = document.getElementById("logo");

  // Asigurăm animația logo-ului
  logo.style.animation = 'fadeIn 1.5s ease-out';

  // După un timp (cât durează animația), ascundem ecranul de tranziție
  setTimeout(function () {
    transitionScreen.style.display = "none"; // Ascundem ecranul de tranziție
    // Setăm în sessionStorage pentru a indica că tranziția s-a realizat
    sessionStorage.setItem('transitionDone', 'true');
    console.log("Transition completed.");
  }, 3000); // Așteptăm 3 secunde (durata animației)
}
