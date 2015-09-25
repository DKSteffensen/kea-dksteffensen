// Function to stringify JSON objects.
function stringifyHouse () {  
	var locObjhouses = JSON.stringify(houses);
	localStorage.houses = locObjhouses;
};
// Function to load rooms onto my canvas.
function loadRooms (houseID) {
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

			$("#showCanvas").append('<div class="room" id="cpRoom'+strRoomID+'" style="width:'+strRoomWidth+';height:'+strRoomHeight+';line-height:'+strRoomHeight+';top:'+strRoomTop+';left:'+strRoomLeft+';z-index:'+strRoomZIndex+';">'+strRoomName+'</div>');
		}
	};
};
function loadUtilities (houseID) {
	for (var i = 0; i < houses.myHouse[houseID].rooms.length; i++) {
		var locRoomID = houses.myHouse[houseID].rooms[i].id;
		// console.log("Room id "+locRoomID);
		for (var u = 0; u < houses.myHouse[houseID].rooms[i].utilities.length; u++) {
			var locRoomUtilitiesID = houses.myHouse[houseID].rooms[i].utilities[u].id;
			var locRoomUtilitiesPosTop = houses.myHouse[houseID].rooms[i].utilities[u].position.top;
			var locRoomUtilitiesPosLeft = houses.myHouse[houseID].rooms[i].utilities[u].position.left;
			var locRoomUtilitiesIcon = houses.myHouse[houseID].rooms[i].utilities[u].icon;

			$("#cpRoom"+locRoomID).append('<div class="utility" style="top:'+locRoomUtilitiesPosTop+';left:'+locRoomUtilitiesPosLeft+';"><span class="'+locRoomUtilitiesIcon+'" aria-hidden="true"></span></div>');
			console.log("Utilities id "+locRoomUtilitiesID + " " + locRoomUtilitiesPosTop);
		};
	};
}

