document.addEventListener("DOMContentLoaded", function () {
    const articulos = document.querySelectorAll('.articulo');
    const articulosArray = Array.from(articulos);

    function convertirFecha(fechaStr) {
        const partesFecha = fechaStr.split('/');
        return new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
    }

    articulosArray.sort(function (a, b) {
        const fechaA = a.querySelector('.fecha-articulo h3').textContent.trim();
        const fechaB = b.querySelector('.fecha-articulo h3').textContent.trim();

        const dateA = convertirFecha(fechaA);
        const dateB = convertirFecha(fechaB);

        return dateB - dateA;
    });

    const contenedor = document.querySelector('.contenedor-articulos');
    articulosArray.forEach(function (articulo) {
        contenedor.appendChild(articulo);
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const parrafos = document.querySelectorAll('.texto-noticia');

  parrafos.forEach(parrafo => {
    const textoCompleto = parrafo.textContent.trim();

    // Solo hacer esto si el párrafo tiene más de 400 caracteres
    if (textoCompleto.length > 400) {
      const resumen = textoCompleto.slice(0, 300);
      const resto = textoCompleto.slice(300);

      // Limpiar contenido y reconstruir
      parrafo.innerHTML = `
        ${resumen}<span class="extra-texto">${resto}</span>
        <button class="toggle-texto">Ver más</button>
      `;

      const boton = parrafo.querySelector('.toggle-texto');

      boton.addEventListener('click', () => {
        parrafo.classList.toggle('expandido');
        boton.textContent = parrafo.classList.contains('expandido') ? 'Ver menos' : 'Ver más';
      });
    }
  });
});
