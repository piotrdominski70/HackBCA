//the file for controller objects (Angular JS)

angular.module('starter', ['ionic', 'ngCordova'])

.controller("BCScannerController", function($scope, $cordovaBarcodeScanner) {
	 
		$scope.scanBarcode = function() {
			$cordovaBarcodeScanner.scan().then(function(imageData) {
				alert(imageData.text);
				console.log("Barcode Format -> " + imageData.format);
				console.log("Cancelled -> " + imageData.cancelled);
			}, function(error) {
				console.log("An error happened -> " + error);
			});
		};
	 
	});
