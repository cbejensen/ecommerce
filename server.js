var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

var productsController = require('./controllers/productsController');

app.post('/api/products', productsController.create);
app.get('/api/products', productsController.read);
app.get('/api/products/:id', productsController.findById);
app.put('/api/products/:id', productsController.update);
app.delete('/api/products/:id', productsController.delete);

mongoose.connect('mongodb://localhost/ecommerce'); //name of library
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to Mongoose');
});

var port = 8000;
app.listen(port, function () {
  console.log('Listening on port', port)
})
