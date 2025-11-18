/* Accordion */
let dropAcordeon = document.querySelectorAll('.drop-acordeon');
let parrafoAcordeon = document.querySelectorAll('.parrafo-acordeon');

dropAcordeon.forEach((icono, indice) => {
    icono.addEventListener('click', () => {
      parrafoAcordeon[indice].classList.toggle('show');
    });
  });