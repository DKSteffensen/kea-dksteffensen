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
			Logo etc..
		</div>
		<div id="navAccount">
			<div id="loggedIn">
				<ul>
					<li>
						<span id="accountMessage">Welcome Firstname lastname</span>
					</li>
					<li><a href="#">Account</a>
						<ul>
							<li><a href="#">Order History</a></li>
							<li><a href="#">Account Details</a></li>
						</ul>
					</li>
					<li><a href="#">Logout</a></li>
				</ul>
			</div>
			<div id="loggedOut">
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
			</div>
		</div>
	</nav>
	<div id="container">

		<div id="pageTravelTable">
			<div id="travelTableWrap">
				<table id="travelTable">
					<thead>
						<tr>
							<td colspan="5">TRAVELS</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>From</th>
							<th>Destination</th>
							<th>Date</th>
							<th>Flight nr.</th>
							<th>Economy</th>
							<th>Business</th>
							<th>First</th>
						</tr>
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>Atlanta (ATL)</td>
							<td>04/11 - 2015</td>
							<td>DS7561</td>
							<td><a href="#">9800,-</a></td>
							<td><a href="#">14900,-</a></td>
							<td>-</td>
						</tr>
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>Paris (CDG)</td>
							<td>05/11 - 2015</td>
							<td>DS7486</td>
							<td><a href="#">2400,-</a></td>
							<td><a href="#">1300,-</a></td>
							<td>-</td>
						</tr>
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>Amsterdam (AMS)</td>
							<td>06/11 - 2015</td>
							<td>DS7451</td>
							<td><a href="#">1100,-</a></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>Copenhagen (CPH)</td>
							<td>London (LHR)</td>
							<td>07/11 - 2015</td>
							<td>DS6921</td>
							<td><a href="#">2200,-</a></td>
							<td><a href="#">1300,-</a></td>
							<td>-</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div id="pageUserDetails">
			<div id="userDetailsWrap">
				<div id="userDetails" class="contentWidth">
					<div id="userDetailsLogin">

						<div id="userDetailsLoginWrap">
								<span>Login</span>
								<input type="text" id="lblLoginEmail" placeholder="Email" value="">
								<input type="text" id="lblLoginPassword" placeholder="Password" value="">
								<button id="btnLoginSubmit">LOGIN</button>
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
								<button id="btnSignupSubmit">LOGIN</button>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div id="pageTicketDetails">
			<div id="ticketDetailsWrap">
				<div id="ticketDetails" class="contentWidth">

					<div id="ticketDetailsTravelTitle">
						<div>
							Buying tickets from <span>CPH</span> to <span>ATL</span>
						</div>
						<div id="ticketsTotalCost">
							Total cost <span>1498,-</span>
						</div>
					</div>
					<div id="ticketDetailsAmount">
						<div id="ticketAmount">
							<select name="" id="numberOfTickets">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							<span>Please select the number of tickets you want to buy.</span>
						</div>

						<div id="ticketsWrap">
							<div class="tickets">								
								<select name="" id="selTitle">
									<option value="Mr">Mr.</option>
									<option value="Mrs">Mrs.</option>
								</select>
								<input type="text" id="inpFirstname" placeholder="Firstname">
								<input type="text" id="inpLastname" placeholder="Lastname">
								<input type="text" id="passport" placeholder="Passport nr.">
							</div>
						</div>
					</div>
					<div id="ticketsContinue">
						<button id="btnContinueToPayment">CONTINUE TO CHECK-OUT</button>
					</div>

				</div>
			</div>
		</div>

		<div id="pagePaymentOptions">
			<div id="paymentOptionsWrap">
				<div id="paymentOptions" class="contentWidth">
					<div id="paymentOptionsTitle">
						Checkout
					</div>

					<div id="paymentCreditcard">
						<div id="chooseCard">
							<input type="checkbox"> Visa
							<input type="checkbox"> Mastercard
							<input type="checkbox"> Eurocard
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
						<button id="btnConfirmOrder">CONTINUE TO CHECK-OUT</button>
					</div>

				</div>
			</div>			
		</div>

	</div>
	
</body>
</html>