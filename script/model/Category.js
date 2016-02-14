softModCreator.factory('Category', ['$translate', 'DataContainer', function ($translate, DataContainer) {
	function Category (id) {
		this.name = DataContainer.build("Name", "CATEG_NAME_TRAD", undefined);
		this.name.xmlAttribute = "Name";
		this.name.value = "Categ"+id;

		this.description = DataContainer.build("Description", "CATEG_DESCRIPTION_TRAD", "Description");
		this.popularity = DataContainer.build("Popularity", "CATEG_POPULARITY_TRAD", "Popularity");
		this.unlock = DataContainer.build("Unlock", "CATEG_UNLOCK_TRAD", "Unlock");
		this.retention = DataContainer.build("Retention", "CATEG_RETENTION_TRAD", "Retention");
		this.timeScale = DataContainer.build("TimeScale", "CATEG_TIMESCALE_TRAD", "TimeScale");
		this.iterative = DataContainer.build("Iterative", "CATEG_ITERATIVE_TRAD", "Iterative");
		//necessaire
		this.nameGenerator = DataContainer.build("NameGenerator", "CATEG_NAMEGEN_TRAD", "NameGenerator");
	}

	Category.build = function(id) {
		return new Category(id);
	}

	Category.load = function(savedCateg) {
		var categ = new Category();

		categ.name.value = savedCateg.name.value;

		categ.description.value = savedCateg.description.value;
		categ.unlock.value = savedCateg.unlock.value;
		categ.popularity.value = savedCateg.popularity.value;
		categ.retention.value = savedCateg.retention.value;
		categ.timeScale.value = savedCateg.timeScale.value;
		categ.iterative.value = savedCateg.iterative.value;
		categ.nameGenerator.value = savedCateg.nameGenerator.value;

		return categ;
	}

	/**
   * Return the constructor function
   */
  return Category;
}]);