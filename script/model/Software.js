softModCreator.factory('Software', ['DataContainer', 'Categories', 'Category',  
	function (DataContainer, Categories, Category) {
	function Software (id) {
		this.fileName = "";
		this.name = DataContainer.build("Name", "SOFT_NAME_TRAD", "Name");
		this.name.value = "Soft"+id;
		this.type = DataContainer.build("Type", "SOFT_TYPE_TRAD", "Category");
		this.categories = DataContainer.build("Categories", "SOFT_CATEGORY_TRAD", "Categories");
		this.categories.value = [];
	}

	Software.build = function(id) {
		return new Software(id);
	}

	Software.load = function(savedSoft) {
		var soft = new Software();

		soft.fileName = savedSoft.fileName;
		soft.name.value = savedSoft.name.value;
		soft.type.value = savedSoft.type.value;

		for(var cat in savedSoft.categories.value) {
			soft.categories.value.push(Categories.load(savedSoft.categories.value[cat]));
		}
		return soft;
	}

	Software.prototype.addCategory = function () {
     	this.categories.value.push(Categories.build(this.categories.value.length));
 	};
 

	/**
	* Return the constructor function
	*/
	return Software;
}]);