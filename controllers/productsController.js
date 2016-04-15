var Product = require('../models/product');

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
    {new: true}, function(err, result) {
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

  //mongojs functions
  /*
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
    req.body.age = parseInt(req.body.age, 10);
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
    delete req.body._id;
    req.body.age = parseInt(req.body.age, 10);
    db.products.update(idObj, req.body, function(err, response) {
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
  */
}
