	var gloIntHouseID = 0;
	var locStrHouses = localStorage.houses;

	if(locStrHouses == undefined) {
		var houses =
		{
			"myHouse":
			[
				{
					"id":0,
					"name":"Daniels House",
					"address":"Stenstuegade 38 2.TH.",
					"rooms":
					[
						{
							"id":0,
							"name":"Kitchen",
							"state":1,
							"dimensions":
							{
								"width":"175px",
								"height":"175px",
								"top":"5px",
								"left":"5px",
								"zindex":"5",
							},
							"utilities":
							[
								{
									"id":1,
									"name":"light",
									"type":"electricity",
									"consumption":"30",
									"state":"off"
								},
								{
									"id":2,
									"name":"refrigiator",
									"type":"electricity",
									"consumption":"500",
									"state":"on"
								}
							],
							"serramento":
							[
								{
									"id":1,
									"type":"door",
									"state":"open",
								},
								{
									"id":2,
									"type":"window",
									"state":"closed",					
								}
							]
						},
						{
							"id":1,
							"name":"Living Room",
							"state":1,
							"dimensions":
							{
								"width":"175px",
								"height":"175px",
								"top":"180px",
								"left":"180px",
								"zindex":"10",
							},
							"utilities":
							[
								{
									"id":0,
									"name":"light",
									"type":"electricity",
									"consumption":"30",
									"state":"off"
								},
								{
									"id":1,
									"name":"refrigiator",
									"type":"electricity",
									"consumption":"500",
									"state":"on"
								}
							],
							"serramento":
							[
								{
									"id":1,
									"type":"door",
									"state":"open",
								},
								{
									"id":2,
									"type":"window",
									"state":"closed",					
								}
							]
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