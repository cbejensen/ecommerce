var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongo = require('mongojs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

var productsController = require('./controllers/productsController')

app.get('/api/products', productsController.find);
app.get('/api/products/:id', productsController.findOne);
app.post('/api/products', productsController.save);
app.put('/api/products/:id', productsController.update);
app.delete('/api/products/:id', productsController.remove);

var port = 8000;
app.listen(port, function() {
  console.log('Listening on port', port)
})