softModCreator.controller('softIncCtrl', ['$scope', '$location', '$localStorage', 'Software', 'ZipFile', 
	function($scope, $location, $localStorage, Software, ZipFile) {
	$scope.modName = {value: "Mod name"};
	$scope.software = [];
	$scope.nameGenerator = [];
	$scope.companyType = [];
	$scope.company = [];
	$scope.scenario = [];
	$scope.personality = [];



	$scope.addSoftwareBtn = function() {
		$scope.software.push(Software.build($scope.software.length));
		$location.path("/software/"+($scope.software.length-1)).replace();
	}

	$scope.generateXmlBtn = function() {
		var obj = {'software': $scope.software, 'nameGenerator': $scope.nameGenerator, 'companyType': $scope.companyType, 'company': $scope.company, 'scenario': $scope.scenario, 'personality': $scope.personality};
		
		console.log("generate XML");

		var zip = ZipFile.build($scope.modName.value, obj);
		zip.sendToClient($scope.modName.value);
	}

	$scope.save = function() {
		$localStorage.modName = $scope.modName;
		$localStorage.software = $scope.software;
		$localStorage.nameGenerator = $scope.nameGenerator;
		$localStorage.companyType = $scope.companyType;
		$localStorage.company = $scope.company;
		$localStorage.scenario = $scope.scenario;
		$localStorage.personality = $scope.personality;
	}

	$scope.load = function() {
		if($localStorage.modName != undefined) {
			$scope.modName = $localStorage.modName;
			
			for(var soft in $localStorage.software) {
				$scope.software.push(Software.load($localStorage.software[soft]));
			}
			
			$scope.nameGenerator = $localStorage.nameGenerator;
			$scope.companyType = $localStorage.companyType;
			$scope.company = $localStorage.company;
			$scope.scenario = $localStorage.scenario;
			$scope.personality = $localStorage.personality;
		}
	}

	$scope.load();
	$scope.save();

}]);








