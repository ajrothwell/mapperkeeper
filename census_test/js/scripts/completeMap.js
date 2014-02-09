
//function completeMap(theDemographic) {
function completeMap() {
	demographicsSetup(currentDemo.code);
	// Clear the SVG entirely, all at once
//	svg.selectAll('g').remove();
	// create the text box, and add the Universe Name and (possibly blank) Demo Name
/*	addTB();
	// if in "LR" mode, add the "switchToHR" button
	if(viewRes.mode == 'LR'){
		addSwitchToHRButton();
		$('.LR_name_label').html('');
	}
	// else if in "HR" mode add the "switchtoLR" button
	else if(viewRes.mode == 'HR'){
		addSwitchToLRButton();
	}
	// else if in "zoomIn" mode, add the "back" button
	else if(viewRes.mode == 'zoomIn'){
		addBackToLRButton();
		addTBLRpermLabel();
	};
*/
	addMap();
	// if the demographic is set to anything at all:
/*	if (currentDemo.code != 'noselection') { 
		drawLegend();
	};			
*/
}
