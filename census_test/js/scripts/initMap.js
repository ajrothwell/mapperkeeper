
function initMap(){

	if(viewRes.mode == 'LR'){
		centerWholeMapView();
		projection = d3.geo.mercator()
			.center([Coords.centerLon, Coords.centerLat])
			.scale(Coords.fScale)
			.translate([w/2-150, h/2]);
		path = d3.geo.path()
			.projection(projection);
		currentFeatureName = jsonobj.tractData.features;
	}

	else if(viewRes.mode == 'zoomIn'){
		centerZoomView();
		projection = d3.geo.mercator()
			.center([Coords.centerLon, Coords.centerLat])
			.scale(Coords.fScale)
			.translate([w/2-150, h/2]);
		path = d3.geo.path()
			.projection(projection);
		// step through the HR data and remove the objects that are not in the LR area
		jsonobj.blockData = topojson.feature(topologies.blockTopology, topologies.blockTopology.objects.phila_block_rh_geo);
		for (i=0; i<jsonobj.blockData.features.length; i++){
			if (jsonobj.blockData.features[i].properties.tractce != viewRes.segNumber){
				jsonobj.blockData.features.splice(i,1);
				i--;
			} 
		}
		currentFeatureName = jsonobj.blockData.features;
	}
	else if(viewRes.mode == 'HR'){
		centerWholeMapView();
		projection = d3.geo.mercator()
			.center([Coords.centerLon, Coords.centerLat])
			.scale(Coords.fScale)
			.translate([w/2-150, h/2]);
		path = d3.geo.path()
			.projection(projection);
		jsonobj.blockData = topojson.feature(topologies.blockTopology, topologies.blockTopology.objects.phila_block_rh_geo);
		currentFeatureName = jsonobj.blockData.features;
	}

	getDemographic();

}
