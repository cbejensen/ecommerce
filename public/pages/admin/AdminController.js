angular.module('ecommerce')
.controller('AdminController', function($scope, eService) {

  function getProducts() {
    console.log('getting products')
    eService.getProducts().then(function(data) {
      $scope.products = data;
    })
  };
  getProducts();

  var oldProduct = {};

  $scope.createProduct = function() {
    eService.createProduct($scope.newProduct).then(function(res) {
      if(res) {
        alert('Success!');
        $scope.newProduct = {};
      } else {
        alert('Something went wrong. Please try again.')
      }
      getProducts();
    });
  }

  $scope.editProduct = function(product) {
    oldProduct = product;
    $scope.editedProduct = angular.copy(product);
    $scope.showUpdateForm = true;
  }

  $scope.updateProduct = function() {
    eService.updateProduct(oldProduct, $scope.editedProduct).then(function(res) {
      if(res) {
        alert($scope.editedProduct.title + ' has been updated!');
        $scope.showUpdateForm = false;
      } else {
        alert('Something went wrong. Please try again.')
      }
      getProducts();
    })
  }

  $scope.deleteProduct = function(id) {
    eService.deleteProduct(id).then(function(res) {
      if(res) {
        alert('Success!');
      } else {
        alert('Something went wrong. Please try again.')
      }
      getProducts();
    })
  }

});
