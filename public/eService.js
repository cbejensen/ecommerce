angular.module('ecommerce')
.service('eService', function($http) {
  
  var url = 'http://localhost:8000/api/products/';
  
  function succesHandler(res) {
    console.log(res);
    return res.data;
  };
  
  function errorHandler(err) {
    console.log(err);
    return null;
  }
  
  this.getProducts = function() {
    return $http.get(url).then(succesHandler, errorHandler);
  }
  
  this.findProduct = function(id) {
    return $http.get(url + id).then(succesHandler, errorHandler);
  }
  
  this.createProduct = function(product) {
    return $http.post(url, product).then(succesHandler, errorHandler);
  }
  
  this.updateProduct = function(oldProduct, newProduct) {
    var id = oldProduct._id;
    console.log(newProduct)
    return $http.put(url + id, newProduct).then(succesHandler, errorHandler);
  }
  
  this.deleteProduct = function(id) {
    return $http.delete(url + id).then(succesHandler, errorHandler);
  }
  
})