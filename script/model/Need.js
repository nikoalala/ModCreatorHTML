softModCreator.factory('Need', ['$translate', 'DataContainer', function ($translate, DataContainer) {
	function Need (id) {
		this.name = DataContainer.build("Name", "NEED_NAME_TRAD", "Name");
		this.name.value = "Need"+id;
	}

	Need.build = function(id) {
		return new Need(id);
	}

	Need.load = function(savedNeed) {
		var need = new Need();

		need.name.value = savedNeed.name.value;

		return need;
	}

	/**
   * Return the constructor function
   */
  return Need;
}]);