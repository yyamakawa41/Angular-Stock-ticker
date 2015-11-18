var stocksApp = angular.module('stocksApp', []);

stocksApp.controller('stocksController', function ($scope, $http){


	$scope.getStocks = function(){
		var encodedTickers = encodeURIComponent($scope.userStocks);
	};
});
