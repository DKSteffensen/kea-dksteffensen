var house = {
	"name":"Daniels House",
	"address":"Stenstuegade 38 2.TH.",
	"rooms":[
		{
			"id":1,
			"name":"Kitchen",
			"width":"175px",
			"height":"175px",
			"top":"0px",
			"left":"0px",
			"lightState":"off",
		},
		{
			"id":2,
			"name":"Entrance",
			"width":"275px",
			"height":"50px",
			"top":"175px",
			"left":"0px",
			"lightState":"off",
		},
		{
			"id":3,
			"name":"LivingRoom",
			"width":"325px",
			"height":"225px",
			"top":"225px",
			"left":"50px",
			"lightState":"off",
		},
		{
			"id":4,
			"name":"Bedroom",
			"width":"200px",
			"height":"175px",
			"top":"0px",
			"left":"175px",
			"lightState":"off",
		},
		{
			"id":5,
			"name":"Bathroom",
			"width":"100px",
			"height":"100px",
			"top":"125px",
			"left":"275px",
			"lightState":"off",
		},
	]
}

for (var i = 0; i < house.rooms.length; i++) {

	var roomName = house.rooms[i].name;
	var roomWidth = house.rooms[i].width;
	var roomHeight = house.rooms[i].height;
	var roomPosTop = house.rooms[i].top;
	var roomPosLeft = house.rooms[i].left;
	var roomColor = house.rooms[i].color;
	var roomID = house.rooms[i].id;

	var htmlRoom = '<div id="room'+roomID+'" class="housePlanRooms" style="width:'+roomWidth+'; height:'+roomHeight+';top:'+roomPosTop+';left:'+roomPosLeft+';">'+roomName+'</div>';
	$("#housePlanCanvas").append(htmlRoom);

	var htmlBtn = '<div class="list-group-item"><button class="btn btn-success roomSwitch" data-roomID="'+roomID+'">On/Off</button> '+roomName+'</div>';
	$("#controlPanel").append(htmlBtn);
};

$(document).on("click", ".roomSwitch", function(){
	var matchingRoomID = $(this).attr("data-roomID");
	$("#room"+matchingRoomID).toggleClass("roomLightOn roomLightOff");

	var roomsOn = $(".roomLightOn").length;
	var roomsTotal = house.rooms.length;
	var roomsOnGraph = roomsOn / roomsTotal * 100;

	var htmlGraph = '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+roomsOnGraph+'" aria-valuemin="0" aria-valuemax="100" style="width: '+roomsOnGraph+'%">Lights On '+roomsOn+'</div>';

	$("#lightsOnGraph").html(htmlGraph);
});