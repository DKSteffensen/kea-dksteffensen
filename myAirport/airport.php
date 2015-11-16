<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="airport.css">
</head>
<body>
	<nav>
		<div id="navAccount">		
			<ul>
				<li><a href="#" class="navScrollTo" data-page="page1">flights (Flights, Tickets, Passengers to certain flight)</a></li>
				<li><a href="#" class="navScrollTo" data-page="page2">Passengers Database</a></li>		
				<li><a href="#" class="navScrollTo" data-page="page3">Fleet (List all airplanes)</a></li>
				<li><a href="#" class="navScrollTo" data-page="page4">ControlPanel (Upcoming Travels, free airplanes)</a></li>
				<li><a href="#" class="navScrollTo" data-page="page5">World Map</a></li>
				<li><a href="#" class="navScrollTo" data-page="page6">Account</a>
					<ul>
						<li>Hello, Username</li>
						<li><a href="">Profile Settings</a></li>
						<li><a href="">Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
		
		
		
		
	</nav>

	<div id="contentBG">
		<div id="contentMask">


			<div class="page" id="page1">

				<div id="flightsMenu" class="btnSubMenuWrap">
					<div id="btnFlightsNew" class="btnSubMenuIcon">
						<i class="fa fa-map fa-subIcon fa-newFlight"></i>
						<div id="" class="onHover onHoverBG lblSubMenu">New Flights</div>
						<div id="" class="onHover lblClick">Click</div>
					</div>

					<div id="btnFlightsList" class="btnSubMenuIcon">
						<i class="fa fa-bars fa-subIcon fa-listFlights"></i>
						<div id="" class="onHover onHoverBG lblSubMenu">List Current Flights</div>
						<div id="" class="onHover lblClick">Click</div>
					</div>
				</div>



				<div id="flightsNew" class="hiddenPage">



					<div id="" class="pageHeader">
						Create new <span>flight</span>.
					</div>



					<div id="" class="pageContent">
						<div id="flightsNewWrap">
							<div id="newFlightLeft">
								<div class="inputLabel">
									Flightnumber
								</div>
								<div class="inputLabel">
									Airplane
								</div>
								<div class="inputLabel">
									Departure Airport
								</div>
								<div class="inputLabel">
									Departure Time
								</div>
								<div class="inputLabel">
									Arrival Airport
								</div>
								<div class="inputLabel">
									Arrival Time
								</div>
							</div>
							<div id="newFlightRight">
								<div class="inputLabel">
									<input type="text" placeholder="Flight Number">
									<button><i class="fa fa-repeat"></i></button>
								</div>
								<div class="inputLabel">
									<select name="airplane" id="">
										<option value="">Airplane 1</option>
										<option value="">Airplane 2</option>
										<option value="">Airplane 3</option>
										<option value="">Airplane 4</option>
									</select>
									<span id="airplaneSeats">Seats: 333</span>
								</div>
								<div class="inputLabel">
									<select name="departureAirport" id="">
										<option value="">Airport 1</option>
										<option value="">Airport 2</option>
										<option value="">Airport 3</option>
										<option value="">Airport 4</option>
									</select>
								</div>
								<div class="inputLabel">
									<input type="text" placeholder="Departure Time">
								</div>
								<div class="inputLabel">
									<select name="arrivalAirport" id="">
										<option value="">Airport 1</option>
										<option value="">Airport 2</option>
										<option value="">Airport 3</option>
										<option value="">Airport 4</option>
									</select>
								</div>
								<div class="inputLabel">
									<input type="text" placeholder="Arrival Time">
								</div>
							</div>
						</div>

						<div class="clear"></div>

						<br><hr><br>

						<div id="flightsTicketsWrap">
							<div class="ticketType">
							<h4>
								Ticket 1
							</h4>
								<table>
									<thead>
										<tr>
											<th>Ticket Class</th>
											<th>Price</th>
											<th>Number of Tickts</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><input type="text" placeholder="Class"></td>
											<td><input type="number" placeholder="Price"></td>
											<td><input type="text" placeholder="Number of tickets"></td>
										</tr>
									</tbody>
								</table>
							</div>


							<div class="ticketType">
							<h4>
								Ticket 2
							</h4>
								<table>
									<thead>
										<tr>
											<th>Ticket Class</th>
											<th>Price</th>
											<th>Number of Tickts</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><input type="text" placeholder="Class"></td>
											<td><input type="number" placeholder="Price"></td>
											<td><input type="text" placeholder="Number of tickets"></td>
										</tr>
									</tbody>
								</table>
							</div>


							<div class="ticketType">
							<h4>
								Ticket 3
							</h4>
								<table>
									<thead>
										<tr>
											<th>Ticket Class</th>
											<th>Price</th>
											<th>Number of Tickts</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><input type="text" placeholder="Class"></td>
											<td><input type="number" placeholder="Price"></td>
											<td><input type="text" placeholder="Number of tickets"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>


					</div>	



					<div id="flightsListFooter" class="pageFooter">
						<button class="btnFlightsBack">Back</button>
					</div>
				</div>



				<div id="flightsList" class="hiddenPage">



					<div id="flightsListHeader" class="pageHeader">
						List of <span>active</span> fights.
					</div>



					<div id="flightsListContent" class="pageContent">
						<table class="tableDesign">
							<thead>
								<tr>
									<th>FLIGHT NUMBER</th>
									<th>DEPARTURE</th>
									<th>DEPARTURE TIME</th>
									<th>ARRIVAL</th>
									<th>ARRIVAL TIME</th>
									<th>EDIT FLIGHT</th>
									<th>PASSENGERS</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>DS7561</td>
									<td>CPH</td>
									<td>19/11/15 - 15:00</td>
									<td>ATL</td>
									<td>19/11/15 - 23:30</td>
									<td class="tableLink"><a href="#"><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#"><i class="fa fa-list"></i></a></td>
								</tr>
								<tr>
									<td>DS7486</td>
									<td>CPH</td>
									<td>21/11/15 - 07:00</td>
									<td>AMS</td>
									<td>21/11/15 - 08:45</td>
									<td class="tableLink"><a href="#"><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#"><i class="fa fa-list"></i></a></td>
								</tr>
							</tbody>
						</table>
					</div>



					<div id="flightsListFooter" class="pageFooter">
						<button class="btnFlightsBack">Back</button>
					</div>



				</div>

			</div>








			<div class="page" id="page2">pageer - 2</div>








			<div class="page" id="page3">pageer - 3</div>








			<div class="page" id="page4">pageer - 4</div>








			<div class="page" id="page5">World Map</div>








			<div class="page" id="page6">pageer - 6</div>
		</div>
	</div>
	<script src="js/jquery-1.11.3.min.js"></script>
	<script src="js/jquery.scrollTo-1.4.3.1-min.js"></script>
	<script src="airport.js"></script>
	<script src="flights.js"></script>

	<script>
	//
	// ScrollTo Plugin.
	var $target = $('#contentBG');	
	$('.navScrollTo').click(function(){
		var page = $(this).attr("data-page");
		$target.scrollTo( $('#'+page) , 500);
	});
	//
	</script>
</body>
</html>