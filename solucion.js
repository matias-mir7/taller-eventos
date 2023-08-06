document.addEventListener("DOMContentLoaded", function () {
    const miBoton = document.querySelector("button");
    const miDiv = document.querySelector("div");
  
    miBoton.addEventListener("click", function (event) {
      event.stopPropagation();
      alert("Hola! Soy el botón");
    });
  
    miDiv.addEventListener("click", function () {
      alert("Hola! Soy el div");
    });
  });
  