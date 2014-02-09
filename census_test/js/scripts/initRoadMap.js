
roadMouseOver = function(a){
	$('.nsStreet').html(a.properties.name);
};

roadMouseOut = function(){
	$('.nsStreet').html('');
};

initRoadMap = function(){
	svg.append('g')
		.attr('id', 'theRoadG')
		.attr('class', 'theRoadG')
		.selectAll("path")
		.data(jsonobj.roadData.features)
		.enter()
		.append("path")
		.attr("id", function(d) {return d.properties.osm_id;} )
		.attr("class", "road")
		.attr("d", path);
	
	initInvRoadMap();
};

initInvRoadMap = function(){
	svg.append('g')
		.attr('id', 'invG')
		.attr('class', 'invG')
		.selectAll("path")
		.data(jsonobj.roadData.features)
		.enter()
		.append("path")
		.attr("class", "invisibleRoad")
		.attr("name", function(d) {return d.properties.name;} )
		.attr("d", path)
		.on("mouseover", function(d) { roadMouseOver(d); })
		.on("mouseout", function() { roadMouseOut(); });
};
