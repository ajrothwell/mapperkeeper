
// TB stands for "textBox"
/*addTB = function(){
	$('.demoNameText').html(currentDemo.theName);
};
*/

getTract = function(a){
	return a.properties.tractce;
};

getClass = function(a){
	if (currentDemo.code != '0'){
		return quantile(parseFloat(a.properties[currentDemo.code]));
	}
	else{
		return 'none';
	}
};

getValue = function(a){
	if (currentDemo.code != '0'){
		return precise_round(a.properties[currentDemo.code], currentDemo.theDecimals);
	}
	else{
		return '';
	}
};

getDemos = function(a, aDemoName){
	return precise_round(a.properties[aDemoName], 1);
};

addMap = function(){
	svg.append('g')
		.attr('id', 'theShapeG')
		.attr('class', 'theShapeG')
		.selectAll('path')
		.data(currentFeatureName)
		.enter()
		.append('path')
		.attr('id', function(d) { return getTract(d); })
		.attr('class', function(d) { return getClass(d); })
		.attr('LR', function(d) { return d.properties.tractce; })
		.attr('HR', function(d) { return d.properties.blockce; })
		.attr('value', function(d) { return getValue(d); })
//		.attr('value', function(d) {return precise_round(d.properties[currentDemo.code], currentDemo.theDecimals); })
		.attr('White', function(d) { return getDemos(d, 'orwhite'); })
		.attr('Black', function(d) { return getDemos(d, 'orblack'); })
		.attr('Latino', function(d) {return getDemos(d, 'latino'); })
		.attr('Asian', function(d) {return getDemos(d, 'orasian'); })
		.attr('Other', function(d) {return getDemos(d, 'orother'); })
		.attr('d', path)
/*		.selectAll("path")
		.data(jsonobj.roadData.features)
		.enter()
		.append("path")
		.attr("class", "invisibleRoad")
		.attr("name", function(d) {return d.properties.name;} )
		.attr("d", path)
*/		.on('mouseover', mouseOver)
		.on('mouseout', mouseOut);
//		.on('dblclick', dblClick);

	initRoadMap();
};

addTBLRpermLabel = function(){
	$('.LR_name_label').html('Tract '+ viewRes.segNumber);
};

addTBLRhoverLabel = function(a){
	$('.LR_name_label').html('Tract ' + d3.select(a).attr('LR'));
};

addTBHRhoverLabel = function(a){
	$('.HR_name_label').html('Block ' + d3.select(a).attr('HR'));
};

addTBDemoValue = function(a){
	$('.demoValueText').html(d3.select(a).attr('value'));
};

mouseOver = function(){
	// for all modes add the demo value
	addTBDemoValue(this);
//	drawGraph(this);
	// if in "LR" mode add the tract number
	if (viewRes.mode == 'LR'){
//		addTBLRhoverLabel(this);
	}
	// else if in "zoomIn" mode add the block number
	else if (viewRes.mode == 'zoomIn'){
		addTBHRhoverLabel(this);
	}
	// else if in "HR" mode add the tract and block
	else if (viewRes.mode == 'HR'){
		addTBLRhoverLabel(this);
		addTBHRhoverLabel(this);
	};
};
	
mouseOut = function(){
	$('.HR_name_label').html('');
	$('.demoValueText').html('');
	if (viewRes.mode != 'zoomIn'){
		$('.LR_name_label').html('');
	}
//	gsvg.selectAll('g').remove();
};

/*
dblClick = function(){
	if (viewRes.mode == 'LR'){
		viewRes.segNumber = this.id;
		viewRes.mode = 'zoomIn';
		initMap();
	}
	else if (viewRes.mode == 'HR'){
		viewRes.segNumber = this.id;
		viewRes.mode = 'zoomIn';
		initMap();
	};
};
*/