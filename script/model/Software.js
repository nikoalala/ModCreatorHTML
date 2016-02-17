softModCreator.factory('Software', ['DataContainer', 'Categories', 'Category', 'Need', 'Features', 'Feature',
	function (DataContainer, Categories, Category, Need, Features, Feature) {
	function Software (id) {
		this.fileName = "";
		this.override = DataContainer.build("Override", "SOFT_OVERRIDE_TRAD", undefined);
		this.name = DataContainer.build("Name", "SOFT_NAME_TRAD", "Name");
		this.type = DataContainer.build("Type", "SOFT_TYPE_TRAD", "Category");
		this.description = DataContainer.build("Description", "SOFT_DESCRIPTION_TRAD", "Description");
		this.random = DataContainer.build("Random", "SOFT_RANDOM_TRAD", "Random");
		this.categories = DataContainer.build("Categories", "SOFT_CATEGORY_TRAD", "Categories");
		this.delete = DataContainer.build("Delete", "SOFT_DELETE_TRAD", "Delete");
		this.osSpecific = DataContainer.build("OSSpecific", "SOFT_OSSPECIFIC_TRAD", "OSSpecific");
		this.oneClient = DataContainer.build("OneClient", "SOFT_ONECLIENT_TRAD", "OneClient");
		this.inHouse = DataContainer.build("InHouse", "SOFT_INHOUSE_TRAD", "InHouse");
		this.popularity = DataContainer.build("Popularity", "CATEG_POPULARITY_TRAD", "Popularity");
		this.unlock = DataContainer.build("Unlock", "CATEG_UNLOCK_TRAD", "Unlock");
		this.retention = DataContainer.build("Retention", "CATEG_RETENTION_TRAD", "Retention");
		this.iterative = DataContainer.build("Iterative", "CATEG_ITERATIVE_TRAD", "Iterative");
		this.nameGenerator = DataContainer.build("NameGenerator", "CATEG_NAMEGEN_TRAD", "NameGenerator");
		this.needs = DataContainer.build("Needs", "SOFT_NEEDS_TRAD", "Needs");

		this.features = DataContainer.build("Features", "SOFT_FEATURES_TRAD", "Features");
		
		
		//Default value
		this.name.value = "Soft"+id;
		this.override.xmlAttribute = "Override";
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
		soft.override.value = savedSoft.override.value;
		soft.type.value = savedSoft.type.value;
		soft.description.value = savedSoft.description.value;
		soft.random.value = savedSoft.random.value;
		soft.osSpecific.value = savedSoft.osSpecific.value;
		soft.delete.value = savedSoft.delete.value;
		soft.oneClient.value = savedSoft.oneClient.value;
		soft.inHouse.value = savedSoft.inHouse.value;
		soft.popularity.value = savedSoft.popularity.value;
		soft.unlock.value = savedSoft.unlock.value;
		soft.retention.value = savedSoft.retention.value;
		soft.iterative.value = savedSoft.iterative.value;
		soft.nameGenerator.value = savedSoft.nameGenerator.value;
		
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

	Software.prototype.removeCategory = function (index) {
     	this.categories.value.splice(index, 1);
 	};
 
 	Software.prototype.removeNeed = function (index) {
     	this.needs.value.splice(index, 1);
 	};

 	Software.prototype.removeFeature = function (index) {
     	this.features.value.splice(index, 1);
 	};

	/**
	* Return the constructor function
	*/
	return Software;
}]);