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
				<span id="loggedIn" class="menuActive">
				<li><a href="#" id="btnMainMenuFlightsManagement" class="navScrollTo" data-page="flightsManagement">Flights Management</a></li>
				<li><a href="#" id="btnMainMenuCustomerDatabase" class="navScrollTo" data-page="customerDatabase">Customer Database</a></li>		
				<li><a href="#" id="btnMainMenuFleet" class="navScrollTo" data-page="fleet">Fleet</a></li>
				<li><a href="#" class="navScrollTo" data-page="worldMap">World Map</a></li>
					<li><a href="#" class="navScrollTo" data-page="account">Account</a>
						<ul>
							<li><p>Hello, Username</p></li>
							<li><a href="#">Profile Settings</a></li>
							<li><a href="#">Logout</a></li>
						</ul>
					</li>
				</span>
				<span id="loggedOut" class="hiddenMenu">
					<li>
						<input type="text" id="loginUsername" placeholder="Username">
					</li>
					<li>
						<input type="password" id="loginPassword" placeholder="Password">
					</li>
					<li>
						<button id="btnLogin"><i class="fa fa-sign-in"></i></button>
					</li>
					
				</span>
			</ul>
		</div>
	</nav>

	<div id="contentBG">
		<div id="contentMask">


			<div class="page" id="flightsManagement">

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



				<div id="flightsNew" class="hiddenPage mainPage">



					<div id="" class="pageHeader">
						<div id="headerText">
							Create new <span>flight</span>.
						</div>
						<div id="headerBackBtn">
							<button class="btnBack btnMainPage">Back</button>
						</div>
						
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
									<span id="airplaneSeats">Seats: 0</span>
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
								<table class="ticketTypeTable">
									<thead>
											<tr>
												<th colspan="3">													
													<h4>
														Ticket 1
													</h4>
												</th>
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
								<table class="ticketTypeTable">
									<thead>
											<tr>
												<th colspan="3">													
													<h4>
														Ticket 2
													</h4>
												</th>
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
								<table class="ticketTypeTable">
									<thead>
											<tr>
												<th colspan="3">													
													<h4>
														Ticket 3
													</h4>
												</th>
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
					<div class="pageFooter">
						<button class="btnSave">Save</button>						
					</div>
				</div>



				<div id="flightsList" class="hiddenPage mainPage">

					<div id="flightsListHeader" class="pageHeader">						
						<div id="headerText">
							List of <span>active</span> fights.
						</div>
						<div id="headerBackBtn">
							<button class="btnBack btnMainPage">Back</button>
						</div>
					</div>



					<div id="flightsListContent" class="pageContent">
						<table class="tableDesign">
							<thead>
								<tr>
									<th>FLIGHT NUMBER</th>
									<th>AIRPLANE</th>
									<th>DEPARTURE</th>
									<th>DEPARTURE TIME</th>
									<th>ARRIVAL</th>
									<th>ARRIVAL TIME</th>
									<th>PASSENGERS</th>
									<th>TICKETS</th>
									<th>EDIT</th>
									<th>DELETE</th>
								</tr>
							</thead>
							<tbody>
								<tr data-flightID="1">
									<td>DS7561</td>
									<td>OY-DKS</td>
									<td>CPH</td>
									<td>19/11/15 - 15:00</td>
									<td>ATL</td>
									<td>19/11/15 - 23:30</td>
									<td class="tableLink"><a href="#" data-flightID="1" class="btnListPassengers"><i class="fa fa-list"></i></a></td>
									<td class="tableLink"><a href="#" data-flightID="1" class="btnEditTickets"><i class="fa fa-ticket"></i></a></td>
									<td class="tableLink"><a href="#" data-flightID="1" class=""><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#" data-flightID="1" class=""><i class="fa fa-ban"></i></a></td>
								</tr>
								<tr data-flightID="1">
									<td>DS7486</td>
									<td>OY-JDE</td>
									<td>CPH</td>
									<td>21/11/15 - 07:00</td>
									<td>AMS</td>
									<td>21/11/15 - 08:45</td>
									<td class="tableLink"><a href="#" data-flightID="2" class="btnListPassengers"><i class="fa fa-list"></i></a></td>
									<td class="tableLink"><a href="#" data-flightID="2" class="btnEditTickets"><i class="fa fa-ticket"></i></a></td>
									<td class="tableLink"><a href="#" data-flightID="2" class=""><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#" data-flightID="2" class=""><i class="fa fa-ban"></i></a></td>
								</tr>
								<tr data-flightID="1">
									<td><input class="tableInputEdit" type="text" value="DS7486"></td>
									<td><input class="tableInputEdit" type="text" value="OY-JDE"></td>
									<td><input class="tableInputEdit" type="text" value="CPH"></td>
									<td><input class="tableInputEdit" type="text" value="21/11/15 - 07:00"></td>
									<td><input class="tableInputEdit" type="text" value="AMS"></td>
									<td><input class="tableInputEdit" type="text" value="21/11/15 - 08:45"></td>
									<td colspan="4" class="tableLink"><a href="#" class="" data-flightID="2"><i class="fa fa-floppy-o"></i></a></td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>

					<div id="subFlightsTickets" class="hiddenPage subPage">

					<div id="flightsListHeader" class="pageHeader">						
						<div id="headerText">
							Edit flights <span>Tickets</span>.
						</div>
						<div id="headerBackBtn">
							<button class="btnBack btnSubPage">Back</button>
						</div>
					</div>
						<div class="pageContent">						
							<div class="ticketType">
								<table class="ticketTypeTable">
									<thead>
											<tr>
												<th colspan="3">													
													<h4>
														Ticket 1
													</h4>
												</th>
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
								<table class="ticketTypeTable">
									<thead>
											<tr>
												<th colspan="3">													
													<h4>
														Ticket 2
													</h4>
												</th>
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
						<div class="pageFooter">
							<button class="btnSave">Save</button>						
						</div>
					</div>

					<div id="subFlightsListPassengers" class="hiddenPage subPage">

					<div id="flightsListHeader" class="pageHeader">
						<div id="headerText">
							<span>Passenger</span> list.
						</div>
						<div id="headerBackBtn">
							<button class="btnBack btnSubPage">Back</button>
						</div>
					</div>
					<div class="pageContent">
						<table class="tableDesign">
							<thead>
								<tr>
									<th>Ticket Number</th>
									<th>Gender</th>
									<th>Firstname</th>
									<th>Lastname</th>
									<th>Passport</th>
									<th>EDIT</th>
									<th>REMOVE</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>CABH1BL</td>
									<td><i class="fa fa-male"></i></td>
									<td>Daniel</td>
									<td>Kristian</td>
									<td>5436722111</td>
									<td class="tableLink"><a href="#" class="" data-flightID="1"><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#" class="" data-flightID="1"><i class="fa fa-ban"></i></a></td>
								</tr>
								<tr>
									<td><input class="tableInputEdit" type="text" value="CABH1BL"></td>
									<td>
										<select name="" id="" class="tableInputEdit">
											<option value="">Mr.</option>
											<option value="">Ms.</option>
										</select>
									</td>
									<td><input class="tableInputEdit" type="text" value="Daniel"></td>
									<td><input class="tableInputEdit" type="text" value="Kristian"></td>
									<td><input class="tableInputEdit" type="text" value="5436722111"></td>
									<td colspan="2" class="tableLink"><a href="#" class="" data-passengerID="13"><i class="fa fa-floppy-o"></i></a></td>
								</tr>
							</tbody>
						</table>					
					</div>
					</div>

			</div>








			<div class="page" id="customerDatabase">

				<div id="customerList" class="pageActive mainPage">

					<div id="" class="pageHeader">						
						<div id="headerText">
							Customer <span>database</span>.
						</div>
					</div>
					<div id="" class="pageContent">
						<table class="tableDesign">
							<thead>
								<tr>
									<th>FIRSTNAME</th>
									<th>LASTNAME</th>
									<th>EMAIL</th>
									<th>CPR</th>
									<th>PASSWORD</th>
									<th>TICKETS</th>
									<th>EDIT </th>
									<th>DELETE</th>
								</tr>
							</thead>
							<tbody id="customersDatabaseTableBody">
								<tr>
									<td>Daniel</td>
									<td>Steffensen</td>
									<td>d_kristian_s@hotmail.com</td>
									<td>160487-****</td>
									<td>******</td>
									<td class="tableLink"><a href="#" class="btnCustomerTickets"><i class="fa fa-list"></i></a></td>
									<td class="tableLink"><a href="#"><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#" class=""><i class="fa fa-ban"></i></a></td>
								</tr>
								<tr>
									<td>Random</td>
									<td>Person</td>
									<td>test</td>
									<td>123456-7890</td>
									<td>******</td>
									<td class="tableLink"><a href="#" class="btnCustomerTickets"><i class="fa fa-list"></i></a></td>
									<td class="tableLink"><a href="#"><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#" class=""><i class="fa fa-ban"></i></a></td>
								</tr>
								<tr>
									<td><input class="tableInputEdit" type="text" value="Random"></td>
									<td><input class="tableInputEdit" type="text" value="Person"></td>
									<td><input class="tableInputEdit" type="text" value="test"></td>
									<td><input class="tableInputEdit" type="text" value="123456-7890"></td>
									<td><input class="tableInputEdit" type="password" value="test12"></td>
									<td colspan="3" class="tableLink"><a href="#" class=""><i class="fa fa-floppy-o"></i></a></td>
								</tr>
							</tbody>
						</table>
						
					</div>
					
				</div>

				<div id="customerTicketList" class="hiddenPage subPage">

					<div id="" class="pageHeader">
						<div id="headerText">
							<span>Name, Lastname</span>'s tickets.
						</div>
						<div id="">
							<button class="btnBack btnSubPage">Back</button>
						</div>
					</div>
					<div id="" class="pageContent">
						<table class="tableDesign">
							<thead>
								<tr>
									<th>TICKET</th>
									<th>GENDER</th>
									<th>FIRSTNAME</th>
									<th>LASTNAME</th>
									<th>PASSPORT</th>
									<th>CLASS</th>
									<th>PRICE</th>
									<th>DEPARTURE</th>
									<th>FROM</th>
									<th>TO</th>
									<th>EDIT </th>
									<th>DELETE</th>
								</tr>
							</thead>
							<tbody id="customersTicketsTableBody">
								<tr id="ticketID">
									<td class="ticketNumber">CABH1BL</td>
									<td class="ticketGender" data-gender=""><i class="fa fa-male"></i></td>
									<td class="ticketFirstname">Daniel</td>
									<td class="ticketLastname">Steffensen</td>
									<td class="ticketPassport">5436722111</td>
									<td class="ticketClass">Business</td>
									<td class="ticketPrice">14900</td>
									<td class="ticketDepartureDatetime">16/11/15 - 16:00</td>
									<td class="ticketDepartureAirport">CPH</td>
									<td class="ticketArrivalAirport">ATL</td>
									<td class="tableLink"><a href="#" class="btnEditTicket" data-ticketID=""><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#" class="btnDeleteTicket" data-ticketID=""><i class="fa fa-ban"></i></a></td>
								</tr>
								<tr>
									<td>CABH1BL</td>
									<td><i class="fa fa-male"></td>
									<td>Daniel</td>
									<td>Steffensen</td>
									<td>5436722111</td>
									<td>Business</td>
									<td>14900</td>
									<td>16/11/15 - 16:00</td>
									<td>CPH</td>
									<td>ATL</td>
									<td class="tableLink"><a href="#"><i class="fa fa-pencil-square-o"></i></a></td>
									<td class="tableLink"><a href="#" class=""><i class="fa fa-ban"></i></a></td>
								</tr>
								<tr>
									<td><input class="tableInputEdit" type="text" value="CABH1BL"></td>
									<td><input class="tableInputEdit" type="text" value="Mr."></td>
									<td><input class="tableInputEdit" type="text" value="Daniel"></td>
									<td><input class="tableInputEdit" type="text" value="Steffensen"></td>
									<td><input class="tableInputEdit" type="text" value="5436722111"></td>
									<td><input class="tableInputEdit" type="text" value="Business"></td>
									<td><input class="tableInputEdit" type="text" value="14900"></td>
									<td><input class="tableInputEdit" type="text" value="16/11/15 - 16:00"></td>
									<td><input class="tableInputEdit" type="text" value="CPH"></td>
									<td><input class="tableInputEdit" type="text" value="ATL"></td>
									<td colspan="2" class="tableLink"><a href="#" class=""><i class="fa fa-floppy-o"></i></a></td>
								</tr>
							</tbody>
						</table>

					</div>
				</div>



			</div>








			<div class="page" id="fleet">

					<div id="flightsListHeader" class="pageHeader">						
						<div id="headerText">
							DSAirlines <span>fleet</span>.
						</div>
<!-- 						<div id="headerBackBtn">
							<button class="btnBack">Back</button>
						</div> -->
					</div>
					<div id="" class="pageContent">
						<table class="tableDesign">
							<thead>
								<tr>
									<th>ID</th>
									<th>REG. NUMBER</th>
									<th>BRAND</th>
									<th>MODEL</th>
									<th>CAPACITY</th>
									<th>CLASSES</th>
									<th>MAX SPEED</th>
									<th>LIST FLIGHTS</th>
								</tr>
							</thead>
							<tbody id="fleetTableBody">
								<tr>
									<td>1</td>
									<td>OY-WXS</td>
									<td>Airbus</td>
									<td>A380-800</td>
									<td>853</td>
									<td>1</td>
									<td>945</td>
									<td class="tableLink"><a href="#"><i class="fa fa-list"></i></a></td>
								</tr>
								<tr>
									<td>9</td>
									<td>OY-DKS</td>
									<td>Boeing</td>
									<td>787-10</td>
									<td>330</td>
									<td>2</td>
									<td>954</td>
									<td class="tableLink"><a href="#"><i class="fa fa-list"></i></a></td>
								</tr>
							</tbody>
						</table>
						
					</div>
			</div>








			<div class="page" id="worldMap">
				<div id="map"></div>
			</div>








			<div class="page" id="page5">World Map</div>








			<div class="page" id="account">pageer - 6</div>
		</div>
	</div>
	<script src="js/jquery-1.11.3.min.js"></script>
	<script src="js/jquery.scrollTo-1.4.3.1-min.js"></script>
	<script src="airport.js"></script>
	<script src="flights.js"></script>
	<script src="customerDatabase.js"></script>
	<script src="fleet.js"></script>
	<!--<script src="https://maps.googleapis.com/maps/api/js"></script>-->
	<!--<script src="worldMap.js"></script>-->
</body>
</html>