var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = mongoose.model('Cart').schema;

var userSchmea = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true, index: true},
  password: {type: String, required: true},
  cart: cartSchema,
  orders: []
})


module.exports = mongoose.model('User', userSchmea)
