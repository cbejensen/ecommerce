var Product = require('../models/productModel');

module.exports = {

  create: function(req, res) {
    Product.create(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  read: function(req, res) {
    Product.find(req.query, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  findById: function(req, res) {
    var id = req.params.id;
    Product.findById(id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  update: function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body,
    { new: true }, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  delete: function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
}
