// Functions to create Select dropdowns.
function createPositionUtility () {
	var pxTopVal = 5;
	for (var i = 0; i < 19; i++) {
		$(".addUtilitySelect").append('<option value="'+pxTopVal+'">'+pxTopVal+'%</option>');
		pxTopVal += 5;
	};			
};
// Function to delete a Utility.
function deleteUtility (houseID, roomID, utilityID) {
	var combinedIDs = roomID+""+utilityID;
	$(".utility"+combinedIDs).fadeOut(300, function(){
		$(this).remove();
	})
	$(".ulUtility"+combinedIDs).fadeOut(300, function(){
		$(this).remove();
	})
	houses.myHouse[houseID].rooms[roomID].utilities[utilityID].deleted = 1;
	stringifyHouse();
};
// Button to delete a Utility.
$(document).on("click", ".btnRemoveUtility", function(){
	var utilityID = $(this).attr("data-utilityID");
	var roomID = $(this).attr("data-roomID");

	deleteUtility(gloIntHouseID, roomID, utilityID);
});

// Function to apply Utility size and position changes.
function changeUtilityPosition (cssKey, cssValue, houseID, roomID, utilityID) {
	cssValue += "%";

	var utilityIDcombined = roomID+""+utilityID;

	$(".utility"+utilityIDcombined).css(cssKey, cssValue);
	houses.myHouse[houseID].rooms[roomID].utilities[utilityID].position[cssKey] = cssValue;
	stringifyHouse();
};
function changeUtilityName (objKey, objValue, houseID, roomID, utilityID) {

	var utilityIDcombined = roomID+""+utilityID;

	switch(objKey){		
		case 'name':
			houses.myHouse[houseID].rooms[roomID].utilities[utilityID][objKey] = objValue;			
		break;		
		case 'icon':
			houses.myHouse[houseID].rooms[roomID].utilities[utilityID][objKey] = objValue;
			$(".utility"+utilityIDcombined).empty();
			$(".utility"+utilityIDcombined).html('<i class="fa '+objValue+'" aria-hidden="true"></i>');

		break;		
		case 'type':
			if(objValue == "water"){
				var utilityState = houses.myHouse[houseID].rooms[roomID].utilities[utilityID].state;
				if(utilityState == "on"){
					$(".utility"+utilityIDcombined).removeClass("utilityElectricityOn").addClass("utilityWaterOn");
				}
			}
			else if (objValue == "electricity"){
				var utilityState = houses.myHouse[houseID].rooms[roomID].utilities[utilityID].state;
				if(utilityState == "on"){
					$(".utility"+utilityIDcombined).removeClass("utilityWaterOn").addClass("utilityElectricityOn");
				}				
			};
			houses.myHouse[houseID].rooms[roomID].utilities[utilityID][objKey] = objValue;
		break;		
		case 'consumption':
			houses.myHouse[houseID].rooms[roomID].utilities[utilityID][objKey] = objValue;
		break;
	}

	stringifyHouse();
}

function selectSelectedValUtility (houseID, roomID) {

	for (i = 0; i < houses.myHouse[houseID].rooms[roomID].utilities.length; i++){
		var utilityID = houses.myHouse[houseID].rooms[roomID].utilities[i].id;

		var utilityPosTop = houses.myHouse[houseID].rooms[roomID].utilities[i].position.top;
		var utilityPosLeft = houses.myHouse[houseID].rooms[roomID].utilities[i].position.left;

		var utilityType = houses.myHouse[houseID].rooms[roomID].utilities[i].type;

		var utilityPosTopParsed = parseInt(utilityPosTop, 10);
		var utilityPosLeftParsed = parseInt(utilityPosLeft, 10);

		$(document).ready(function(){
			$("#posTopUtility"+utilityID+" > option[value='"+utilityPosTopParsed+"']").attr("selected", "selected");
			$("#posLeftUtility"+utilityID+" > option[value='"+utilityPosLeftParsed+"']").attr("selected", "selected");
			$("#utilityConsumptionID"+utilityID+" > option[value='"+utilityType+"']").attr("selected", "selected");
		});
	}
}

function addUtility (houseID, roomID) {

		var objNewUtility = {};
		var intNewUtilityID = houses.myHouse[houseID].rooms[roomID].utilities.length;

		var strNewUtilityName = "Utility "+intNewUtilityID;
		objNewUtility.id = intNewUtilityID;
		objNewUtility.name = strNewUtilityName;
		objNewUtility.deleted = 0;
		objNewUtility.type = "electricity";
		objNewUtility.consumption = "0";
		objNewUtility.state = "off";
		objNewUtility.icon = "fa-circle-o";
		objNewUtility.position = {};
		houses.myHouse[houseID].rooms[roomID].utilities.push(objNewUtility);

		var pathPosition = houses.myHouse[houseID].rooms[roomID].utilities[intNewUtilityID].position;
		pathPosition.top = "10%";
		pathPosition.left = "10%";
		
		stringifyHouse();

		createUtilityControls(houseID, roomID);		
		createPositionUtility();
		selectSelectedValUtility(gloIntHouseID, roomID);
		addNewUtilityCanvas(houseID, roomID, intNewUtilityID);

}

function addNewUtilityCanvas (houseID, roomID, utilityID) {
	
	var locRoomUtilitiesState = houses.myHouse[houseID].rooms[roomID].utilities[utilityID].state;
	var combinedIDs = roomID+""+utilityID;

	var locRoomUtilitiesPosTop = houses.myHouse[houseID].rooms[roomID].utilities[utilityID].position.top;
	var locRoomUtilitiesPosLeft = houses.myHouse[houseID].rooms[roomID].utilities[utilityID].position.left;
	var locRoomUtilitiesIcon = houses.myHouse[houseID].rooms[roomID].utilities[utilityID].icon;

	if(locRoomUtilitiesState == "on"){
		switch(houses.myHouse[houseID].rooms[i].utilities[u].type){

			case 'electricity':
			var utilityClass = "utilityElectricityOn";
			break;

			case 'water':
			var utilityClass = "utilityWaterOn";
			break;

		}

	$(".housePlan"+roomID).append('<div class="utility'+combinedIDs+' utility '+utilityClass+'" style="top:'+locRoomUtilitiesPosTop+';left:'+locRoomUtilitiesPosLeft+';"><i class="fa '+locRoomUtilitiesIcon+'" aria-hidden="true"></i></div>');
	}

	else {
	$(".housePlan"+roomID).append('<div class="utility'+combinedIDs+' utility" style="top:'+locRoomUtilitiesPosTop+';left:'+locRoomUtilitiesPosLeft+';"><i class="fa '+locRoomUtilitiesIcon+'" aria-hidden="true"></i></div>');
	}

}

function createUtilityControls (houseID, roomID) {

	var roomName = houses.myHouse[houseID].rooms[roomID].name;
	$("#lblUtilityRoomName").html(roomName);

	$("#utilityControlListWrap").empty();

	for (var i = 0; i < houses.myHouse[houseID].rooms[roomID].utilities.length; i++) {
		var utilityID = houses.myHouse[houseID].rooms[roomID].utilities[i].id;
		var utilityName = houses.myHouse[houseID].rooms[roomID].utilities[i].name;
		var utilityIcon = houses.myHouse[houseID].rooms[roomID].utilities[i].icon;
		var utilityType = houses.myHouse[houseID].rooms[roomID].utilities[i].type;
		var utilityconsumption = houses.myHouse[houseID].rooms[roomID].utilities[i].consumption;
		var utilityPosTop = houses.myHouse[houseID].rooms[roomID].utilities[i].position.top;
		var utilityPosLeft = houses.myHouse[houseID].rooms[roomID].utilities[i].position.left;

		var combinedIDs = roomID+""+utilityID;

		var htmlUtilityControl = '<ul class="list-group ulUtility'+combinedIDs+'">';
		htmlUtilityControl += '<li class="list-group-item list-group-item-warning ">';
		htmlUtilityControl += '<p class="addUtilityPara">';
		htmlUtilityControl += '<span><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Name</span>';
		htmlUtilityControl += '<span>Icon <span class="glyphicon glyphicon-star" aria-hidden="true"></span></span>';
		htmlUtilityControl += '</p>';
		htmlUtilityControl += '<div class="addUtilityLI">';
		htmlUtilityControl += '<input type="text" class="addUtilityInput utilityInfo" placeholder="Utility Name" value="'+utilityName+'" data-objKey="name" data-roomID="'+roomID+'" data-utilityID="'+utilityID+'" />';
		htmlUtilityControl += '<input type="text" class="addUtilityInput utilityInfo" placeholder="Font-Awesome Icon"  value="'+utilityIcon+'" data-objKey="icon" data-roomID="'+roomID+'" data-utilityID="'+utilityID+'" />';
		htmlUtilityControl += '</div>';
		htmlUtilityControl += '</li>';
		htmlUtilityControl += '<li class="list-group-item list-group-item-warning">';
		htmlUtilityControl += '<p class="addUtilityPara">';
		htmlUtilityControl += '<span><span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span> Consumption Type</span>';
		htmlUtilityControl += '<span>Consumption <span class="glyphicon glyphicon-leaf" aria-hidden="true"></span></span>';
		htmlUtilityControl += '</p>';
		htmlUtilityControl += '<div class="addUtilityLI">';
		htmlUtilityControl += '<select id="utilityConsumptionID'+utilityID+'" class="addUtilityTypeSelect utilityInfo" name="" data-objKey="type" data-roomID="'+roomID+'"  data-utilityID="'+utilityID+'">';
		htmlUtilityControl += '<option value="electricity">Electricity</option>';
		htmlUtilityControl += '<option value="water">Water</option>';
		htmlUtilityControl += '</select>';
		htmlUtilityControl += '<input type="number" class="addUtilityInput utilityInfo" placeholder="Consumption"  value="'+utilityconsumption+'" data-objKey="consumption" data-roomID="'+roomID+'" data-utilityID="'+utilityID+'" />';
		htmlUtilityControl += '</div>';
		htmlUtilityControl += '</li>';
		htmlUtilityControl += '<li class="list-group-item list-group-item-warning">';
		htmlUtilityControl += '<p class="addUtilityPara">';
		htmlUtilityControl += '<span><span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span> Position Top</span>';
		htmlUtilityControl += '<span>Position Left <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></span>';
		htmlUtilityControl += '</p>';
		htmlUtilityControl += '<div class="addUtilityLI">';
		htmlUtilityControl += '<select id="posTopUtility'+utilityID+'" class="addUtilitySelect utilityPosition" data-roomID="'+roomID+'" data-utilityID="'+utilityID+'" data-inpCssKey="top">';
		htmlUtilityControl += '</select>';
		htmlUtilityControl += '<select id="posLeftUtility'+utilityID+'" class="addUtilitySelect utilityPosition" data-roomID="'+roomID+'" data-utilityID="'+utilityID+'" data-inpCssKey="left">';
		htmlUtilityControl += '</select>';
		htmlUtilityControl += '</div>';
		htmlUtilityControl += '</li>';
		htmlUtilityControl += '<li class="list-group-item list-group-item-warning">';
		htmlUtilityControl += '<button class="btn btn-danger btnRemoveUtility" data-utilityID="'+utilityID+'" data-roomID="'+roomID+'">Remove Utility</button>';
		htmlUtilityControl += '</li>';
		htmlUtilityControl += '</ul>';

		$("#utilityControlListWrap").prepend(htmlUtilityControl);
	};
}

$(document).on("click", ".addUtilityChooseRoom", function(){

	var roomID = $(this).attr("data-roomid");

	$(".roomSelect").not($(".housePlan"+roomID)).css("opacity", "0.1");
	$(".housePlan"+roomID).css("opacity", "1.0");

	localStorage.addUtilityChooseRoom = roomID;

	createUtilityControls(gloIntHouseID, roomID);
		
	createPositionUtility();

	selectSelectedValUtility(gloIntHouseID, roomID);

});

// Button to change size, and position of the room.
$(document).on("change", ".utilityPosition", function(){
	var strCssKey = $(this).attr("data-inpCssKey");
	var strCssValue = $(this).val();
	var strAttRoomID = $(this).attr("data-roomID");
	var strAttUtilityID = $(this).attr("data-utilityID");
	changeUtilityPosition(strCssKey, strCssValue, gloIntHouseID, strAttRoomID, strAttUtilityID);
});

$("#btnAddUtility").click(function(){
	var roomID = localStorage.addUtilityChooseRoom;
	if(roomID == "null"){		
		$("#lblUtilityRoomName").html("You need to choose a room.");
	}
	else{
		addUtility(gloIntHouseID, roomID);		
	}
});

$(document).on("change", ".utilityInfo", function(){
	var objKey = $(this).attr("data-objKey");
	var objValue = $(this).val();
	var strAttRoomID = $(this).attr("data-roomID");
	var strAttUtilityID = $(this).attr("data-utilityID");

	changeUtilityName(objKey, objValue, gloIntHouseID, strAttRoomID, strAttUtilityID);
});