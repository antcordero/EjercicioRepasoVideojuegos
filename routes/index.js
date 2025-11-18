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

module.exports = router;

/*
 <!-- mostrar todos los juegos desde el json -->
    
    <% arrayVideojuegos.forEach(juego => { %>
      <h3><%= juego.id %></h3>
      <h3><%= juego.titulo %></h3>   
    <% }); %>
*/