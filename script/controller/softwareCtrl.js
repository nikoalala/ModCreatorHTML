softModCreator.controller('softwareCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.softIndex = $routeParams.softIndex;
	$scope.selectedSoftware = $scope.software[$scope.softIndex];

	$scope.categories = [];

	$scope.selectedCategory = undefined;
	$scope.selectedNeed = undefined;
	$scope.selectedFeature = undefined;
	$scope.selectedDependency = undefined;

	$scope.addCategoryBtn = function() {
		$scope.selectedSoftware.addCategory();
	}

	$scope.addNeedBtn = function() {
		$scope.selectedSoftware.addNeed();
	}

	$scope.addFeatureBtn = function() {
		$scope.selectedSoftware.addFeature();
	}

	$scope.addDependencyBtn = function() {
		$scope.selectedFeature.addDependency();
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

	$scope.selectFeature = function(index) {
		resetSubView($scope);
		$scope.selectedFeature = $scope.selectedSoftware.features.value[index].feature.value;
	}

	$scope.selectDependency = function(index) {
		//resetSubView($scope);
		$scope.selectedDependency = $scope.selectedFeature.dependencies.value[index];
	}

	function resetSubView($scope) {
		$scope.selectedCategory = undefined;
		$scope.selectedNeed = undefined;
		$scope.selectedFeature = undefined;
		$scope.selectedDependency = undefined;
	}
}]);