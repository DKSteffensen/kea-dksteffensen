// Function to stringify JSON objects.
function stringifyHouse () {  
	var locObjhouses = JSON.stringify(houses);
	localStorage.houses = locObjhouses;
};
// Function to load rooms onto my canvas.
function loadRooms (houseID) {
	for (var i = 0; i < houses.myHouse[houseID].rooms.length; i++) {
		roomState = houses.myHouse[houseID].rooms[i].state;
		if(roomState == 1){
			var strRoomID = houses.myHouse[houseID].rooms[i].id;
			var strRoomName = houses.myHouse[houseID].rooms[i].name;
			var strRoomWidth = houses.myHouse[houseID].rooms[i].dimensions.width;
			var strRoomHeight = houses.myHouse[houseID].rooms[i].dimensions.height;
			var strRoomTop = houses.myHouse[houseID].rooms[i].dimensions.top;
			var strRoomLeft = houses.myHouse[houseID].rooms[i].dimensions.left;
			var strRoomZIndex = houses.myHouse[houseID].rooms[i].dimensions.zindex;

			$("#buildCanvas").append('<div class="room" id="room'+strRoomID+'" style="width:'+strRoomWidth+';height:'+strRoomHeight+';top:'+strRoomTop+';left:'+strRoomLeft+';z-index:'+strRoomZIndex+';">'+strRoomName+'</div>');
		}
	};
};