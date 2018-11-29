var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.connection.query('SELECT * FROM chamadas', function(error, chamadas, fields) {
    if (error) throw error;
    res.send(chamadas);
  });
});

router.post('/', function(req, res, next) {
  var chamada = {
    tipo: req.body.tipo,
    local: req.body.local,
    detalhe: req.body.detalhe,
    data: req.body.data,
  };
  res.locals.connection.query('INSERT INTO chamadas SET ?', chamada, function(error, results, fields) {
    if (error) throw error;
    res.send({message: 'Chamada efetuada com sucesso'});
  });
});

module.exports = router;
