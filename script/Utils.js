/**
 * Sauvegarde les données.
 * @type {[type]}
 */
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

        var zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
        var content = zip.generate({type:"blob"});
        var url = URL.createObjectURL(content);

        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        a.href = url;
        a.download = "essai.zip";
        a.click();
        window.URL.revokeObjectURL(url);