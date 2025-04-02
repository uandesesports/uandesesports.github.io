document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("footer-container");
  
    fetch("shared/footer.html")
      .then(response => {
        if (!response.ok) throw new Error("No se pudo cargar footer.html");
        return response.text();
      })
      .then(html => {
        container.innerHTML = html;
      })
      .catch(error => {
        console.error("Error al cargar el footer:", error);
      });
  });
