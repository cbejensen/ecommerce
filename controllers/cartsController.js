var Cart = require('../models/cartModel');

module.exports = {

  create: function(req, res) {
    Cart.create(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  read: function(req, res) {
    Cart.find(req.query, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  update: function(req, res) {
    Cart.findByIdAndUpdate(req.params.id, req.body,
                              { new: true }, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },
}
