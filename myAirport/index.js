function onPageLoad(){	
	checkIfLoggedIn();
	getTravelsForCustomer();
}
onPageLoad();

order = 
		{
			"ticketID":0,
			"customerID":0,
			"totalPrice":0,
			"flightFrom":"",
			"flightTo":"",
			"passengers":
			[
				{
					"ticketNumber":"",
					"firstname":"",
					"lastname":"",
					"gender":"",
					"passport":"",
					"phone":""
				}
			],
			"payment":
			{
				"cardType":"",
				"name":"",
				"cardNumber":"",
				"expMonth":"",
				"expYear":"",
				"cvcCode":""
			}
		};

$("#orderHistory").click(function(){
	console.log("ORders");
})
$("#accountDetails").click(function(){
	changePage("pageAccount");
})
$("#backToFrontpage").click(function(){
	window.location.reload();
})


function changePage(newPage){
	$(".pages").not("#"+newPage).addClass("hidden");
	$("#"+newPage).removeClass("hidden");
};
function checkIfLoggedIn(){
	$.ajax({
		url: "handler.php",
		dataType: "json",
		type: "post",
		data: {
			action: "checkLogin"
		}
	})
	.done(function(jResponse){
		if(jResponse.loggedIn == 1){

			$("#loggedIn").addClass("shown").removeClass("hidden");
			$("#loggedOut").removeClass("shown").addClass("hidden");

			var firstname = jResponse.firstname;
			var lastname = jResponse.lastname;
			var email = jResponse.email;
			var cpr = jResponse.cpr;
			var password = jResponse.password;
			var customerID = jResponse.customerID;

			$("#accountFirstname").val(firstname);
			$("#accountLastname").val(lastname);
			$("#accountEmail").val(email);
			$("#accountCPR").val(cpr);
			$("#accountPassword").val(password);

			$("#loggedInFirstname").html(firstname);
			$("#loggedInLastname").html(lastname);
			order.customerID = customerID;
			order.passengers[0].firstname = firstname;
			order.passengers[0].lastname = lastname;
			$("#inpFirstname").val(order.passengers[0].firstname);
			$("#inpLastname").val(order.passengers[0].lastname);
			loggedIn = 1;
		}
		else {
			$("#loggedIn").addClass("hidden").removeClass("shown");
			$("#loggedOut").removeClass("hidden").addClass("shown");
			loggedIn = 0;
		}
	})
};
//
// Login Function
function login(customerEmail, customerPassword){
	$.ajax({
		url: "handler.php",
		type: "post",
		data: {
			action: "login",
			email: customerEmail,
			password: customerPassword
		}
	})
	.done(function(sResponse){
		checkIfLoggedIn();
	})
}
//
// Login Submit
//
	$("#btnLoginSubmit").click(function(){
		var loginEmail = $("#lblLoginEmail").val();
		var loginPassword = $("#lblLoginPassword").val();

		if(!loginEmail.trim() && !loginPassword.trim()){
			$(".errorMessage").html("Please Enter Email & Password!");
		}
		else if(!loginEmail.trim()){
			$(".errorMessage").html("Please Enter Email");
		}
		else if(!loginPassword.trim()){
			$(".errorMessage").html("Please Enter Password!");
		}
		else {
			$(".errorMessage").empty();

			login(loginEmail, loginPassword);
			if(loggedIn == 1){
				changePage("pageTicketDetails");				
			}

		}
	})
	$("#btnLogin").click(function(){
		var loginEmail = $("#userEmail").val();
		var loginPassword = $("#userPassword").val();

		if(!loginEmail.trim() && !loginPassword.trim()){
			$(".errorMessage").html("Please Enter Email & Password!");
		}
		else if(!loginEmail.trim()){
			$(".errorMessage").html("Please Enter Email");
		}
		else if(!loginPassword.trim()){
			$(".errorMessage").html("Please Enter Password!");
		}
		else {
			$(".errorMessage").empty();
			login(loginEmail, loginPassword);
			var currentPage = $(".pages").not(".hidden").attr("id");
			if(loggedIn == 1){		
				if(currentPage == "pageUserDetails"){
					changePage("pageTicketDetails");
				}
			}
		}
	})
//
// Signup Function
function signup(sFirstname, sLastname, sEmail, sCPR, sPassword){
	$.ajax({
		url: "handler.php",
		type: "post",
		data: {
			action: "signup",
			firstname: sFirstname,
			lastname: sLastname,
			email: sEmail,
			cpr: sCPR,
			password: sPassword
		}
	})
	.done(function(){
		login(sEmail, sPassword);		
	})
}
	//
	// Signup Click
	$("#btnSignupSubmit").click(function(){
		var firstname = $("#lblSignupFirstname").val();
		var lastname = $("#lblSignupLastname").val();
		var email = $("#lblSignupEmail").val();
		var cpr = $("#lblSignupCPR").val();
		var password = $("#lblSignupPassword").val();
		var passwordRetype = $("#lblSignupPasswordRetype").val();

		if(!password.trim() || !passwordRetype.trim()){
			$(".signupErrorMessage").html("Please enter passwords.");
		}
		else{			
			if(password == passwordRetype){
				if(!firstname.trim() || !lastname.trim() || !email.trim() || !cpr.trim()){
					$(".signupErrorMessage").html("Please fill out all fields!");
				}
				else {
					$(".signupErrorMessage").html("");
					signup(firstname, lastname, email, cpr, password);
					changePage("pageTicketDetails");
					$("#inpFirstname").val(firstname);
					$("#inpLastname").val(lastname);	

				}
			}
			else {
				$(".signupErrorMessage").html("Password does not match!");
			}
		}

	})
//
// Logout Function
function logout(){
	$.ajax({
		url: "handler.php",
		type: "post",
		data: {
			action: "logout"
		}
	})
	.done(function(){
		checkIfLoggedIn();
	})
}
	//
	// Logout Click
		$("#btnLogout").click(function(){
			logout();
			window.location.reload();
		})
	//

function creatTicketNumber()
{

	var ff = order.flightFrom;
	var ft = order.flightTo;

    var ticketNumber = ff.charAt(0)+ft.charAt(0);
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 5; i++ )
        ticketNumber += possible.charAt(Math.floor(Math.random() * possible.length));

    return ticketNumber;
}
function saveTicketSql(){
	var sOrder = JSON.stringify(order);
	$.ajax({
		url: "handler.php",
		type: "post",
		data: {
			action: "saveTicket",
			order: sOrder
		}
	})
	.done(function(){
	})
}
// Choose flight!
$(document).on('click', '.ticket', function(){
	var ticketID = parseInt($(this).attr("data-ticketID"));
	var flightFrom = $(this).attr("data-flightFrom");
	var flightTo = $(this).attr("data-flightTo");
	var ticketPrice = parseInt($(this).html());

	order.ticketID = ticketID;
	order.totalPrice = ticketPrice;
	order.flightFrom = flightFrom;
	order.flightTo = flightTo;

	$("#ticketFlightFrom").html(flightFrom);
	$("#ticketFlightTo").html(flightTo);
	$("#totalTicketCost").html(ticketPrice);

	if(loggedIn == 1){
		changePage("pageTicketDetails");

		$("#inpFirstname").val(order.passengers[0].firstname);
		$("#inpLastname").val(order.passengers[0].lastname);
	}
	else {
		changePage("pageUserDetails");
	}
	
})
// Write in details!
$(document).on('click', '#btnContinueToPayment', function(){
	var gender = $("#selTitle").val();
	var firstname = $("#inpFirstname").val();
	var lastname = $("#inpLastname").val();
	var passport = $("#passport").val();
	var phone = $("#phone").val();
	var ticketNumber = creatTicketNumber();

	if(!firstname.trim() || !lastname.trim() || !passport.trim()){
		console.log("fill out inputs");
		$("#ticketsError").html("Missing inputs!");
	}
	else if(!phone.trim()){		
		order.passengers[0].firstname = firstname;
		order.passengers[0].lastname = lastname;
		order.passengers[0].gender = gender;
		order.passengers[0].passport = passport;
		order.passengers[0].phone = 0;
		order.passengers[0].ticketNumber = ticketNumber;

		changePage("pagePaymentOptions");
	}
	else {
		order.passengers[0].firstname = firstname;
		order.passengers[0].lastname = lastname;
		order.passengers[0].gender = gender;
		order.passengers[0].passport = passport;
		order.passengers[0].phone = phone;
		order.passengers[0].ticketNumber = ticketNumber;

		changePage("pagePaymentOptions");
	}
})
function sendSMS(phoneNumber){
	$.ajax({
		url: "handler.php",
		type: "post",
		data: {
			action: "sendSMS",
			phone: phoneNumber
		}
	})
}
// Enter payment!
$(document).on('click', '#btnConfirmOrder', function(){
	var cardType = $("input[name=cardType]:checked").val();
	var cardName = $("#inpCardname").val();
	var cardNumber = $("#inpCardNumber").val();
	var expMonth = $("#inpValidMonth").val();
	var expYear = $("#inpCardname").val();
	var cvcCode = $("#inpSecurityCode").val();

	if($("input[name=cardType]").is(':checked')){
		if(!cardName.trim() || !cardNumber.trim() || !expMonth.trim() || !expYear.trim() || !cvcCode.trim()){
			$(".ticketsError").html("Fill out all the fields!");
		}
		else {
			order.payment.cardType = cardType;
			order.payment.name = cardName;
			order.payment.cardNumber = cardNumber;
			order.payment.expMonth = expMonth;
			order.payment.expYear = expYear;
			order.payment.cvcCode = cvcCode;
			if(order.passengers[0].phone == 0){
				saveTicketSql();

				changePage("pageAfterOrder");
			}
			else{
				sendSMS(order.passengers[0].phone);
				saveTicketSql();

				changePage("pageAfterOrder");
			}

		}
	}
	else {
		console.log("Not checked!");
	}
})

function getTravelsForCustomer(){
	$("#travelTableBody").empty();
	$.ajax({
		url: "handler.php",
		dataType: "json",
		type: "post",
		data: {
			action: "getTravelsForCustomer"
		}
	})
	.done(function(oResponse){

		for (var i = 0; i < oResponse.length; i++) {
		var travelInformationID = oResponse[i].id;
		var airportDeparture = oResponse[i].departure_airport_name;
		var airportDepartureCode = oResponse[i].departure_airport_code;
		var airportArrival = oResponse[i].arrival_airport_name;
		var airportArrivalCode = oResponse[i].arrival_airport_code;
		var departureDatetime = oResponse[i].departure_datetime;
		var flightNumber = oResponse[i].flight_number;

		var travelsTableRows = '<tr id="travelID'+travelInformationID+'"><td>'+airportDeparture+'</td><td>'+airportArrival+'</td><td>'+departureDatetime+'</td><td>'+flightNumber+'</td></tr>';
		$("#travelTableBody").append(travelsTableRows);

		getTravelsForCustomerTickets(travelInformationID, airportDepartureCode, airportArrivalCode);
		};
	})
}
function getTravelsForCustomerTickets(travelInformationID, from, to){
	$.ajax({
		url: "handler.php",
		type: "post",
		dataType: "json",
		data: {
			action: "getTravelsForCustomerTickets",
			tiID: travelInformationID
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var ticketPrice = oResponse[i].price;
			var ticketID = oResponse[i].id;
			var ticketClass = oResponse[i].class;
			$("#travelID"+travelInformationID).append('<td><a href="#" data-ticketID="'+ticketID+'" data-flightFrom="'+from+'" data-flightTo="'+to+'" class="ticket">'+ticketPrice+',- ('+ticketClass+')</a></td>');
		};
	})
}
$("#btnSaveAccountInformation").click(function(){
	var customerID = order.customerID;
	var firstname = $("#accountFirstname").val();
	var lastname = $("#accountLastname").val();
	var email = $("#accountEmail").val();
	var cpr = $("#accountCPR").val();
	var password = $("#accountPassword").val();

	$.ajax({
		url: "handler.php",
		type: "post",
		data: {
			action: "updateAccount",
			cID: customerID,
			accFirstname: firstname,
			accLastname: lastname,
			accEmail: email,
			accCPR: cpr,
			accPassword: password
		}
	})
	.done(function(){
		login(email, password);
		window.location.reload();
	})
})
$("#btnDeleteAccountInformation").click(function(){
	var customerID = order.customerID;
	$.ajax({
		url: "handler.php",
		type: "post",
		data: {
			action: "deleteAccount",
			cID: customerID
		}
	})
	.done(function(){
		window.location.reload();
		logout();
	})
})