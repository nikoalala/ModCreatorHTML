softModCreator.factory('Features', ['$translate', 'DataContainer', 'Feature', 
	function ($translate, DataContainer, Feature) {
	function Features () {
		this.feature = DataContainer.build("Feature", "SOFT_FEATURES_TRAD", "Feature");		
	}

	Features.build = function(id) {
		var feat = new Features();
		feat.feature.value = Feature.build(id);
		return feat;
	}

	Features.load = function(savedFeats) {
		var feat = new Features();
		feat.feature.value = Feature.load(savedFeats.feature.value);
		return feat;
	}

	Features.prototype.addDependency = function() {
		this.feature.value.addDependency();
	}

	Features.prototype.removeDependency = function(index) {
		this.feature.value.removeDependency(index);
	}
	
	/**
	* Return the constructor function
	*/
	return Features;
}]);