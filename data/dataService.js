const path = require('path');
const fs = require('fs');

/*de json a js*/
const videojuegos = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'videojuegos.json'), 'utf8')
);


function getVideojuegos() {
    return videojuegos;
}

function getVideojuegosById(id) {
    return videojuegos.filter((juego) => { return (juego.id == id) })[0];
}

/*Exportar todas las funciones */
module.exports = {
    getVideojuegos,
    getVideojuegosById
}