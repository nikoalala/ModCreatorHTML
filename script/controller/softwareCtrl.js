softModCreator.controller('softwareCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.softIndex = $routeParams.softIndex;
	$scope.selectedSoftware = $scope.software[$scope.softIndex];

	$scope.categories = [];

	$scope.selectedCategory = undefined;
	$scope.selectedNeed = undefined;
	$scope.selectedFeature = undefined;
	$scope.selectedDependency = undefined;

	$scope.selectedCategoryIndex = undefined;
	$scope.selectedNeedIndex = undefined;
	$scope.selectedFeatureIndex = undefined;
	$scope.selectedDependencyIndex = undefined;

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

	$scope.removeCategoryBtn = function() {
		$scope.selectedSoftware.removeCategory($scope.selectedCategoryIndex);
		resetSubView($scope);
	}

	$scope.removeNeedBtn = function() {
		$scope.selectedSoftware.removeNeed($scope.selectedNeedIndex);
		resetSubView($scope);
	}

	$scope.removeFeatureBtn = function() {
		$scope.selectedSoftware.removeFeature($scope.selectedFeatureIndex);
		resetSubView($scope);
	}

	$scope.removeDependencyBtn = function() {
		$scope.selectedFeature.removeDependency($scope.selectedDependencyIndex);
		$scope.selectedDependency = undefined;
		$scope.selectedDependencyIndex = undefined;
	}

	$scope.validBtn = function() {
		resetSubView($scope);
	}

	$scope.selectCategory = function(index) {
		resetSubView($scope);
		$scope.selectedCategory = $scope.selectedSoftware.categories.value[index].category.value;
		$scope.selectedCategoryIndex = index;
	}

	$scope.selectNeed = function(index) {
		resetSubView($scope);
		$scope.selectedNeed = $scope.selectedSoftware.needs.value[index];
		$scope.selectedNeedIndex = index;
	}

	$scope.selectFeature = function(index) {
		resetSubView($scope);
		$scope.selectedFeature = $scope.selectedSoftware.features.value[index].feature.value;
		$scope.selectedFeatureIndex = index;
	}

	$scope.selectDependency = function(index) {
		//resetSubView($scope);
		$scope.selectedDependency = $scope.selectedFeature.dependencies.value[index];
		$scope.selectedDependencyIndex = index;
	}

	function resetSubView($scope) {
		$scope.selectedCategory = undefined;
		$scope.selectedNeed = undefined;
		$scope.selectedFeature = undefined;
		$scope.selectedDependency = undefined;

		$scope.selectedCategoryIndex = undefined;
		$scope.selectedNeedIndex = undefined;
		$scope.selectedFeatureIndex = undefined;
		$scope.selectedDependencyIndex = undefined;
	}
}]);