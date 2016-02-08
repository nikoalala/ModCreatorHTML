softModCreator.factory('Feature', ['$translate', 'DataContainer', 'Dependency', 
function ($translate, DataContainer, Dependency) {
	function Feature (id) {
		this.forced = DataContainer.build("Forced", "FEAT_FORCED_TRAD", undefined);
		this.from = DataContainer.build("From", "FEAT_FROM_TRAD", undefined);
		this.name = DataContainer.build("Name", "FEAT_NAME_TRAD", "Name");
		this.description = DataContainer.build("Description", "FEAT_DESCRIPTION_TRAD", "Description");
		this.devtime = DataContainer.build("DevTime", "FEAT_DEVTIME_TRAD", "DevTime");
		this.innovation = DataContainer.build("Innovation", "FEAT_INNOVATION_TRAD", "Innovation");
		this.usability = DataContainer.build("Usability", "FEAT_USABILITY_TRAD", "Usability");
		this.stability = DataContainer.build("Stability", "FEAT_STABILITY_TRAD", "Stability");
		this.codeart = DataContainer.build("CodeArt", "FEAT_CODEART_TRAD", "CodeArt");
		this.unlock = DataContainer.build("Unlock", "FEAT_UNLOCK_TRAD", "Unlock")
		this.server = DataContainer.build("Server", "FEAT_SERVER_TRAD", "Server")
		this.softwarecategory = DataContainer.build("SoftwareCategory", "FEAT_SOFTWARECATEGORY_TRAD", "SoftwareCategory")

		this.dependencies = DataContainer.build("Dependencies", "FEAT_DEPENDENCIES_TRAD", "Dependencies");
		
		this.forced.xmlAttribute = "Forced";
		this.from.xmlAttribute = "From";
		this.forced.value = false;
		this.name.value = "Feat"+id;
		this.dependencies.value = [];
	}

	Feature.build = function(id) {
		return new Feature(id);
	}

	Feature.load = function(savedFeat) {
		var feat = new Feature();

		feat.forced.value = savedFeat.forced.value;
		feat.from.value = savedFeat.from.value;
		feat.name.value = savedFeat.name.value;
		feat.description.value = savedFeat.description.value;
		feat.devtime.value = savedFeat.devtime.value;
		feat.innovation.value = savedFeat.innovation.value;
		feat.usability.value = savedFeat.usability.value;
		feat.stability.value = savedFeat.stability.value;
		feat.codeart.value = savedFeat.codeart.value;
		feat.unlock.value = savedFeat.unlock.value;
		feat.server.value = savedFeat.server.value;
		feat.softwarecategory.value = savedFeat.softwarecategory.value;

		for(var f in savedFeat.dependencies.value) {
			feat.dependencies.value.push(Dependency.load(savedFeat.dependencies.value[f]));
		}

		return feat;
	}

	Feature.prototype.addDependency = function() {
		this.dependencies.value.push(Dependency.build(this.dependencies.value.length));
	}

	/**
	* Return the constructor function
	*/
	return Feature;
}]);