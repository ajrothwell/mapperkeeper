
var csvData;

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/mappages.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

processData = function(someData) {
	csvData = $.csv.toObjects(someData);
}