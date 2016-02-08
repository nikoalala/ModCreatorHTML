softModCreator.factory('Software', ['DataContainer', 'Categories', 'Category', 'Need', 'Features', 'Feature',
	function (DataContainer, Categories, Category, Need, Features, Feature) {
	function Software (id) {
		this.fileName = "";
		this.name = DataContainer.build("Name", "SOFT_NAME_TRAD", "Name");
		this.type = DataContainer.build("Type", "SOFT_TYPE_TRAD", "Category");
		this.description = DataContainer.build("Description", "SOFT_DESCRIPTION_TRAD", "Description");
		this.random = DataContainer.build("Random", "SOFT_RANDOM_TRAD", "Random");
		this.osSpecific = DataContainer.build("OSSpecific", "SOFT_OSSPECIFIC_TRAD", "OSSpecific");
		this.oneClient = DataContainer.build("OneClient", "SOFT_ONECLIENT_TRAD", "OneClient");
		this.inHouse = DataContainer.build("InHouse", "SOFT_INHOUSE_TRAD", "InHouse");
		this.categories = DataContainer.build("Categories", "SOFT_CATEGORY_TRAD", "Categories");
		this.needs = DataContainer.build("Needs", "SOFT_NEEDS_TRAD", "Needs");
		this.features = DataContainer.build("Features", "SOFT_FEATURES_TRAD", "Features");

		//Default value
		this.name.value = "Soft"+id;
		this.osSpecific.value = false;
		this.oneClient.value = false;
		this.inHouse.value = false;
		this.categories.value = [];
		this.needs.value = [];
		this.features.value = [];

	}

	Software.build = function(id) {
		return new Software(id);
	}

	Software.load = function(savedSoft) {
		var soft = new Software();

		soft.fileName = savedSoft.fileName;
		soft.name.value = savedSoft.name.value;
		soft.type.value = savedSoft.type.value;
		soft.description = savedSoft.description;
		soft.random = savedSoft.random;
		soft.osSpecific = savedSoft.osSpecific;
		soft.oneClient = savedSoft.oneClient;
		soft.inHouse = savedSoft.inHouse;
		
		for(var cat in savedSoft.categories.value) {
			soft.categories.value.push(Categories.load(savedSoft.categories.value[cat]));
		}

		for(var need in savedSoft.needs.value) {
			soft.needs.value.push(Need.load(savedSoft.needs.value[need]));
		}

		for(var feat in savedSoft.features.value) {
			soft.features.value.push(Features.load(savedSoft.features.value[feat]));
		}

		return soft;
	}

	Software.prototype.addCategory = function () {
     	this.categories.value.push(Categories.build(this.categories.value.length));
 	};
 
 	Software.prototype.addNeed = function () {
     	this.needs.value.push(Need.build(this.needs.value.length));
 	};

 	Software.prototype.addFeature = function () {
     	this.features.value.push(Features.build(this.features.value.length));
 	};

	/**
	* Return the constructor function
	*/
	return Software;
}]);