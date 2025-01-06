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

  // Schimbarea temei la apăsarea butonului
  const themeButton = document.getElementById('theme-toggle');
  themeButton?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    // Salvează tema activă în localStorage pentru a persista între sesiunile de navigare
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // La încărcarea paginii, verificăm tema salvată și o aplicăm
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

function startTransition() {
  const transitionScreen = document.getElementById("transition-screen");
  const logo = document.getElementById("logo");

  // Asigurăm animația logo-ului
  logo.style.animation = 'fadeIn 2s ease-out';

  // După un timp (cât durează animația), ascundem ecranul de tranziție
  setTimeout(function () {
    transitionScreen.style.display = "none"; // Ascundem ecranul de tranziție
    // Setăm în sessionStorage pentru a indica că tranziția s-a realizat
    sessionStorage.setItem('transitionDone', 'true');
    console.log("Transition completed.");
  }, 2000); // Așteptăm 3 secunde (durata animației)
}
