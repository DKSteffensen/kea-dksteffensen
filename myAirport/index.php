<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>DS Airlines</title>
	<link rel="stylesheet" href="index.css">
</head>
<body>

	<nav>
		<div id="navMain">
			<span id="logo"><a href="#" id="backToFrontpage">Buy Tickets</a></span>
			<span class="mainNavMargin"><a href="airport.php">To admin system</a></span>
		</div>
		<div id="navAccount">
			<div id="loggedIn" class="hidden">
				<ul>
					<li>
						<span id="accountMessage">Welcome <span id="loggedInFirstname">Firstname</span> <span id="loggedInLastname">lastname</span></span>
					</li>
					<li><a href="#">Account</a>
						<ul>
							<li><a href="#" id="orderHistory">Order History</a></li>
							<li><a href="#" id="accountDetails">Account Details</a></li>
						</ul>
					</li>
					<li><a href="#" id="btnLogout">Logout</a></li>
				</ul>
			</div>
			<div id="loggedOut" class="hidden">
				<ul>
					<li>
						<div id="loginWrap">
							<input type="text" id="userEmail" value="" placeholder="Email">
							<input type="password" id="userPassword" value="" placeholder="Password">
						</div>
					</li>
					<li>
						<div id="loginButtonWrap">
							<button id="btnLogin">LOGIN</button>
						</div>
					</li>
				</ul>
			<span class="mainNavMargin">For test login use: Email = 1 & Password = 1</span>				
			</div>
		</div>
	</nav>
	<div id="container">

		<div id="pageTravelTable" class="pages">
			<div id="travelTableWrap">
				<table id="travelTable">
					<thead>
						<tr>
							<td colspan="5">Choose your <span>Destination</span></td>
						</tr>
						<tr>
							<th>From</th>
							<th>Destination</th>
							<th>Date</th>
							<th>Flight nr.</th>
							<th>Ticket 1</th>
							<th>Ticket 2</th>
							<th>Ticket 3</th>
						</tr>
					</thead>
					<tbody id="travelTableBody">
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>Atlanta (ATL)</td>
							<td>04/11 - 2015</td>
							<td>DS7561</td>
							<td><a href="#" data-ticketID="2" data-flightFrom="CPH" data-flightTo="ATL" class="ticket">9800,-</a></td>
							<td><a href="#" data-ticketID="1" data-flightFrom="CPH" data-flightTo="ATL" class="ticket">14900,-</a></td>
							<td>-</td>
						</tr>
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>Paris (CDG)</td>
							<td>05/11 - 2015</td>
							<td>DS7486</td>
							<td><a href="#" data-ticketID="3" data-flightFrom="CPH" data-flightTo="CDG" class="ticket">2400,-</a></td>
							<td><a href="#" data-ticketID="4" data-flightFrom="CPH" data-flightTo="CDG" class="ticket">1300,-</a></td>
							<td>-</td>
						</tr>
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>Amsterdam (AMS)</td>
							<td>06/11 - 2015</td>
							<td>DS7451</td>
							<td><a href="#" data-ticketID="5" data-flightFrom="CPH" data-flightTo="AMS" class="ticket">1100,-</a></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>London (LHR)</td>
							<td>07/11 - 2015</td>
							<td>DS6921</td>
							<td><a href="#" data-ticketID="6" data-flightFrom="CPH" data-flightTo="LHR" class="ticket">2200,-</a></td>
							<td><a href="#" data-ticketID="7" data-flightFrom="CPH" data-flightTo="LHR" class="ticket">1300,-</a></td>
							<td>-</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div id="pageUserDetails" class="pages hidden">
			<div id="userDetailsWrap">
				<div id="userDetails" class="contentWidth">
					<div id="userDetailsLogin">

						<div id="userDetailsLoginWrap">
								<span>Login</span>
								<input type="text" id="lblLoginEmail" placeholder="Email" value="">
								<input type="text" id="lblLoginPassword" placeholder="Password" value="">
								<button id="btnLoginSubmit">LOGIN</button>
								<span class="errorMessage"></span>
						</div>

					</div>
					<div id="userDetailsBorder"></div>
					<div id="userDetailsSignup">					

						<div id="userDetailsSignupWrap">
								<span>Signup</span>
								<input type="text" id="lblSignupFirstname" placeholder="Firstname" value="">
								<input type="text" id="lblSignupLastname" placeholder="Lastname" value="">
								<input type="text" id="lblSignupEmail" placeholder="Email" value="">
								<input type="text" id="lblSignupCPR" placeholder="CPR" value="">
								<input type="text" id="lblSignupPassword" placeholder="Password" value="">
								<input type="text" id="lblSignupPasswordRetype" placeholder="Re-type Password" value="">
								<button id="btnSignupSubmit">SIGNUP</button>
								<span class="signupErrorMessage"></span>
						</div>	

					</div>
				</div>
			</div>
		</div>

		<div id="pageTicketDetails" class="pages hidden">
			<div id="ticketDetailsWrap">
				<div id="ticketDetails" class="contentWidth">

					<div class="title">
						<div>
							Buying tickets from <span id="ticketFlightFrom"></span> to <span id="ticketFlightTo"></span>
						</div>
						<div id="ticketsTotalCost">
							Total cost <span id="totalTicketCost"></span>,-
						</div>
					</div>
					<div id="ticketDetailsAmount">
<!-- 						<div id="ticketAmount">
							<select name="" id="numberOfTickets">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							<span>Please select the number of tickets you want to buy.</span>
						</div> -->

						<div id="ticketsWrap">
							<div class="tickets">								
								<select name="" id="selTitle">
									<option value="Mr">Mr.</option>
									<option value="Mrs">Mrs.</option>
								</select>
								<input type="text" id="inpFirstname" placeholder="Firstname" value="">
								<input type="text" id="inpLastname" placeholder="Lastname" value="">
								<input type="text" id="passport" placeholder="Passport nr." value="">
								<input type="text" id="phone" placeholder="Phonenumber(optinal)" value="">
							</div>
						</div>
					</div>
					<div class="ticketsError"></div>
					<div id="ticketsContinue">
						<button id="btnContinueToPayment">CONTINUE TO CHECK-OUT</button>
					</div>

				</div>
			</div>
		</div>

		<div id="pagePaymentOptions" class="pages hidden">
			<div id="paymentOptionsWrap">
				<div id="paymentOptions" class="contentWidth">
					<div class="title">
						Checkout
					</div>

					<div id="paymentCreditcard">
						<div id="chooseCard">
							<input type="radio" name="cardType" value="Visa"> Visa
							<input type="radio" name="cardType" value="Mastercard"> Mastercard
							<input type="radio" name="cardType" value="Eurocard"> Eurocard
						</div>
						<div id="cardInformation">
							<input type="text" id="inpCardname" placeholder="Name on card" value="">
							<input type="text" id="inpCardNumber" placeholder="Cardnumber" value="">
							<div id="cardInformationTwo">
								<input type="number" id="inpValidMonth" placeholder="Month" value="">
								<input type="number" id="inpValidYear" placeholder="Year" value="">
								<input type="number" id="inpSecurityCode" placeholder="Security Code" value="">
							</div>
						</div>
					</div>
					<div id="confirmOrder">
						<div class="ticketsError"></div>
						<button id="btnConfirmOrder">CONFIRM ORDER</button>
					</div>

				</div>
			</div>			
		</div>

		<div id="pageAfterOrder" class="pages hidden">
			<div id="afterOrderWrap">
				<div id="afterOrder" class="contentWidth">
					<div class="title">
						Thank you for you purchase, we hope you will enjoy your flight with us.
					</div>
				</div>
			</div>
		</div>

		<div id="pageAccount" class="pages hidden">
			<div id="accountWrap">
				<div id="account" class="contentWidth">
					<div class="title">
						Account
					</div>

					<div id="accountInformation">
						<input type="text" id="accountFirstname" placeholder="Firstname" value="">
						<input type="text" id="accountLastname" placeholder="Lastname" value="">
						<input type="text" id="accountEmail" placeholder="Email" value="">
						<input type="text" id="accountCPR" placeholder="CPR" value="">
						<input type="password" id="accountPassword" placeholder="Password" value="">
						<button id="btnSaveAccountInformation">SAVE</button>
						<button id="btnDeleteAccountInformation">DELETE</button>
					</div>
				</div>
			</div>
		</div>

	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

	<script src="index.js"></script>
	
</body>
</html>