softModCreator.factory('Categories', ['$translate', 'DataContainer', 'Category', 
	function ($translate, DataContainer, Category) {
	function Categories () {
		this.category = DataContainer.build("Category", "SOFT_CATEGORY_TRAD", "Category");		
	}

	Categories.build = function(id) {
		var categ = new Categories();
		categ.category.value = Category.build(id);
		return categ;
	}

	Categories.load = function(savedCateg) {
		var categ = new Categories();
		categ.category.value = Category.load(savedCateg.category.value);
		return categ;
	}

	/**
	* Return the constructor function
	*/
	return Categories;
}]);