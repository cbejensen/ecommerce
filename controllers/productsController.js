var mongo = require('mongojs');
var db = mongo('ecommerce', ['products']);

module.exports = {
  find: function(req, res, next) {
    db.products.find(req.query, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(response);
      }
    });
  },
  findOne: function(req, res, next) {
    var idObj = { _id : mongo.ObjectId(req.params.id) };
    db.products.findOne(idObj, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(response);
      }
    });
  },
  save: function(req, res, next) {
    db.products.save(req.body, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(response);
      }
    });
  },
  update: function(req, res, next) {
    if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    var idObj = { _id : mongo.ObjectId(req.params.id) };
    db.products.update(idObj, { $set : req.body }, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(response);
      }
    });
  },
  remove: function(req, res, next) {
    var idObj = { _id : mongo.ObjectId(req.params.id) };
    db.products.remove(idObj, function(err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(response);
      }
    });
  }
}