var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = mongoose.model('Product').schema;

var orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  products: [{
    item: productSchema,
    quantity: {type: Number, required: true, min: 1, default: 1}
  }],
  ordered: {type: Date, default: new Date()}
})


module.exports = mongoose.model('Order', orderSchema)
