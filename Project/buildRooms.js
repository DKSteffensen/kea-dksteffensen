	// Checking if rooms object i populated, if yes, then create rooms on canvas.
	gloIntRoomsCount = houses.myHouse[gloIntHouseID].rooms.length;
	if (gloIntRoomsCount > 0) {
		for (var i = 0; i < gloIntRoomsCount; i++) {
			var test = houses.myHouse[gloIntHouseID].rooms[i];
			if(houses.myHouse[gloIntHouseID].rooms[i].deleted == 0){
				var strRoomID = houses.myHouse[gloIntHouseID].rooms[i].id;
				var strRoomName = houses.myHouse[gloIntHouseID].rooms[i].name;
				buildControlPanel(strRoomName, strRoomID);	
				buildCanvas(strRoomID);	
			};
		};
		createSelectWidth();
		createSelectHeight();
		createSelectPosTop();
		createSelectPosLeft();
		createSelectZIndex();
	}
	else {
		// Remind user to add rooms to the house.
	}

	// Function to apply room size and position changes.
	function changeRoomSize (cssKey, cssValue, roomID) {
		if(cssKey == "zindex"){
			$("#room"+roomID).css("z-index", cssValue);
			houses.myHouse[gloIntHouseID].rooms[roomID].dimensions[cssKey] = cssValue;
			stringifyHouse();
		}
		else if(cssKey == "height"){
			cssValue += "px";
			$("#room"+roomID).css({
				"line-height":cssValue,
				"height":cssValue
			});
			houses.myHouse[gloIntHouseID].rooms[roomID].dimensions[cssKey] = cssValue;
			stringifyHouse();
		}
		else {
			cssValue += "px";
			$("#room"+roomID).css(cssKey, cssValue);
			houses.myHouse[gloIntHouseID].rooms[roomID].dimensions[cssKey] = cssValue;
			stringifyHouse();
		}
	};
	// Function to apply name change of the room.
	function changeRoomName (roomName, roomID) {
		$("#room"+roomID).html(roomName);
		houses.myHouse[gloIntHouseID].rooms[roomID].name = roomName;
		stringifyHouse();
	};
	// Function to delete a room.
	function deleteRoom (roomID) {
		$("#lblRoom"+roomID).fadeOut(300, function(){
			$(this).remove();
		})
		$(".room#room"+roomID).fadeOut(300, function(){
			$(this).remove();
		})
		houses.myHouse[gloIntHouseID].rooms[roomID].deleted = 1;
		stringifyHouse();
	};
	// Functions to create Select dropdowns.
	function createSelectPosTop () {
		var pxTopVal = 5;
		for (var i = 0; i < 19; i++) {
			$(".posTop").append('<option value="'+pxTopVal+'">'+[i+1]+'</option>');
			pxTopVal += 25;
		};			
	};
	function createSelectPosLeft () {
		var pxLeftVal = 5;
		for (var i = 0; i < 31; i++) {
			$(".posLeft").append('<option value="'+pxLeftVal+'">'+[i+1]+'</option>');
			pxLeftVal += 25;
		};			
	};
	function createSelectWidth () {
		var pxWidthVal = 25;
		for (var i = 0; i < 32; i++) {
			$(".sizeWidth").append('<option value="'+pxWidthVal+'">'+[i+1]+'</option>');
			pxWidthVal += 25;
		};			
	};
	function createSelectHeight () {
		var pxHeightVal = 25;
		for (var i = 0; i < 20; i++) {
			$(".sizeHeight").append('<option value="'+pxHeightVal+'">'+[i+1]+'</option>');
			pxHeightVal += 25;
		};			
	};
	function createSelectZIndex () {
		var zindexVal = 5;
		for (var i = 0; i < 3; i++) {
			$(".zIndex").append('<option value="'+zindexVal+'">'+[i+1]+'</option>');
			zindexVal += 5;
		};			
	};
	function selectSelectedVal (roomID) {
		var roomPosTop = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.top;
		var roomPosLeft = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.left;
		var roomWidth = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.width;
		var roomHeight = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.height;

		var roomZIndex = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.zindex;
		var roomPosTopParsed = parseInt(roomPosTop, 10);
		var roomPosLeftParsed = parseInt(roomPosLeft, 10);
		var roomWidthParsed = parseInt(roomWidth, 10);
		var roomHeightParsed = parseInt(roomHeight, 10);

		$(document).ready(function(){
			$("#posTopRoom"+roomID+" > option[value='"+roomPosTopParsed+"']").attr("selected", "selected");
			$("#posLeftTop"+roomID+" > option[value='"+roomPosLeftParsed+"']").attr("selected", "selected");
			$("#widthRoom"+roomID+" > option[value='"+roomWidthParsed+"']").attr("selected", "selected");
			$("#heightRoom"+roomID+" > option[value='"+roomHeightParsed+"']").attr("selected", "selected");
			$("#zIndexRoomID"+roomID+" > option[value='"+roomZIndex+"']").attr("selected", "selected");
		});
	}
	// Create dropdown end.
	// Function to add room in the JSON object.
	function addRoomJSON () {		
		var objNewRoom = {};
		var intNewRoomID = houses.myHouse[gloIntHouseID].rooms.length;
		var strNewRoomName = "Room "+intNewRoomID;
		objNewRoom.id = intNewRoomID;
		objNewRoom.name = strNewRoomName;
		objNewRoom.deleted = 0;
		objNewRoom.dimensions = {};
		objNewRoom.utilities = [];
		objNewRoom.doorsAndWindows = [];
		houses.myHouse[gloIntHouseID].rooms.push(objNewRoom);

		var pathDimensions = houses.myHouse[gloIntHouseID].rooms[intNewRoomID].dimensions;
		pathDimensions.width = "50px";
		pathDimensions.height = "50px";
		pathDimensions.top = "5px";
		pathDimensions.left = "5px";
		pathDimensions.zindex = "5";
		
		stringifyHouse();

		buildControlPanel(strNewRoomName, intNewRoomID);
		buildCanvas(intNewRoomID);
	}
	// Function that genereats html variable.
	function buildControlPanel (roomName, roomID) {
		var htmlControl = '<div class="buildRoomControl panel panel-info active" id="lblRoom'+roomID+'">';
		htmlControl += '<div class="panel-heading"><input class="lblRoomName" type="text" value="'+roomName+'" placeholder="Room name" data-roomID="'+roomID+'"></div>';
		htmlControl += '<div class="panel-body">';
		htmlControl += '<ul class="list-group">';
		htmlControl += '<li class="list-group-item list-group-item-info">';
		htmlControl += '<p><span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span> Position Top</p>';
		htmlControl += '<select id="posTopRoom'+roomID+'" class="buildChange posTop" data-roomID="'+roomID+'" data-inpCssKey="top">';
		htmlControl += '</select>';				
		htmlControl += '</li>';
		htmlControl += '<li class="list-group-item list-group-item-info">';
		htmlControl += '<p><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span> Position Left</p>';
		htmlControl += '<select id="posLeftTop'+roomID+'" class="buildChange posLeft" data-roomID="'+roomID+'" data-inpCssKey="left">';
		htmlControl += '</select>';
		htmlControl += '</li>';
		htmlControl += '<li class="list-group-item list-group-item-info">';
		htmlControl += '<p><span class="glyphicon glyphicon-resize-horizontal"></span> Width</p>';
		htmlControl += '<select id="widthRoom'+roomID+'" class="buildChange sizeWidth" data-roomID="'+roomID+'" data-inpCssKey="width">';
		htmlControl += '</select>';			
		htmlControl += '</li>';
		htmlControl += '<li class="list-group-item list-group-item-info">';
		htmlControl += '<p><span class="glyphicon glyphicon-resize-vertical"></span> Height</p>';
		htmlControl += '<select id="heightRoom'+roomID+'" class="buildChange sizeHeight" data-roomID="'+roomID+'" data-inpCssKey="height">';
		htmlControl += '</select>';
		htmlControl += '</li>';
		htmlControl += '<li class="list-group-item list-group-item-info">';
		htmlControl += '<p><span class="glyphicon glyphicon-tasks"></span> Layer Position</p>';
		htmlControl += '<select id="zIndexRoomID'+roomID+'" class="buildChange zIndex" data-roomID="'+roomID+'" data-inpCssKey="zindex">';
		htmlControl += '</select>';
		htmlControl += '</li>';
		htmlControl += '<li class="list-group-item list-group-item-info">';
		htmlControl += '<button class="btn btn-warning btnRemoveRoom" data-roomID="'+roomID+'">Remove room</button>';
		htmlControl += '</li>';
		htmlControl += '</ul>';
		htmlControl += '</div>';
		htmlControl += '</div>';

		$("#buildRoomControlWrap").prepend(htmlControl);

		selectSelectedVal(roomID);
	};
	function buildCanvas (roomID) {
		var roomName = houses.myHouse[gloIntHouseID].rooms[roomID].name;
		var roomdeleted = houses.myHouse[gloIntHouseID].rooms[roomID].deleted;
		var roomWidth = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.width;
		var roomHeight = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.height;
		var roomPosTop = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.top;
		var roomPosLeft = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.left;
		var roomZIndex = houses.myHouse[gloIntHouseID].rooms[roomID].dimensions.zindex;

		$("#buildCanvas").append('<div class="room" id="room'+roomID+'" style="width:'+roomWidth+';height:'+roomHeight+';line-height:'+roomHeight+';top:'+roomPosTop+';left:'+roomPosLeft+';z-index:'+roomZIndex+';">'+roomName+'</div>');		
	}

	// Button to change size, and position of the room.
	$(document).on("change", ".buildChange", function(){
		var strCssKey = $(this).attr("data-inpCssKey");
		var strCssValue = $(this).val();
		var strAttRoomID = $(this).attr("data-roomID");
		changeRoomSize(strCssKey, strCssValue, strAttRoomID);
	});

	// button to change name of the room.
	$(document).on("change", ".lblRoomName", function(){
		var strRoomName = $(this).val();
		var strAttRoomID = $(this).attr("data-roomID");
		changeRoomName(strRoomName, strAttRoomID);
	});

	// Button to add new rooms to canvas and array.
	$(document).on("click", "#btnNewRoom", function(){
		// Adding room to JSON, then calling the function buildControlPanel() and buildCanvas().
		// buildControlPanel() is the function that builds controlpanel for the room.
		// buildCanvas() is the function that adds the room on the canvas.
		addRoomJSON();

		createSelectWidth();
		createSelectHeight();
		createSelectPosTop();
		createSelectPosLeft();
		createSelectZIndex();

	});

	// Button to delete a room.
	$(document).on("click", ".btnRemoveRoom", function(){
		var roomID = $(this).attr("data-roomID");
		deleteRoom(roomID);
	});