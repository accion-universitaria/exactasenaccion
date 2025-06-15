  document.addEventListener("DOMContentLoaded", function () {
    const parrafos = document.querySelectorAll('.texto-noticia');

    parrafos.forEach(p => {
      const length = p.innerText.length;

      // Ajustar según rangos de longitud de caracteres
      if (length >= 1050) {
        p.style.fontSize = '50%';
      } else if (length >= 800) {
        p.style.fontSize = '50%';
      } else if (length >= 400) {
        p.style.fontSize = '45%';
      } else {
        p.style.fontSize = '40%';
      }
    });
  });
