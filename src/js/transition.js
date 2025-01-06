if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function() {
      const transitionElement = document.getElementById("transition-screen");
  
      if (!sessionStorage.getItem("hasVisited")) {
        sessionStorage.setItem("hasVisited", "true");
  
        setTimeout(() => {
          transitionElement.classList.add("hidden");
        }, 2000); // Durata tranziției
      } else {
        transitionElement.classList.add("hidden");
      }
    });
  }
  