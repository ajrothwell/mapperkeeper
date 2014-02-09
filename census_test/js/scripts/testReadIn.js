
//var jsonobj = {};

function readIn(){

	d3.json("topojson/tract002802roads_topo.json", function(roadTopology) {
		topologies.roadTopology = roadTopology;
		jsonobj.roadData = topojson.feature(roadTopology, roadTopology.objects.tract002802roads_geo);
//		initRoadMap();
	});

	d3.json('topojson/phila_tract_rh_topo.json', function(tractTopology){
		topologies.tractTopology = tractTopology;
		jsonobj.tractData = topojson.feature(tractTopology, tractTopology.objects.phila_tract_rh_geo);
//		setTimeout(completeMap, 1000);
	});

	d3.json('topojson/phila_block_rh_topo.json', function(blockTopology){
		topologies.blockTopology = blockTopology;
		jsonobj.blockData = topojson.feature(blockTopology, blockTopology.objects.phila_block_rh_geo);
		for (i=0; i<jsonobj.blockData.features.length; i++){
			if (jsonobj.blockData.features[i].properties.tractce != '002802'){
				jsonobj.blockData.features.splice(i,1);
				i--;
			} 
		}
		currentFeatureName = jsonobj.blockData.features;
		currentDemo.code = 'orwhite';
		setTimeout(completeMap, 1000);
	});

	d3.csv('keyBase/DemoKey.csv', function(demoKey) {
		for (i=0; i<demoKey.length; i++) {
			demoMaps.demoNameByCode.set(demoKey[i].code, demoKey[i].demographic);
			demoMaps.scaletypeByCode.set(demoKey[i].code, demoKey[i].scaletype);
			demoMaps.decimalsByCode.set(demoKey[i].code, demoKey[i].decimals);
			demoMaps.unitsByCode.set(demoKey[i].code, demoKey[i].units);
			demoMaps.scaledown1ByCode.set(demoKey[i].code, demoKey[i].scaledown1);
			demoMaps.scaledown2ByCode.set(demoKey[i].code, demoKey[i].scaledown2);
		}
	});
};

