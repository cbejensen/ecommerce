angular.module('ecommerce')
.controller('HomeController', function($scope, eService) {
  
  function showResults(data) {
    $scope.viewResults = true;
    if(data) {
      $scope.products = data;
      var lastWord = ' products.';
      if($scope.products.length === 1) {
        lastWord = ' product.'
      };
      $scope.resultsSummary = "Found " + $scope.products.length + lastWord;
    } else {
      $scope.resultsSummary = 'Something\'s not quite right. Please try again.';
    }
  }
  
  $scope.getProducts = function() {
    eService.getProducts().then(function(data) {
      showResults(data);
    })
  }
  
  $scope.findProduct = function() {
    eService.findProduct($scope.productId).then(function(data) {
      if(data) data = [data];
      showResults(data);
    })
  }
  
})