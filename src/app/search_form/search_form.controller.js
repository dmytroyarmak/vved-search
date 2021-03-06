'use strict';

angular.module('vvedSearch')
  .controller('SearchFormController', function ($scope, $location) {
  	$scope.searchFormData = {
  		query: null
  	};

  	$scope.searchFormSubmit = function() {
  		if ($scope.searchForm.$valid) {
  			$location
  				.path('search')
  				.search({
  					query: $scope.searchFormData.query
  				});
  		}
  	};
  });
