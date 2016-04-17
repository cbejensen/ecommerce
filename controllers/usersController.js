var User = require('../models/userModel');

module.exports = {

  create: function(req, res) {
    User.create(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  read: function(req, res) {
    User.find(req.query, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  findById: function(req, res) {
    var id = req.params.id;
    User.findById(id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body,
                              { new: true }, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
}
