angular.module('starter.controllers', [])

.controller('ScanItemCtrl', function($scope) {})

.controller('InventoryCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TrackerCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
module.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {
  document.addEventListener("deviceready", function () {
  $scope.scanBarcode = function(){
    
    $cordovaBarcodeScanner.scan().then(function(imageData) {
        // Success! Barcode data is here
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://api.nutritionix.com/v1_1/item?upc="+imageData.text+"&appId=97003986&appKey=49840d98086fbae2db6bd9183dd6de14",true);
        xhttp.send();
        xmlNutrition = xhttp.responseXML;
      }, function(error) {
        // An error occurred
        console.log("an error happend " + error);
      });
  }, false)
});

/*.controller("BarcodeCtrl", function($scope, $cordovaBarcodeScanner) {
   
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };
   
  });*/
