softModCreator.controller('softwareCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.softIndex = $routeParams.softIndex;
	$scope.selectedSoftware = $scope.software[$scope.softIndex];

	$scope.categories = [];

	$scope.selectedCategory = undefined;
	$scope.selectedNeed = undefined;

	$scope.addCategoryBtn = function() {
		$scope.selectedSoftware.addCategory();
	}

	$scope.addNeedBtn = function() {
		$scope.selectedSoftware.addNeed();
	}

	$scope.validBtn = function() {
		resetSubView($scope);
	}

	$scope.selectCategory = function(index) {
		resetSubView($scope);
		$scope.selectedCategory = $scope.selectedSoftware.categories.value[index].category.value;
	}

	$scope.selectNeed = function(index) {
		resetSubView($scope);
		$scope.selectedNeed = $scope.selectedSoftware.needs.value[index];
	}

	function resetSubView($scope) {
		$scope.selectedNeed = undefined;
		$scope.selectedCategory = undefined;
	}
}]);