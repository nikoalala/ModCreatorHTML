softModCreator.factory('DataContainer', function () {
	function DataContainer (name, description, xmlName) {
		this.name = name;
		this.value = undefined;
		this.description = description;
		this.xmlName = xmlName;
		this.xmlAttribute = undefined;
		this.xmlAttributeValue = undefined;
	}

	DataContainer.build = function(name, description, xmlName) {
		return new DataContainer(name, description, xmlName);
	}

	/**
   * Return the constructor function
   */
  return DataContainer;
});










