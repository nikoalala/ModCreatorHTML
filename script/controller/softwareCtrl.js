softModCreator.controller('softwareCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.softIndex = $routeParams.softIndex;
	$scope.selectedSoftware = $scope.software[$scope.softIndex];

	$scope.categories = [];

	$scope.selectedCategory = undefined;


	$scope.addCategoryBtn = function() {
		$scope.selectedSoftware.addCategory();
	}

	$scope.validCategoryBtn = function() {
		$scope.selectedCategory = undefined;
	}

	$scope.selectCategory = function(index) {
		$scope.selectedCategory = $scope.selectedSoftware.categories.value[index].category.value;
	}


}]);