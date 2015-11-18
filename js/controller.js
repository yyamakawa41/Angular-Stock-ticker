var stocksApp = angular.module('stocksApp', []);

stocksApp.controller('stocksController', function ($scope, $http){


	$scope.getStocks = function(){
		var encodedTickers = encodeURIComponent($scope.userStocks);
		url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("'+encodedTickers+'")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';
	
		// $http.get(url).success(function (stockData){
		// 	// console.log(stockData);
		// 	// console.log(encodedTickers);
		// 	$scope.listOfStocks = stockData.query.results.quote;
		// 	console.log(stockData.query.results)

			$scope.listOfStocks = [
            {
                Symbol: "Goog",
                Change: "+1.2",
                Name: "Google"
            },
            {
                Symbol: "Yhoo",
                Change: "-1.2",
                Name: "Yahoo"
            },
            {
                Symbol: "X",
                Change: "+2.2",
                Name: "Trinity Trains"
            }
            ];

		// });

	};

	$scope.loadStock = function(stockData){
		$scope.dataList = [];
		for (name in stockData){
			$scope.dataList.push({
				prop: name,
				value: stockData[name]
			})
		}
	}

	$scope.getChangeClass = function (change){
		if(change.indexOf('+') > -1){
			return 'change-positive';
		}else if(change.indexOf('-') > -1){
			return 'change-negative';
		}
	}
});

















