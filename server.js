var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

mongoose.connect('mongodb://localhost/products');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongoose')
});

var port = 8000;
app.listen(port, function() {
  console.log('Listening on port', port)
})
