// Function to stringify JSON objects.
function stringifyHouse () {  
	var locObjhouses = JSON.stringify(houses);
	localStorage.houses = locObjhouses;
};
function updatePage () {
	loadRooms(gloIntHouseID);
	loadUtilities(gloIntHouseID);
	populateHousesDropdown();
	loadGraphs(gloIntHouseID);
}
function populateHousesDropdown () {
	$("#houseDropdown").empty();
	for (var i = 0; i < houses.myHouse.length; i++) {
		var strHouseAdress = houses.myHouse[i].address;
		var strHouseID = houses.myHouse[i].id;
		$("#houseDropdown").prepend('<li><a href="#" data-houseID="'+strHouseID+'">'+strHouseAdress+'</a></li>');
	};
	// var htmlDropDownAdress = '<li role="separator" class="divider"></li>';
	// htmlDropDownAdress += '<li><a href="#">Add new adress</a></li>';
	// $("#houseDropdown").append(htmlDropDownAdress);	
}
// Function to load rooms onto my canvas.
function loadRooms (houseID) {
	$("#showCanvas, #controlPanelControlWrap").empty();
	for (var i = 0; i < houses.myHouse[houseID].rooms.length; i++) {
		roomDeleted = houses.myHouse[houseID].rooms[i].deleted;
		if(roomDeleted == 0){
			var strRoomID = houses.myHouse[houseID].rooms[i].id;
			var strRoomName = houses.myHouse[houseID].rooms[i].name;
			var strRoomWidth = houses.myHouse[houseID].rooms[i].dimensions.width;
			var strRoomHeight = houses.myHouse[houseID].rooms[i].dimensions.height;
			var strRoomTop = houses.myHouse[houseID].rooms[i].dimensions.top;
			var strRoomLeft = houses.myHouse[houseID].rooms[i].dimensions.left;
			var strRoomZIndex = houses.myHouse[houseID].rooms[i].dimensions.zindex;

			$("#showCanvas").append('<div class="room" id="canvasRoom'+strRoomID+'" style="width:'+strRoomWidth+';height:'+strRoomHeight+';line-height:'+strRoomHeight+';top:'+strRoomTop+';left:'+strRoomLeft+';z-index:'+strRoomZIndex+';">'+strRoomName+'</div>');

			var htmlControlRoomPanel = '<div class="panel panel-success active" id="">';
			htmlControlRoomPanel += '<div class="panel-heading">'+strRoomName+'</div>';
			htmlControlRoomPanel += '<div class="panel-body">';
			htmlControlRoomPanel += '<ul class="list-group" id="controlPanelRoom'+strRoomID+'">';
			htmlControlRoomPanel += '</ul>';
			htmlControlRoomPanel += '</div>';
			htmlControlRoomPanel += '</div>';

			$("#controlPanelControlWrap").append(htmlControlRoomPanel);
		}
	};
};
function loadUtilities (houseID) {
	$("#canvasRoom, #controlPanelRoom").empty();
	for (var i = 0; i < houses.myHouse[houseID].rooms.length; i++) {
		var locRoomID = houses.myHouse[houseID].rooms[i].id;
		for (var u = 0; u < houses.myHouse[houseID].rooms[i].utilities.length; u++) {
			var locRoomUtilitiesID = houses.myHouse[houseID].rooms[i].utilities[u].id;
			var locRoomUtilitiesPosTop = houses.myHouse[houseID].rooms[i].utilities[u].position.top;
			var locRoomUtilitiesPosLeft = houses.myHouse[houseID].rooms[i].utilities[u].position.left;
			var locRoomUtilitiesIcon = houses.myHouse[houseID].rooms[i].utilities[u].icon;
			var locRoomUtilitiesState = houses.myHouse[houseID].rooms[i].utilities[u].state;
			var locRoomUtilitiesName = houses.myHouse[houseID].rooms[i].utilities[u].name;

			var utilityID = locRoomUtilitiesID;
			var roomID = locRoomID;
			var combinedIDs = locRoomID+""+utilityID;

			var htmlControlSwitchesOn = '<li class="list-group-item list-group-item-success">';
			htmlControlSwitchesOn += '<p><span class="'+locRoomUtilitiesIcon+'" aria-hidden="true"></span> '+locRoomUtilitiesName+'</p>';
			htmlControlSwitchesOn += '<input type="checkbox" name="utilitySwitchCheckbox" class="utilitySwitchCheckbox" data-utilityID="'+utilityID+'" data-roomID="'+roomID+'" checked>';
			htmlControlSwitchesOn += '</li>';

			var htmlControlSwitchesOff = '<li class="list-group-item list-group-item-success">';
			htmlControlSwitchesOff += '<p><span class="'+locRoomUtilitiesIcon+'" aria-hidden="true"></span> '+locRoomUtilitiesName+'</p>';
			htmlControlSwitchesOff += '<input type="checkbox" name="utilitySwitchCheckbox" class="utilitySwitchCheckbox" data-utilityID="'+utilityID+'" data-roomID="'+roomID+'">';
			htmlControlSwitchesOff += '</li>';

			if(locRoomUtilitiesState == "on"){
				switch(houses.myHouse[houseID].rooms[i].utilities[u].type){
					case 'electricity':
						var utilityClass = "utilityElectricityOn";
					break;
					case 'water':
						var utilityClass = "utilityWaterOn";
					break;
				}
				$("#canvasRoom"+locRoomID).append('<div id="utility'+combinedIDs+'" class="utility '+utilityClass+'" style="top:'+locRoomUtilitiesPosTop+';left:'+locRoomUtilitiesPosLeft+';"><span class="'+locRoomUtilitiesIcon+'" aria-hidden="true"></span></div>');
				$("#controlPanelRoom"+locRoomID).append(htmlControlSwitchesOn);
			}
			else {
				$("#canvasRoom"+locRoomID).append('<div id="utility'+combinedIDs+'" class="utility" style="top:'+locRoomUtilitiesPosTop+';left:'+locRoomUtilitiesPosLeft+';"><span class="'+locRoomUtilitiesIcon+'" aria-hidden="true"></span></div>');
				$("#controlPanelRoom"+locRoomID).append(htmlControlSwitchesOff);
			}

		};
	};

			$.fn.bootstrapSwitch.defaults.size = 'mini';
			$.fn.bootstrapSwitch.defaults.onColor = 'success';

			$(".utilitySwitchCheckbox").bootstrapSwitch();
}
function loadGraphs (HouseID) {

	var totalWaterUsage = 0;
	var totalElectricityUsage = 0;
	var currentWaterUsage = 0;
	var currentElectricityUsage = 0;

	for (var i = 0; i < houses.myHouse[HouseID].rooms.length; i++) {
		for (var u = 0; u < houses.myHouse[HouseID].rooms[i].utilities.length; u++) {
			switch(houses.myHouse[HouseID].rooms[i].utilities[u].type) {
				case 'electricity':
				var locElectricityConsumption = houses.myHouse[HouseID].rooms[i].utilities[u].consumption;
				totalElectricityUsage += Number(locElectricityConsumption);
				break;

				case 'water':
				var locWaterConsumption = houses.myHouse[HouseID].rooms[i].utilities[u].consumption;
				totalWaterUsage += Number(locWaterConsumption);
				break;
			}
		};
	}

	for (var i = 0; i < houses.myHouse[HouseID].rooms.length; i++) {
		for (var u = 0; u < houses.myHouse[HouseID].rooms[i].utilities.length; u++) {

			var utilityState = houses.myHouse[HouseID].rooms[i].utilities[u].state;
			if(utilityState == "on"){
				switch(houses.myHouse[HouseID].rooms[i].utilities[u].type) {
					case 'electricity':
					var locConsumption = houses.myHouse[HouseID].rooms[i].utilities[u].consumption;
					currentElectricityUsage += Number(locConsumption);
					break;

					case 'water':
					var locConsumption = houses.myHouse[HouseID].rooms[i].utilities[u].consumption;
					currentWaterUsage += Number(locConsumption);
					break;
				}				
			}
		};
	}

	var htmlGraphElectricity = '<li class="graphsRows">';
	htmlGraphElectricity += '<div class="controlPanelGraphs" id="myStat4" data-dimension="200" data-text="'+currentElectricityUsage+' kWh" data-info="Electricity Usage" data-width="20" data-fontsize="20" data-percent="46" data-fgcolor="#3c763d" data-bgcolor="#dff0d8" data-total="'+totalElectricityUsage+'" data-part="'+currentElectricityUsage+'" data-border="inline" data-icon="users" data-icon-size="28" data-icon-color="#ccc"></div>';
	htmlGraphElectricity += '</li>';

	var htmlGraphWater = '<li class="graphsRows">';
	htmlGraphWater += '<div class="controlPanelGraphs" id="myStat4" data-dimension="200" data-text="'+currentWaterUsage+' m3" data-info="Water Usage" data-width="20" data-fontsize="20" data-percent="46" data-fgcolor="#31708f" data-bgcolor="#d9edf7" data-total="'+totalWaterUsage+'" data-part="'+currentWaterUsage+'" data-border="inline" data-icon="users" data-icon-size="28" data-icon-color="#ccc"></div>';
	htmlGraphWater += '</li>';

	var currentConsumption = Number(currentElectricityUsage) + Number(currentWaterUsage);
	var totalConsumption = Number(totalElectricityUsage) + Number(totalWaterUsage);

	var dailyCostPercentage = currentConsumption / totalConsumption * 100;

	var dailyCostCalc = currentConsumption / 100;

	var htmlGraphCostCalc = '<li>';
	htmlGraphCostCalc += '<div class="progress">';
	htmlGraphCostCalc += '<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="'+dailyCostPercentage+'" aria-valuemin="0" aria-valuemax="100" style="width: '+dailyCostPercentage+'%">';
	htmlGraphCostCalc += '<span class="">'+dailyCostCalc+' kroner / day</span>';
	htmlGraphCostCalc += '</div>';
	htmlGraphCostCalc += '</div>';
	htmlGraphCostCalc += '</li>';

	$("#controlPanelGraphsWrap").empty();
	$("#controlPanelGraphsWrap").prepend(htmlGraphElectricity+htmlGraphWater+htmlGraphCostCalc);

    $('.controlPanelGraphs').circliful();


}