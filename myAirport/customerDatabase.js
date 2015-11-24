function getCustomerList(searchWord){
	$("#customersDatabaseTableBody").empty();

	$.ajax({
		url: "customerDatabase.php",
		dataType: "json",
		type: "post",
		data: {
			action: "getCustomers",
			search: searchWord
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var customerID = oResponse[i].id;
			var customerFirstname = oResponse[i].firstname;
			var customerLastname = oResponse[i].lastname;
			var customerEmail = oResponse[i].email;
			var customerCPR = oResponse[i].cpr;
			var customerPassword = oResponse[i].password;

			var customerRow = '<tr id="customer'+customerID+'"><td class="customerFirstname">'+customerFirstname+'</td><td class="customerLastname">'+customerLastname+'</td><td class="customerEmail">'+customerEmail+'</td><td class="customerCPR">'+customerCPR+'</td><td class="customerPassword">'+customerPassword+'</td><td class="tableLink"><a href="#" class="btnCustomerTickets" data-customerID="'+customerID+'"><i class="fa fa-list"></i></a></td><td class="tableLink"><a href="#" class="btnEditCustomer" data-customerID="'+customerID+'"><i class="fa fa-pencil-square-o"></i></a></td><td class="tableLink"><a href="#" class="btnDeleteCustomer" data-customerID="'+customerID+'"><i class="fa fa-ban"></i></a></td></tr>';
	
			$("#customersDatabaseTableBody").append(customerRow);

		};
	})	
}
$("#btnMainMenuCustomerDatabase").click(function(){
	getCustomerList("");
})
$(document).on('keyup', '#customerSearchField', function(){
	var searchWord = $("#customerSearchField").val();
	getCustomerList(searchWord);
})
$(document).on('click', '.btnEditCustomer', function(){
	var customerID = $(this).attr("data-customerID");
	var customerFirstname = $("#customer"+customerID+" > .customerFirstname").html();
	var customerLastname = $("#customer"+customerID+" > .customerLastname").html();
	var customerEmail = $("#customer"+customerID+" > .customerEmail").html();
	var customerCPR = $("#customer"+customerID+" > .customerCPR").html();
	var customerPassword = $("#customer"+customerID+" > .customerPassword").html();

	var editCustomerRow = '<td><input class="tableInputEdit lblEditFirstname" type="text" value="'+customerFirstname+'"></td><td><input class="tableInputEdit lblEditLastname" type="text" value="'+customerLastname+'"></td><td><input class="tableInputEdit lblEditEmail" type="text" value="'+customerEmail+'"></td><td><input class="tableInputEdit lblEditCPR" type="text" value="'+customerCPR+'"></td><td><input class="tableInputEdit lblEditPassword" type="password" value="'+customerPassword+'"></td><td colspan="3" class="tableLink"><a href="#" class="btnSaveEditCustomer" data-customerID="'+customerID+'"><i class="fa fa-floppy-o"></i></a></td>';
	$("#customer"+customerID).html(editCustomerRow);
})

$(document).on('click', '.btnSaveEditCustomer', function(){
	var customerID = $(this).attr("data-customerID");
	var newCustomerFirstname = $("#customer"+customerID).find(".lblEditFirstname").val();
	var newCustomerLastname = $("#customer"+customerID).find(".lblEditLastname").val();
	var newCustomerEmail = $("#customer"+customerID).find(".lblEditEmail").val();
	var newCustomerCPR = $("#customer"+customerID).find(".lblEditCPR").val();
	var newCustomerPassword = $("#customer"+customerID).find(".lblEditPassword").val();

	$.ajax({
		url: "customerDatabase.php",
		type: "post",
		data: {
			action: "updateCustomer",
			cID: customerID,
			cFirstname:newCustomerFirstname,
			cLastname:newCustomerLastname,
			cEmail:newCustomerEmail,
			cCPR:newCustomerCPR,
			cPassword:newCustomerPassword
		}
	})
	.done(function(sResponse){
		var customerRow = '<td class="customerFirstname">'+newCustomerFirstname+'</td><td class="customerLastname">'+newCustomerLastname+'</td><td class="customerEmail">'+newCustomerEmail+'</td><td class="customerCPR">'+newCustomerCPR+'</td><td class="customerPassword">'+newCustomerPassword+'</td><td class="tableLink"><a href="#" class="btnCustomerTickets" data-customerID="'+customerID+'"><i class="fa fa-list"></i></a></td><td class="tableLink"><a href="#" class="btnEditCustomer" data-customerID="'+customerID+'"><i class="fa fa-pencil-square-o"></i></a></td><td class="tableLink"><a href="#" class="btnDeleteCustomer" data-customerID="'+customerID+'"><i class="fa fa-ban"></i></a></td>';
		$("#customer"+customerID).html(customerRow);
	})
})

$(document).on('click', '.btnDeleteCustomer', function(){
	var customerID = $(this).attr("data-customerID");
	$.ajax({
		url: "customerDatabase.php",
		type: "post",
		data: {
			action: "deleteCustomer",
			cID: customerID
		}
	})
	.done(function(sResponse){
		$("#customer"+customerID).remove();
	})
})

$(".btnSubPage, #btnMainMenuCustomerDatabase").click(function(){
	$("#customerList").removeClass("hiddenPage").addClass("pageActive");
	$(".subPage").addClass("hiddenPage").removeClass("pageActive");
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////			TICKETS TICKETS TICKETS TICKETS TICKETS 	    /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCustomerTickets(customerID){
	$("#customersTicketsTableBody").empty();

	$.ajax({
		url: "customerDatabase.php",
		type: "post",
		dataType: "json",
		data: {
			action: "getCustomerTickets",
			cID: customerID
		}
	})
	.done(function(oResponse){

		for (var i = 0; i < oResponse.length; i++) {
			var ticketID = oResponse[i].id;
			var ticketNumber = oResponse[i].ticket_number;
			var ticketCustomerGender = oResponse[i].gender;
			var ticketCustomerFirstname = oResponse[i].firstname;
			var ticketCustomerLastname = oResponse[i].lastname;
			var ticketCustomerPassport = oResponse[i].passport;
			var ticketClass = oResponse[i].class;
			var ticketPrice = oResponse[i].price;
			var ticketTravelDepartureTime = oResponse[i].departure_datetime;
			var ticketTravelDepartureAirport = oResponse[i].departure_airport_code;
			var ticketTravelDepartureAirportName = oResponse[i].departure_airport_name;
			var ticketTravelArrivalAirport = oResponse[i].arrival_airport_code;
			var ticketTravelArrivalAirportName = oResponse[i].arrival_airport_name;

			var ticketRow = '<tr id="ticketID'+ticketID+'"><td class="ticketNumber">'+ticketNumber+'</td><td class="ticketGender" data-gender="">'+ticketCustomerGender+'</i></td><td class="ticketFirstname">'+ticketCustomerFirstname+'</td><td class="ticketLastname">'+ticketCustomerLastname+'</td><td class="ticketPassport">'+ticketCustomerPassport+'</td><td class="ticketClass">'+ticketClass+'</td><td class="ticketPrice">'+ticketPrice+'</td><td class="ticketDepartureDatetime">'+ticketTravelDepartureTime+'</td><td class="ticketDepartureAirport" title="'+ticketTravelDepartureAirportName+'">'+ticketTravelDepartureAirport+'</td><td class="ticketArrivalAirport" title="'+ticketTravelArrivalAirportName+'">'+ticketTravelArrivalAirport+'</td><td class="tableLink"><a href="#" class="btnEditTicket" data-customerID="'+customerID+'" data-ticketID="'+ticketID+'"><i class="fa fa-pencil-square-o"></i></a></td><td class="tableLink"><a href="#" class="btnDeleteTicket" data-ticketID="'+ticketID+'"><i class="fa fa-ban"></i></a></td></tr>';
	
			$("#customersTicketsTableBody").append(ticketRow);

		};
	})
}

$(document).on('click', '.btnDeleteTicket', function(){
	var ticketID = $(this).attr("data-ticketID");
	$.ajax({
		url: "customerDatabase.php",
		type: "post",
		data: {
			action: "deleteTicket",
			cID: ticketID
		}
	})
	.done(function(sResponse){
		$("#ticketID"+ticketID).remove();
	})
})

$(document).on('click', '.btnCustomerTickets', function(){
	$(".mainPage").addClass("hiddenPage").removeClass("pageActive");
	$("#customerTicketList").removeClass("hiddenPage").addClass("pageActive");

	var customerID = $(this).attr("data-customerID");
	getCustomerTickets(customerID);
})

$(document).on('click', '.btnEditTicket', function(){
	var ticketID = $(this).attr("data-ticketID");
	var customerID = $(this).attr("data-customerID");

	var ticketNumber = $("#ticketID"+ticketID+" > .ticketNumber").html();
	var ticketGender = $("#ticketID"+ticketID+" > .ticketGender").html();
	var ticketFirstname = $("#ticketID"+ticketID+" > .ticketFirstname").html();
	var ticketLastname = $("#ticketID"+ticketID+" > .ticketLastname").html();
	var ticketPassport = $("#ticketID"+ticketID+" > .ticketPassport").html();
	var ticketClass = $("#ticketID"+ticketID+" > .ticketClass").html();
	var ticketPrice = $("#ticketID"+ticketID+" > .ticketPrice").html();
	var ticketDepartureDatetime = $("#ticketID"+ticketID+" > .ticketDepartureDatetime").html();
	var ticketDeparture = $("#ticketID"+ticketID+" > .ticketDepartureAirport").html();
	var ticketArrival = $("#ticketID"+ticketID+" > .ticketArrivalAirport").html();

	var editTicketRow = '<td>'+ticketNumber+'</td><td><input class="tableInputEdit lblEditTicketGender" type="text" value="'+ticketGender+'"></td><td><input class="tableInputEdit lblEditTicketFirstname" type="text" value="'+ticketFirstname+'"></td><td><input class="tableInputEdit lblEditTicketLastname" type="text" value="'+ticketLastname+'"></td><td><input class="tableInputEdit lblEditTicketPassport" type="text" value="'+ticketPassport+'"></td><td>'+ticketClass+'</td><td>'+ticketPrice+'</td><td>'+ticketDepartureDatetime+'</td><td>'+ticketDeparture+'</td><td>'+ticketArrival+'</td><td colspan="2" class="tableLink"><a href="#" class="btnSaveEditTicket" data-ticketID="'+ticketID+'" data-customerID="'+customerID+'"><i class="fa fa-floppy-o"></i></a></td>';
	$("#ticketID"+ticketID).html(editTicketRow);
})

$(document).on('click', '.btnSaveEditTicket', function(){
	var ticketID = $(this).attr("data-ticketID");
	var customerID = $(this).attr("data-customerID");
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
		getCustomerTickets(customerID);
	})
})