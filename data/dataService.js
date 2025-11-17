const path = require('path');
const fs = require('fs');

const videojuegos = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'videojuegos.json'), 'utf8')
);

function getVideojuegos() {
    return veideojuegos.filter((e) => { return (e.precio < precio) });
}

function getVideojuegosById(id) {
    return videojuegos.filter((juego) => { return (juego.id == id) })[0];
}

module.exports = {
    getVideojuegos,
    getVideojuegosById
}