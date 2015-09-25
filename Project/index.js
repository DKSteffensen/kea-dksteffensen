	var gloIntHouseID = 0;

	$(document).ready(function(){
		var activePageLoaded = localStorage.activePage;
		$("#"+activePageLoaded).toggleClass("active inActive");
	});

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
			              "name": "light",
			              "electricityConsumption": "50",
			              "waterConsumption": "0",
			              "gasConsumption": "0",
			              "state": "off",
			              "icon": "fa fa-bolt",
			              "position": 
			              {
			                "top": "85%",
			                "left": "80%"
			              }
			            },
			            {
			              "id": 1,
			              "name": "light",
			              "electricityConsumption": "25",
			              "waterConsumption": "0",
			              "gasConsumption": "0",
			              "state": "on",
			              "icon": "fa fa-bolt",
			              "position": 
			              {
			                "top": "85%",
			                "left": "40%"
			              }
			            },
			            {
			              "id": 2,
			              "name": "refrigiator",
			              "electricityConsumption": "200",
			              "waterConsumption": "0",
			              "gasConsumption": "0",
			              "state": "on",
			              "icon": "fa fa-bolt",
			              "position": 
			              {
			                "top": "5%",
			                "left": "5%"
			              }
			            },
			            {
			              "id": 3,
			              "name": "stove",
			              "electricityConsumption": "150",
			              "waterConsumption": "0",
			              "gasConsumption": "0",
			              "state": "on",
			              "icon": "fa fa-bolt",
			              "position": 
			              {
			                "top": "85%",
			                "left": "15%"
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
			              "name": "tv",
			              "electricityConsumption": "200",
			              "waterConsumption": "0",
			              "gasConsumption": "0",
			              "state": "off",
			              "icon": "fa fa-bolt",
			              "position": 
			              {
			                "top": "0%",
			                "left": "70%"
			              }
			            },
			            {
			              "id": 1,
			              "name": "pc",
			              "electricityConsumption": "400",
			              "waterConsumption": "0",
			              "gasConsumption": "0",
			              "state": "on",
			              "icon": "fa fa-bolt",
			              "position": 
			              {
			                "top": "90%",
			                "left": "5%"
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
			          "utilities": []
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
			          "utilities": [],
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
			          "utilities": [],
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
		gloIntHouseID = 0;

		var linkHref = $(this).attr("data-linkHref");

		if($("#"+linkHref).hasClass("active")) {
			// Do something nice maybe?
		}
		else {
			$(".pages").not("#"+linkHref).removeClass("active").addClass("inActive");
			$("#"+linkHref).toggleClass("active inActive");
			localStorage.activePage = linkHref;
		}
	});

	loadRooms(gloIntHouseID);
	loadUtilities(0);