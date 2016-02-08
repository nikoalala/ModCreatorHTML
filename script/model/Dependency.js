softModCreator.factory('Dependency', ['$translate', 'DataContainer', function ($translate, DataContainer) {
	function Dependency (id) {
		this.dependency = DataContainer.build("Dependency", "DEP_NAME_TRAD", "Dependency");
		this.dependency.xmlAttribute = "Software";

		this.dependency.value = "Dep"+id;
		//this.dependency.xmlAttributeValue;
	}

	Dependency.build = function(id) {
		return new Dependency(id);
	}

	Dependency.load = function(savedDep) {
		var dep = new Dependency();

		dep.dependency.value = savedDep.dependency.value;
		dep.dependency.xmlAttributeValue = savedDep.dependency.xmlAttributeValue;

		return dep;
	}

	/**
	* Return the constructor function
	*/
	return Dependency;
}]);