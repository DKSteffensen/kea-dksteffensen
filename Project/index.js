var locStrUsers = localStorage.users;

if(locStrUsers == undefined) {
	var users =
	[
		{
			"id":"0",
			"username":"Daniel",
			"password":"test123",
			"firstname":"Daniel",
			"lastname":"Steffensen",
			"houses":
			[
				{
					"id":"0",
					"active":1
				},
				{
					"id":"1",
					"active":0
				}

			]
		}
	]
	stringifyUsers();
}

var locStrUsers = localStorage.users;
var users = JSON.parse(locStrUsers);

var userLoggedIn = localStorage.userLoggedIn;	
if(userLoggedIn == undefined){
	$("#login").show();
	gloIntHouseID = 0;
}
else {
	for (var i = 0; i < users[userLoggedIn].houses.length; i++) {
		var usersHouseActive = users[userLoggedIn].houses[i].active;
		var usersHouseID = users[userLoggedIn].houses[i].id;
			if(usersHouseActive == 1){
				var gloIntHouseID = usersHouseID;
			}
	};
}

	$(document).ready(function(){
		var activePageLoaded = localStorage.activePage;
		var activeControlPanelPageLoaded = localStorage.activeControlPanelPage;
		if(activePageLoaded == undefined){
			$("#frontPage").toggleClass("active inActive")
		}
		else {
			$("#"+activePageLoaded+", #"+activeControlPanelPageLoaded).toggleClass("active inActive");
		}

		updatePage();
		changeBackground();

	});

function changeBackground () {
	var activePageLoaded = localStorage.activePage;

	switch(activePageLoaded){
	case 'frontPage':
		$(".ha-leftRow").css("background-image", "none");
	break;
	case 'controlPanelPage':	
		$(".ha-leftRow").css("background-image", "url(grassbig.jpg)");		
	break;
	case 'buildRoomPage':
		$(".ha-leftRow").css("background-image", "url(bp2.jpg)");				
	break;
	case 'addUtilitiesPage':
		$(".ha-leftRow").css("background-image", "url(yellow2.jpg)");			
	break;
	}
}

	var locStrHouses = localStorage.houses;

	if(locStrHouses == undefined) {
		var houses =
			{
			  "myHouse": 
			  [
			    {
			      "id": 0,
			      "name": "Daniels House",
			      "address": "Stenstuegade 38 2.TH.",
			      "rooms": 
			      [
			        {
			          "id": 0,
			          "name": "Kitchen",
			          "deleted": 0,
			          "dimensions": 
			          {
			            "width": "250px",
			            "height": "175px",
			            "top": "255px",
			            "left": "80px",
			            "zindex": "5"
			          },
			          "utilities": 
			          [
			            {
			              "id": 0,
			              "name": "Light 1",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "20",
			              "state": "off",
			              "icon": "fa-lightbulb-o",
			              "position": 
			              {
			                "top": "85%",
			                "left": "80%"
			              }
			            },
			            {
			              "id": 1,
			              "name": "Light 2",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "40",
			              "state": "on",
			              "icon": "fa-lightbulb-o",
			              "position": 
			              {
			                "top": "85%",
			                "left": "40%"
			              }
			            },
			            {
			              "id": 2,
			              "name": "Refrigiator",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "200",
			              "state": "on",
			              "icon": "fa-bolt",
			              "position": 
			              {
			                "top": "5%",
			                "left": "5%"
			              }
			            },
			            {
			              "id": 3,
			              "name": "Stove",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "550",
			              "state": "on",
			              "icon": "fa-bolt",
			              "position": 
			              {
			                "top": "85%",
			                "left": "15%"
			              }
			            },
			            {
			              "id": 4,
			              "name": "Kitchen Sink",
			          	  "deleted": 0,
			              "type": "water",
			              "consumption": "250",
			              "state": "on",
			              "icon": "fa-tint",
			              "position": 
			              {
			                "top": "85%",
			                "left": "60%"
			              }
			            }
			          ],
			          "serramento": 
			          [
			            {
			              "id": 1,
			              "type": "door",
			              "state": "open"
			            },
			            {
			              "id": 2,
			              "type": "window",
			              "state": "closed"
			            }
			          ]
			        },
			        {
			          "id": 1,
			          "name": "Living Room",
			          "deleted": 0,
			          "dimensions": 
			          {
			            "width": "325px",
			            "height": "300px",
			            "top": "55px",
			            "left": "405px",
			            "zindex": "10"
			          },
			          "utilities": 
			          [
			            {
			              "id": 0,
			              "name": "Television",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "350",
			              "state": "off",
			              "icon": "fa-television",
			              "position": 
			              {
			                "top": "0%",
			                "left": "70%"
			              }
			            },
			            {
			              "id": 1,
			              "name": "Computer",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "500",
			              "state": "on",
			              "icon": "fa-desktop",
			              "position": 
			              {
			                "top": "90%",
			                "left": "10%"
			              }
			            },
			            {
			              "id": 2,
			              "name": "Dinner Table Light",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "70",
			              "state": "off",
			              "icon": "fa-lightbulb-o",
			              "position": 
			              {
			                "top": "5%",
			                "left": "15%"
			              }
			            },
			            {
			              "id": 3,
			              "name": "Light Stand",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "100",
			              "state": "on",
			              "icon": "fa-lightbulb-o",
			              "position": 
			              {
			                "top": "70%",
			                "left": "90%"
			              }
			            }
			          ],
			          "serramento": 
			          [
			            {
			              "id": 1,
			              "type": "door",
			              "state": "open"
			            },
			            {
			              "id": 2,
			              "type": "window",
			              "state": "closed"
			            }
			          ]
			        },
			        {
			          "id": 2,
			          "name": "Bedroom",
			          "deleted": 0,
			          "dimensions": 
			          {
			            "width": "250px",
			            "height": "200px",
			            "top": "55px",
			            "left": "80px",
			            "zindex": "15"
			          },
			          "utilities":
			          [
			            {
			              "id": 0,
			              "name": "Light 1",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "50",
			              "state": "on",
			              "icon": "fa-lightbulb-o",
			              "position": 
			              {
			                "top": "50%",
			                "left": "40%"
			              }
			            },
			            {
			              "id": 1,
			              "name": "Television",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "450",
			              "state": "off",
			              "icon": "fa-television",
			              "position": 
			              {
			                "top": "15%",
			                "left": "70%"
			              }
			            },
			            {
			              "id": 2,
			              "name": "Night Lamp",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "50",
			              "state": "off",
			              "icon": "fa-lightbulb-o",
			              "position": 
			              {
			                "top": "5%",
			                "left": "5%"
			              }
			            }
			          ]
			        },
			        {
			          "id": 3,
			          "name": "Bathroom",
			          "deleted": 0,
			          "dimensions": 
			          {
			            "width": "125px",
			            "height": "150px",
			            "top": "55px",
			            "left": "280px",
			            "zindex": "15"
			          },
			          "utilities":
			          [
			            {
			              "id": 0,
			              "name": "Light 1",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "60",
			              "state": "on",
			              "icon": "fa-lightbulb-o",
			              "position": 
			              {
			                "top": "55%",
			                "left": "5%"
			              }
			            },
			            {
			              "id": 1,
			              "name": "Bathroom Sink",
			          	  "deleted": 0,
			              "type": "water",
			              "consumption": "150",
			              "state": "on",
			              "icon": "fa-tint",
			              "position": 
			              {
			                "top": "40%",
			                "left": "5%"
			              }
			            },
			            {
			              "id": 2,
			              "name": "Washing Machine",
			          	  "deleted": 0,
			              "type": "water",
			              "consumption": "550",
			              "state": "on",
			              "icon": "fa-tint",
			              "position": 
			              {
			                "top": "5%",
			                "left": "80%"
			              }
			            },
			          ],
			          "doorsAndWindows": []
			        },
			        {
			          "id": 4,
			          "name": "Entrance",
			          "deleted": 0,
			          "dimensions": 
			          {
			            "width": "75px",
			            "height": "225px",
			            "top": "205px",
			            "left": "330px",
			            "zindex": "5"
			          },
			          "utilities":
			          [
			            {
			              "id": 0,
			              "name": "Light 1",
			          	  "deleted": 0,
			              "type": "electricity",
			              "consumption": "30",
			              "state": "off",
			              "icon": "fa-bolt",
			              "position": 
			              {
			                "top": "50%",
			                "left": "40%"
			              }
			            },
			          ],
			          "doorsAndWindows": []
			        }
			      ]
			    }
			  ]
			}
		stringifyHouse();
	}
	else {	
		var locStrHouses = localStorage.houses;
		var houses = JSON.parse(locStrHouses);
	}

	$(document).on("click", ".btnNavbar", function(){

		var linkHref = $(this).attr("data-linkHref");
		$(".btnNavbar").not(this).parent().removeClass("active")
		$(this).parent().addClass("active");

		if($("#"+linkHref).hasClass("active")) {
			// Do something nice maybe?
		}
		else {
			$(".pages").not("#"+linkHref).removeClass("active").addClass("inActive");
			$("#"+linkHref).toggleClass("active inActive");
			localStorage.activePage = linkHref;
		}
		updatePage();
		changeBackground();
	});	

	$(document).on("click", ".btnControlPanel", function(){		

		loadGraphs(gloIntHouseID);

		var linkHref = $(this).attr("data-linkControlPanelHref");

		if($("#"+linkHref).hasClass("active")) {
			// Do something nice maybe?
		}
		else {
			$(".controlPanelPages").not("#"+linkHref).removeClass("active").addClass("inActive");
			$("#"+linkHref).toggleClass("active inActive");
			localStorage.activeControlPanelPage = linkHref;
		}
	});

	$(document).on('switchChange.bootstrapSwitch', 'input[name="utilitySwitchCheckbox"]', function(event, state) {
		var utilityID = $(this).attr("data-utilityID");
		var roomID = $(this).attr("data-roomID");
		var combinedIDs = roomID+""+utilityID;

		switch(houses.myHouse[gloIntHouseID].rooms[roomID].utilities[utilityID].type){
			case 'electricity':
				var utilityClass = "utilityElectricityOn";
			break;
			case 'water':
				var utilityClass = "utilityWaterOn";
			break;
		}

		if(state == true){
			$(".utility"+combinedIDs).addClass(utilityClass);
			houses.myHouse[gloIntHouseID].rooms[roomID].utilities[utilityID].state = "on";
			stringifyHouse();
		}
		else {
			$(".utility"+combinedIDs).removeClass(utilityClass);
			houses.myHouse[gloIntHouseID].rooms[roomID].utilities[utilityID].state = "off";
			stringifyHouse();	
		}
	});

	$("#btnLogin").click(function(){
		var lblUsername = $("#inpUsername").val();
		var lblPassword = $("#inpPassword").val();
		console.log(lblUsername+lblPassword);

		login(lblUsername, lblPassword);
	})
	$(document).on("click", "#btnLogout", function(){
		logout();
	})