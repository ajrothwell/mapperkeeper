
demographicsSetup = function(theDemographic){
	
	// reset the demographicsArray = []
	currentDemo.demographicsArray = [];

	// do a loop that fills out an array with a demographics stat
	for (i=0; i<currentFeatureName.length; i++){
		currentDemo.demographicsArray[i] = parseFloat(currentFeatureName[i].properties[theDemographic]);
	};

	currentDemo.demographicsArray.sort(function(a,b){
		return a-b;
	});
	currentDemo.demoMin = currentDemo.demographicsArray[1];
	currentDemo.demoMax = currentDemo.demographicsArray[currentDemo.demographicsArray.length - 2];

	currentDemo.theName = demoMaps.demoNameByCode.get(theDemographic);
	currentDemo.theScaletype = demoMaps.scaletypeByCode.get(theDemographic);
	quantile.range(d3.range(9).map(function(i) { return 'q' + i + '-9_' + currentDemo.theScaletype; }));
	currentDemo.theDecimals = demoMaps.decimalsByCode.get(theDemographic);
	currentDemo.theUnits = demoMaps.unitsByCode.get(theDemographic);
	currentDemo.theScaledown1 = demoMaps.scaledown1ByCode.get(theDemographic);
	currentDemo.theScaledown2 = demoMaps.scaledown2ByCode.get(theDemographic);

	// This part sets the domain for the different scaletypes
	if (currentDemo.theScaletype == 1) {  // if using large raw whole numbers, ex. population
		quantile.domain([currentDemo.demoMin, currentDemo.demoMax/currentDemo.theScaledown1]);
	} else if (currentDemo.theScaletype == 4) {  // if you want whole numbers as divisions, ex. median age
		currentDemo.demoMinFloor = Math.floor(currentDemo.demoMin);
		currentDemo.demoMaxNew = 0;
		var i=1;
		while(currentDemo.demoMaxNew < currentDemo.demoMax) {
			currentDemo.demoMaxNew = currentDemo.demoMinFloor + i * 9;
			i++;
		};
		quantile.domain([currentDemo.demoMinFloor, currentDemo.demoMaxNew]);
	} else if (currentDemo.theScaletype == 2) { // if you are using percentages, ex. White Population %
		currentDemo.demoMinFloor = Math.floor(currentDemo.demoMin);
		currentDemo.demoMaxNew = 0;
		var i=1;
		while(currentDemo.demoMaxNew < currentDemo.demoMax) {
			currentDemo.demoMaxNew = currentDemo.demoMinFloor + i * 9;
			i++;
		}
		quantile.domain([currentDemo.demoMinFloor, currentDemo.demoMaxNew]);
	} else if (theScaletype == 3) {  // if you are comparing numbers, 0.9-1.1
		quantile.domain([0.91, 1.09]);
	}

	// this part sets the presentation of the numbers in the legend
	currentDemo.theQuantiles = quantile.quantiles();
	currentDemo.copiedQuantiles = [];

	if (currentDemo.theScaletype == 1) {  // if you are just using raw whole numbers (large)
		currentDemo.copiedQuantiles[0] = '< ' + commaSeparateNumber(currentDemo.theQuantiles[0].toFixed(currentDemo.theDecimals) + ' ' + currentDemo.theUnits);
		for(i=1; i < currentDemo.theQuantiles.length; i++) {
			currentDemo.copiedQuantiles[i] = commaSeparateNumber(currentDemo.theQuantiles[i-1].toFixed(currentDemo.theDecimals) + ' ' + currentDemo.theUnits) + ' - ' + commaSeparateNumber(currentDemo.theQuantiles[i].toFixed(currentDemo.theDecimals) + ' ' + currentDemo.theUnits);
		}
		currentDemo.copiedQuantiles[currentDemo.theQuantiles.length] = '> ' + commaSeparateNumber(currentDemo.theQuantiles[currentDemo.theQuantiles.length-1].toFixed(currentDemo.theDecimals) + ' ' + currentDemo.theUnits);
	} else if (currentDemo.theScaletype == 4) {  // if you worked it out to get whole numbers as divisions
		currentDemo.copiedQuantiles[0] = '< ' + currentDemo.theQuantiles[0].toFixed(0);
		for(i=1; i < currentDemo.theQuantiles.length; i++) {
			currentDemo.copiedQuantiles[i] = currentDemo.theQuantiles[i-1].toFixed(0) + ' - ' + currentDemo.theQuantiles[i].toFixed(0);
		}
		currentDemo.copiedQuantiles[currentDemo.theQuantiles.length] = '> ' + currentDemo.theQuantiles[currentDemo.theQuantiles.length-1].toFixed(0);
	} else if (currentDemo.theScaletype == 2) {  // cases where decimals are important
		currentDemo.copiedQuantiles[0] = '< ' + currentDemo.theQuantiles[0].toFixed(1) + '%';
		for(i=1; i < currentDemo.theQuantiles.length; i++) {
			currentDemo.copiedQuantiles[i] = currentDemo.theQuantiles[i-1].toFixed(1) + '% - ' + currentDemo.theQuantiles[i].toFixed(1) + '%';
		}
		currentDemo.copiedQuantiles[currentDemo.theQuantiles.length] = '> ' + currentDemo.theQuantiles[currentDemo.theQuantiles.length-1].toFixed(1) + '%';
	} else if (currentDemo.theScaletype == 3) {  // cases where decimals are important
		currentDemo.copiedQuantiles[0] = '< ' + theQuantiles[0].toFixed(2);
		for(i=1; i < currentDemo.theQuantiles.length; i++) {
			currentDemo.copiedQuantiles[i] = currentDemo.theQuantiles[i-1].toFixed(2) + ' - ' + currentDemo.theQuantiles[i].toFixed(2);
		}
		currentDemo.copiedQuantiles[currentDemo.theQuantiles.length] = '> ' + currentDemo.theQuantiles[currentDemo.theQuantiles.length-1].toFixed(2);
	}
	
};
