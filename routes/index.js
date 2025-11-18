var express = require('express');
var router = express.Router();

//importar el archivo dataService aquí a las rutas
var dataService = require("../data/dataService");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

/**Ruta para la subpágina item.ejs */
router.get('/videojuegos', function(req, res, next) {
  let videojuegos = dataService.getVideojuegos();
  res.render('videojuegos', { arrayVideojuegos : videojuegos });
});

router.get('/videojuegos/:pid', function(req, res, next) {
  let item1 = dataService.getVideojuegosById(req.params.pid);
  res.render('item', { item : item1 });
});

module.exports = router;
