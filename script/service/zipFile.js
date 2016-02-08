softModCreator.factory('ZipFile', [function () {
	/**
	 * Create zip file with "modName" name and folder with that name.
	 * Call XmlGenerator to generate "Personalities.xml" and add it to the root folder
	 * Create SoftwareTypes folder and generate an XML file for each software
	 * etc with all component
	 * @param  {String} fileName File Name and Mod Name
 	 * @param  {[type]} datas    Object of datas to build and zip :
 	 * 'software', 'nameGenerator', 'companyType', 'company', 'scenario', 'personality'
	 */
	function ZipFile (fileName, datas) {
		this.zip = new JSZip();

		var rootFolder = this.zip.folder(fileName);

		software(rootFolder, datas.software);

	}

	/**
	 * Create the folder SoftwareType and put the XML and the file inside the zip
	 * @param  {[type]} zip  root folder
	 * @param  {[type]} data array of softwares
	 * 
	 */
	function software(zip, data) {
		var type = "SoftwareTypes";
		var softwareTypesFolder = zip.folder(type);

		for(var software in data) {
			if(data.hasOwnProperty(software)) {
				softwareTypesFolder.file(data[software].fileName+".xml", generateXml(data[software], type));
			}
		}
	}

	function nameGenerator(zip, data) {

	}

	function companyType(zip, data) {

	}

	function company(zip, data) {

	}

	function scenario(zip, data) {

	}

	function personality(zip, data) {

	}

	function generateXml(data, rootElement) {
		var xw = new XMLWriter('UTF-8');
		xw.formatting = 'indented'; //add indentation and newlines
		xw.indentChar = ' '; //indent with spaces
		xw.indentation = 2; //add 2 spaces per level

		xw.writeStartDocument();
		xw.writeStartElement(rootElement);

		parseObject(xw, data);
		
		xw.writeEndElement();
		xw.writeEndDocument();
		return xw.flush();
	}

	function parseObject(xw, data) {
		for(var field in data) {
			if(data.hasOwnProperty(field)) {
				var container = data[field];
				console.log(container);
				if(container.xmlName != undefined) {
					if(container.xmlAttribute != undefined){
						writeValueAttributeElement(xw, container);
					} else if(typeof container.value == "string") {
						xw.writeElementString(container.xmlName, container.value);
					} else if(typeof container.value == "boolean") {
						xw.writeElementString(container.xmlName, ""+container.value);
					} else if(container.value instanceof Array) {
						xw.writeStartElement(container.xmlName);
						for(var index in container.value) {
							parseObject(xw, container.value[index]);
						}
						xw.writeEndElement();
					} else {
						xw.writeStartElement(container.xmlName);
						
						parseObject(xw, container.value);
						
						xw.writeEndElement();
					}
				} else if(container.xmlAttribute && container.value != undefined) {
					xw.writeAttributeString( container.xmlAttribute, container.value);
				}
			}
		}
	}

	function writeValueAttributeElement(xw, container) {
		xw.writeStartElement(container.xmlName);
		xw.writeAttributeString(container.xmlAttribute, container.xmlAttributeValue);
		xw.writeString(container.value);
		xw.writeEndElement();
	}

	ZipFile.prototype.sendToClient = function (fileName) {

 		var content = this.zip.generate({type:"blob"});
        var url = URL.createObjectURL(content);

        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        a.href = url;
        a.download = fileName+".zip";
        a.click();
        window.URL.revokeObjectURL(url);
 	};
 
 	/**
 	 * Class builder
 	 * @param  {String} fileName File Name and Mod Name
 	 * @param  {[type]} datas    Object of datas to build and zip :
 	 * 'software', 'nameGenerator', 'companyType', 'company', 'scenario', 'personality'
 	 * @return {[type]}          [description]
 	 */
	ZipFile.build = function(fileName, datas) {
		return new ZipFile(fileName, datas);
	}

	/**
   * Return the constructor function
   */
  return ZipFile;
}]);

