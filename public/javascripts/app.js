/* Accordion */
const titulos = document.querySelectorAll('#acordeon .titulo-acordeon');
const parrafos = document.querySelectorAll('#acordeon .parrafo-acordeon');

titulos.forEach((titulo, i) => {
  titulo.addEventListener('click', () => {
    parrafos.forEach((p, j) => {
      if (i !== j) p.classList.remove('show');
    });
    parrafos[i].classList.toggle('show');
  });
});

// OFF-CANVAS
let boton = document.getElementById('download');
let menu = document.getElementById('off-canvas');
let fondo = document.getElementById('overlay');
let cerrar = document.getElementById('close-off-canvas');

if (boton && menu && fondo && cerrar) {
    boton.addEventListener("click", () => {
        fondo.classList.add('show');
        menu.classList.add('show');
    });

    cerrar.addEventListener("click", () => {
        fondo.classList.remove('show');
        menu.classList.remove('show');
    })
}
 
