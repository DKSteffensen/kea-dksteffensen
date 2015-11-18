$("#btnFlightsNew").click(function(){
	$("#flightsNew").addClass("pageActive").removeClass("hiddenPage");
	$("#flightsMenu").addClass("hiddenPage").removeClass("pageActive");
})
$("#btnFlightsList").click(function(){
	$("#flightsList").addClass("pageActive").removeClass("hiddenPage");
	$("#flightsMenu").addClass("hiddenPage").removeClass("pageActive");
})
$(".btnMainPage, #btnMainMenuFlightsManagement").click(function(){
	$("#flightsNew").addClass("hiddenPage").removeClass("pageActive");
	$("#flightsList").addClass("hiddenPage").removeClass("pageActive");
	$(".subPage").addClass("hiddenPage").removeClass("pageActive");
	$("#flightsMenu").addClass("pageActive").removeClass("hiddenPage");
})

$(".btnEditTickets").click(function(){
	$(".mainPage").addClass("hiddenPage").removeClass("pageActive");
	$("#subFlightsTickets").removeClass("hiddenPage").addClass("pageActive");

	var flightID = $(this).attr("data-flightID");
})
$(".btnListPassengers").click(function(){
	$(".mainPage").addClass("hiddenPage").removeClass("pageActive");
	$("#subFlightsListPassengers").removeClass("hiddenPage").addClass("pageActive");

	var flightID = $(this).attr("data-flightID");
})
$(".btnSubPage").click(function(){
	$("#flightsList").removeClass("hiddenPage").addClass("pageActive");
	$(".subPage").addClass("hiddenPage").removeClass("pageActive");
})