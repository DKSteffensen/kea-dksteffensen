function getPassengersList(travelID){
	$("#travelsPassengersTableBody").empty();

	$.ajax({
		url: "flights.php",
		dataType: "json",
		type: "post",
		data: {
			action: "getPassengers",
			tiID: travelID
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var customerID = oResponse[i].customers_id;
			var passengerID = oResponse[i].id;
			var passengerNumber = oResponse[i].ticket_number;
			var passengerCustomerGender = oResponse[i].gender;
			var passengerCustomerFirstname = oResponse[i].firstname;
			var passengerCustomerLastname = oResponse[i].lastname;
			var passengerCustomerPassport = oResponse[i].passport;
			var passengerClass = oResponse[i].class;
			var passengerPrice = oResponse[i].price;
			var passengerTravelDepartureTime = oResponse[i].departure_datetime;
			var passengerTravelDepartureAirport = oResponse[i].departure_airport_code;
			var passengerTravelDepartureAirportName = oResponse[i].departure_airport_name;
			var passengerTravelArrivalAirport = oResponse[i].arrival_airport_code;
			var passengerTravelArrivalAirportName = oResponse[i].arrival_airport_name;

			var passengerRow = '<tr id="passengerID'+passengerID+'"><td class="ticketNumber">'+passengerNumber+'</td><td class="ticketGender" data-gender="">'+passengerCustomerGender+'</i></td><td class="ticketFirstname">'+passengerCustomerFirstname+'</td><td class="ticketLastname">'+passengerCustomerLastname+'</td><td class="ticketPassport">'+passengerCustomerPassport+'</td><td class="ticketClass">'+passengerClass+'</td><td class="ticketPrice">'+passengerPrice+'</td><td class="tableLink"><a href="#" class="btnEditPassenger" data-travelsID="'+travelID+'" data-ticketID="'+passengerID+'"><i class="fa fa-pencil-square-o"></i></a></td><td class="tableLink"><a href="#" class="btnDeleteTicket" data-ticketID="'+passengerID+'"><i class="fa fa-ban"></i></a></td></tr>';
	
			$("#travelsPassengersTableBody").append(passengerRow);

		};
	})	
}
function getTicketsType(flightID){
	$.ajax({
		url: "flights.php",
		type: "post",
		dataType: "json",
		data: {
			action: "getTicketsType",
			tiID: flightID
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var ticketID = oResponse[i].id;
			var ticketClass = oResponse[i].class;
			var ticketPrice = oResponse[i].price;
			var ticketNumber = oResponse[i].number_of_tickets;

			var ticket = i+1;

			var ticketRow = '<div class="ticketType"><table class="ticketTypeTable"><thead><tr><th colspan="3"><h4>Ticket '+ticket+'</h4></th></tr></thead><tbody><tr id="ticketIndex'+i+'" class="ticketTypeFlightID'+flightID+'" data-ticketID="'+ticketID+'"><td><input type="text" placeholder="Class" value="'+ticketClass+'" class="ticketClass"></td><td><input type="number" placeholder="Price" value="'+ticketPrice+'" class="ticketPrice"></td><td><input type="text" placeholder="Number of tickets" value="'+ticketNumber+'" class="ticketnOTickets"></td></tr></tbody></table></div>';


		$("#currentTicketTypeEdit").append(ticketRow);
		};

		var ticketRowSavebtn = '<div class="pageFooter"><button class="btnSave" data-flightID="'+flightID+'" id="btnEditSaveTickets">Save</button></div>';
		$("#currentTicketTypeEdit").append(ticketRowSavebtn);
	})
	$("#currentTicketTypeEdit").empty();
}
$(document).on('click', '.btnEditPassenger', function(){
	var ticketID = $(this).attr("data-ticketID");
	var travelsID = $(this).attr("data-travelsID");

	var ticketNumber = $("#passengerID"+ticketID+" > .ticketNumber").html();
	var ticketGender = $("#passengerID"+ticketID+" > .ticketGender").html();
	var ticketFirstname = $("#passengerID"+ticketID+" > .ticketFirstname").html();
	var ticketLastname = $("#passengerID"+ticketID+" > .ticketLastname").html();
	var ticketPassport = $("#passengerID"+ticketID+" > .ticketPassport").html();
	var ticketClass = $("#passengerID"+ticketID+" > .ticketClass").html();
	var ticketPrice = $("#passengerID"+ticketID+" > .ticketPrice").html();
	var ticketDepartureDatetime = $("#passengerID"+ticketID+" > .ticketDepartureDatetime").html();
	var ticketDeparture = $("#passengerID"+ticketID+" > .ticketDepartureAirport").html();
	var ticketArrival = $("#passengerID"+ticketID+" > .ticketArrivalAirport").html();

	var editTicketRow = '<td>'+ticketNumber+'</td><td><input class="tableInputEdit lblEditTicketGender" type="text" value="'+ticketGender+'"></td><td><input class="tableInputEdit lblEditTicketFirstname" type="text" value="'+ticketFirstname+'"></td><td><input class="tableInputEdit lblEditTicketLastname" type="text" value="'+ticketLastname+'"></td><td><input class="tableInputEdit lblEditTicketPassport" type="text" value="'+ticketPassport+'"></td><td>'+ticketClass+'</td><td>'+ticketPrice+'</td><td colspan="2" class="tableLink"><a href="#" class="btnSaveEditPassenger" data-ticketID="'+ticketID+'" data-travelsID="'+travelsID+'"><i class="fa fa-floppy-o"></i></a></td>';
	$("#passengerID"+ticketID).html(editTicketRow);
})

$(document).on('click', '.btnSaveEditPassenger', function(){
	var ticketID = $(this).attr("data-ticketID");
	var travelsID = $(this).attr("data-travelsID");
	var newTicketGender = $(".lblEditTicketGender").val();
	var newTicketFirstname = $(".lblEditTicketFirstname").val();
	var newTicketLastname = $(".lblEditTicketLastname").val();
	var newTicketPassport = $(".lblEditTicketPassport").val();

	$.ajax({
		url: "customerDatabase.php",
		type: "post",
		data: {
			action: "udpdateTicket",
			tID: ticketID,
			tGender: newTicketGender,
			tFirstname: newTicketFirstname,
			tLastname: newTicketLastname,
			tPassport: newTicketPassport
		}
	})
	.done(function(sResponse){
		getPassengersList(travelsID);
	})
})

function getTravels(){
	$.ajax({
		url: "flights.php",
		type: "post",
		dataType: "json",
		data: {
			action: "getTravels"
		}
	})
	.done(function(oResponse){
		$("#travelsTableBody").empty();

		for (var i = 0; i < oResponse.length; i++) {
			var travelsID = oResponse[i].id;
			var travelsNumber = oResponse[i].flight_number;
			var travelsAirplane = oResponse[i].reg_number;
			var travelsDepartureAirport = oResponse[i].departure_airport_code;
			var travelsDepartureAirportFullname = oResponse[i].departure_airport_name;
			var travelsDepartureDatetime = oResponse[i].departure_datetime;
			var travelsArrivalAirport = oResponse[i].arrival_airport_code;
			var travelsArrivalAirportFullname = oResponse[i].arrival_airport_name;
			var travelsArrivalDatetime = oResponse[i].arrival_datetime;

			var travelsRow = '<tr id="travels'+travelsID+'" data-travelsID="'+travelsID+'"><td class="travelsNumberEdit">'+travelsNumber+'</td><td class="travelsAirplaneEdit">'+travelsAirplane+'</td><td class="travelsDepartureAirportEdit" title="'+travelsDepartureAirportFullname+'">'+travelsDepartureAirport+'</td><td class="travelsDepartureTimeEdit">'+travelsDepartureDatetime+'</td><td class="travelsArrivalAirportEdit" title="'+travelsArrivalAirportFullname+'">'+travelsArrivalAirport+'</td><td class="travelsArrivalTimeEdit">'+travelsArrivalDatetime+'</td><td class="tableLink"><a href="#" data-flightID="'+travelsID+'" class="btnListPassengers"><i class="fa fa-list"></i></a></td><td class="tableLink"><a href="#" data-flightID="'+travelsID+'" class="btnEditTickets"><i class="fa fa-ticket"></i></a></td><td class="tableLink"><a href="#" data-flightID="'+travelsID+'" class="btnTravelsEdit"><i class="fa fa-pencil-square-o"></i></a></td><td class="tableLink"><a href="#" data-flightID="'+travelsID+'" class="btnTravelsDelete"><i class="fa fa-ban"></i></a></td></tr>';
	
			$("#travelsTableBody").append(travelsRow);

		};


	})
}

$("#btnFlightsNew").click(function(){
	$("#flightsNew").addClass("pageActive").removeClass("hiddenPage");
	$("#flightsMenu").addClass("hiddenPage").removeClass("pageActive");
	arrivalAirportDropdown();
	departureAirportDropdown();
	airplanesDropdown();
	var flightNumber = createFlightNumber();
	$("#newFlightNumber").val(flightNumber);

})
$("#btnFlightsList").click(function(){
	$("#flightsList").addClass("pageActive").removeClass("hiddenPage");
	$("#flightsMenu").addClass("hiddenPage").removeClass("pageActive");
	getTravels();
})
$(".btnMainPage, #btnMainMenuFlightsManagement").click(function(){
	$("#flightsNew").addClass("hiddenPage").removeClass("pageActive");
	$("#flightsList").addClass("hiddenPage").removeClass("pageActive");
	$(".subPage").addClass("hiddenPage").removeClass("pageActive");
	$("#flightsMenu").addClass("pageActive").removeClass("hiddenPage");
})
$(document).on("click", ".btnEditTickets", function(){
	$(".mainPage").addClass("hiddenPage").removeClass("pageActive");
	$("#subFlightsTickets").removeClass("hiddenPage").addClass("pageActive");

	var flightID = $(this).attr("data-flightID");
	getTicketsType(flightID);
})
$(document).on("click", ".btnListPassengers", function(){
	$(".mainPage").addClass("hiddenPage").removeClass("pageActive");
	$("#subFlightsListPassengers").removeClass("hiddenPage").addClass("pageActive");

	var flightID = $(this).attr("data-flightID");
	getPassengersList(flightID);
})
$(document).on('click', '#btnEditSaveTickets', function(){
	var flightID = $(this).attr("data-flightid");

	var ticketArray = [];
	$(".ticketTypeFlightID"+flightID).each(function(i){
		var ticketID = $("#ticketIndex"+i).attr('data-ticketid');
		var ticketClass = $("#ticketIndex"+i).find('.ticketClass').val();
		var ticketPrice = $("#ticketIndex"+i).find('.ticketPrice').val();
		var ticketNOTickets = $("#ticketIndex"+i).find('.ticketnOTickets').val();

		var ticketObject = {};
		ticketObject.id = ticketID;
		ticketObject.class = ticketClass;
		ticketObject.price = ticketPrice;
		ticketObject.number_of_tickets = ticketNOTickets;

		ticketArray.push(ticketObject);

	})
		sTicketArray = JSON.stringify(ticketArray);
	$.ajax({
		url: "flights.php",
		type: "post",
		dataType: "json",
		data: {
			action: "updateTicketType",
			newTicket: sTicketArray
		}
	})
	.done(function(){
		getTicketsType(flightID);
	})
})

$(".btnSubPage").click(function(){
	$("#flightsList").removeClass("hiddenPage").addClass("pageActive");
	$(".subPage").addClass("hiddenPage").removeClass("pageActive");
})

$(document).on('click', '.btnTravelsDelete', function(){
	var flightID = $(this).attr("data-flightid");

	$.ajax({
		url: "flights.php",
		type: "post",
		data: {
			action: "deleteTravel",
			tID: flightID
		}
	})
	.done(function(){
		$("#travels"+flightID).fadeOut();
	})
})

$(document).on('click', '.btnTravelsEdit', function(){
	var flightID = $(this).attr("data-flightid");

	var travelNumber = $("#travels"+flightID+" > .travelsNumberEdit").html();
	var travelAirplane = $("#travels"+flightID+" > .travelsAirplaneEdit").html();
	var travelDepartureAirport = $("#travels"+flightID+" > .travelsDepartureAirportEdit").html();
	var travelDepartureTime = $("#travels"+flightID+" > .travelsDepartureTimeEdit").html();
	var travelArrivalAirport = $("#travels"+flightID+" > .travelsArrivalAirportEdit").html();
	var travelArrivalTime = $("#travels"+flightID+" > .travelsArrivalTimeEdit").html();

	var editTravelsRow = '<td><input class="tableInputEdit lblEditTravelNumber" type="text" value="'+travelNumber+'"></td><td><select class="tableInputEdit lblEditAirplane airplaneDropdown"></select></td><td><select class="tableInputEdit lblEditDepartureAirport airportDeparture"></select></td><td><input class="tableInputEdit lblEditDepartureTime" type="text" value="'+travelDepartureTime+'"></td><td><select class="tableInputEdit lblEditArrivalAirport airportArrival"></select></td><td><input class="tableInputEdit lblEditArrivalTime" type="text" value="'+travelArrivalTime+'"></td><td colspan="4" class="tableLink"><a href="#" class="btnSaveEditTravels" data-flightID="'+flightID+'"><i class="fa fa-floppy-o"></i></a></td>';

	$("#travels"+flightID).html(editTravelsRow);
	airplanesDropdown(travelAirplane);
	departureAirportDropdown(travelDepartureAirport);
	arrivalAirportDropdown(travelArrivalAirport);
})

$(document).on('click', '.btnSaveEditTravels', function(){
	var flightID = $(this).attr("data-flightid");
	var travelNumber = $("#travels"+flightID).find(".lblEditTravelNumber").val();
	var travelAirplane = $("#travels"+flightID).find(".lblEditAirplane").val();
	var travelDepartureAirport = $("#travels"+flightID).find(".lblEditDepartureAirport").val();
	var travelDepartureTime = $("#travels"+flightID).find(".lblEditDepartureTime").val();
	var travelArrivalAirport = $("#travels"+flightID).find(".lblEditArrivalAirport").val();
	var travelArrivalTime = $("#travels"+flightID).find(".lblEditArrivalTime").val();

	$.ajax({
		url: "flights.php",
		type: "post",
		data: {
			action: "updateTravels",
			tID: flightID,
			tNumber: travelNumber,
			tAirplane: travelAirplane,
			tDAirport: travelDepartureAirport,
			tDTime: travelDepartureTime,
			tAAirport: travelArrivalAirport,
			tATime: travelArrivalTime
		}
	})
	.done(function(sResponse){
		getTravels();
	})
})

function airplanesDropdown(currentAirplaneRegNumber){
	$(".airplaneDropdown").empty();
	if(currentAirplaneRegNumber == "" || currentAirplaneRegNumber == undefined){
		$(".airplaneDropdown").append('<option selected="selected" disabled>Select Airplane</option>');
	}
	$.ajax({
		url: "dropdowns.php",
		dataType: "json",
		type: "post",
		data: {
			action: "airplaneDropdown"
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var airplaneID = oResponse[i].id;
			var airplaneRegNumber = oResponse[i].reg_number;
			var airplaneCapacity = oResponse[i].passengers_capacity;
			var airplaneClasses = oResponse[i].classes;
			if(airplaneRegNumber == currentAirplaneRegNumber){
				var airplaneOption = '<option selected="selected" value="'+airplaneID+'" data-capacity="'+airplaneCapacity+'" data-classes="'+airplaneClasses+'">'+airplaneRegNumber+'</option>';
				$(".airplaneDropdown").append(airplaneOption);
			}
			else{
				var airplaneOption = '<option value="'+airplaneID+'" data-capacity="'+airplaneCapacity+'" data-classes="'+airplaneClasses+'">'+airplaneRegNumber+'</option>';
				$(".airplaneDropdown").append(airplaneOption);
			}
		};
	})
}

function departureAirportDropdown(currentAirport){
	$.ajax({
		url: "dropdowns.php",
		dataType: "json",
		type: "post",
		data: {
			action: "airportDropdown"
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var airportID = oResponse[i].id;
			var airportName = oResponse[i].name;
			var airportCode = oResponse[i].airport_code;

			if(airportCode == currentAirport){
				var airportCodeOption = '<option value="'+airportID+'" data-airportCode="'+airportCode+'" selected="selected">'+airportName+'</option>';
				$(".airportDeparture").append(airportCodeOption);
			}
			else{
				var airportCodeOption = '<option value="'+airportID+'" data-airportCode="'+airportCode+'">'+airportName+'</option>';
				$(".airportDeparture").append(airportCodeOption);
			}
		};
	})
}

function arrivalAirportDropdown(currentAirport){
	$.ajax({
		url: "dropdowns.php",
		dataType: "json",
		type: "post",
		data: {
			action: "airportDropdown"
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var airportID = oResponse[i].id;
			var airportName = oResponse[i].name;
			var airportCode = oResponse[i].airport_code;

			if(airportCode == currentAirport){
				var airportCodeOption = '<option value="'+airportID+'" data-airportCode="'+airportCode+'" selected="selected">'+airportName+'</option>';
				$(".airportArrival").append(airportCodeOption);
			}
			else{
				var airportCodeOption = '<option value="'+airportID+'" data-airportCode="'+airportCode+'">'+airportName+'</option>';
				$(".airportArrival").append(airportCodeOption);
			}
		};
	})
}
function createFlightNumber(){
	var number = Math.floor(Math.random() * 9000) + 1000;
	var fullFlightNumber = "DS"+number;
	return fullFlightNumber;
}
$("#btnNewFlightNumber").click(function(){
	var flightNumber = createFlightNumber();
	$("#newFlightNumber").val(flightNumber);	
})

$(document).on("change", "#newTravelAirplaneDropdown", function(){
	$("#flightsTicketsWrap").empty();

	var selectedAirplane = $(this).find('option:selected');
	var seats = selectedAirplane.data('capacity');
	var classes = selectedAirplane.data('classes');
	$("#airplaneSeatsInsert").html(seats);

	for (var i = 0; i < classes; i++) {
		var ticketNumber = i+1;
		var ticketCountRows = '<div class="ticketType"><table class="ticketTypeTable"><thead><tr><th colspan="3"><h4>Ticket '+ticketNumber+'</h4></th></tr></thead><tbody><tr id="newTicketIndex'+i+'" class="newTicketTypeRow"><td><input type="text" placeholder="Class" class="newTicketClass"></td><td><input type="number" placeholder="Price" class="newTicketPrice"></td><td><input type="text" placeholder="Number of tickets" class="newTicketNOTickets"></td></tr></tbody></table></div>';
		$("#flightsTicketsWrap").append(ticketCountRows);
	};
})

$(document).on('click', '#btnNewFlightSave', function(){

	var flightNumber = $("#newFlightNumber").val();
	var airplaneID = $("#newTravelAirplaneDropdown").val();
	var airportDeparture = $("#newTravelAirportDeparture").val();
	var airportArrival = $("#newTravelAirportArrival").val();
	var departureTime = $("#newTravelDepartureTime").val();
	var arrivalTime = $("#newTravelArrivalTime").val();

	var ticketArray = [];
	$(".newTicketTypeRow").each(function(i){
		var ticketClass = $("#newTicketIndex"+i).find('.newTicketClass').val();
		var ticketPrice = $("#newTicketIndex"+i).find('.newTicketPrice').val();
		var ticketNOTickets = $("#newTicketIndex"+i).find('.newTicketNOTickets').val();

		var ticketObject = {};
		ticketObject.class = ticketClass;
		ticketObject.price = ticketPrice;
		ticketObject.number_of_tickets = ticketNOTickets;

		ticketArray.push(ticketObject);

	})

	sTicketArray = JSON.stringify(ticketArray);

	$.ajax({
		url: "flights.php",
		type: "post",
		data: {
			action: "newFlight",
			fNumber: flightNumber,
			fAirplaneID: airplaneID,
			fAirportDepartureID: airportDeparture,
			fAirportArrivalID: airportArrival,
			fDepartureTime: departureTime,
			fArrivalTime: arrivalTime,
			newTicket: sTicketArray
		}
	})
	.done(function(){
		console.log("done");
		getTravels();
		$("#flightsNew").addClass("hiddenPage").removeClass("pageActive");
		$("#flightsList").addClass("pageActive").removeClass("hiddenPage");
		$(".subPage").addClass("hiddenPage").removeClass("pageActive");
		$("#flightsMenu").addClass("hiddenPage").removeClass("pageActive");
	})
})