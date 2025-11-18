var express = require('express');
var router = express.Router();

//importar el archivo dataService aquí a las rutas
var dataService = require("../data/dataService");

/* GET home page. */
router.get('/', function(req, res, next) {
  let juego = dataService.getVideojuegos;
  res.render('index', { arrayJuegos : juego });
});

/**Ruta para la subpágina item.ejs */
router.get('/item', function(req, res, next) {
  let juego = dataService.getVideojuegos;
  res.render('item', { arrayJuegos : juego });
});

module.exports = router;
