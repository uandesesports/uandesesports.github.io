document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("navbar-container");
  
    fetch("navbar.html")
      .then(response => {
        if (!response.ok) throw new Error("No se pudo cargar navbar.html");
        return response.text();
      })
      .then(html => {
        container.innerHTML = html;
      })
      .catch(error => {
        console.error("Error al cargar la navbar:", error);
      });
  });