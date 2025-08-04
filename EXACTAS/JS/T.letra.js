document.addEventListener("DOMContentLoaded", function () {
  const parrafos = document.querySelectorAll('.texto-noticia');

  parrafos.forEach(p => {
    const length = p.innerText.length;
    const screenWidth = window.innerWidth;

    // Solo aplicar en pantallas grandes
    if (screenWidth > 768) {
      if (length >= 1050) {
        p.style.fontSize = '0.9rem';
      } else if (length >= 800) {
        p.style.fontSize = '1rem';
      } else if (length >= 400) {
        p.style.fontSize = '1.05rem';
      } else {
        p.style.fontSize = '1.1rem';
      }
    } else {
      // En móviles, mantener tamaño legible
      p.style.fontSize = '1rem';
    }
  });
});
