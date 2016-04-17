var Order = require('../models/orderModel');

module.exports = {

  create: function(req, res) {
    Order.create(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  read: function(req, res) {
    Order.find(req.query, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },
}
