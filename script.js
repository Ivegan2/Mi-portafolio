// Detectar cuando las secciones entran en vista
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('visible'); // Activa la animación
        }
    });
});

// Mostrar el botón cuando el usuario haga scroll
window.addEventListener('scroll', function() {
    const button = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        button.classList.add('show'); // Añade la clase 'show'
    } else {
        button.classList.remove('show'); // Elimina la clase 'show'
    }
});

// Selecciona todos los botones
const buttons = document.querySelectorAll(".toggle-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Encontrar la tarjeta asociada al botón
    const carta = button.closest(".carta");
    const hiddenText = carta.querySelector(".hidden-text");

    // Alternar la visibilidad del texto extra
    if (hiddenText.style.display === "block") {
      hiddenText.style.display = "none"; // Ocultar el texto
      button.textContent = "+ info"; // Cambiar el texto del botón
    } else {
      hiddenText.style.display = "block"; // Mostrar el texto
      button.textContent = "- info"; // Cambiar el texto del botón
    }
  });
}); 

// Asegurarse de que todos los textos ocultos estén escondidos al cargar
document.addEventListener("DOMContentLoaded", () => {
    const hiddenTexts = document.querySelectorAll(".hidden-text");
    hiddenTexts.forEach((text) => {
      text.style.display = "none";
    });
  });


// Función para hacer scroll hasta el principio
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll suave hacia arriba
    });
});

window.addEventListener('scroll', function() {
    console.log("Se está haciendo scroll");
});


