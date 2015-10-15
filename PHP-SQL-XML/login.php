<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login AJAX</title>
	<link href='https://fonts.googleapis.com/css?family=Quicksand:400,300|Roboto:400,300,700|Ubuntu:400,500|Exo+2:400,300' rel='stylesheet' type='text/css'>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
	<!-- Font Awesome CDN -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
</head>
<body>

<div class="container-fluid" id="lblHeader">


</div>

<input type="text" id="lblUsername" value="" placeholder="Username">
<input type="password" id="lblPassword" value="" placeholder="Password">
<button id="btnLogin">Login</button>

<div>
	<input type="text" id="lblUsernameSignup" placeholder="Username">
	<input type="password" id="lblPasswordSignupOne" placeholder="Password">
	<input type="password" id="lblPasswordSignupTwo" placeholder="Repeat Password">
	<input type="text" id="lblFirstname" placeholder="Firstname">
	<input type="text" id="lblLastname" placeholder="Lastname">
	<input type="number" id="lblAge" placeholder="Age">
	<button id="btnSignup">Signup</button>
</div>
	<!-- Javascript & jQuery libraries -->
	<!-- jQuery 1.x snippet -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- <script src="js/jquery-1.11.3.min.js"></script> -->
	<!-- jQuery 2.x snippet -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<!-- <script src="js/jquery-2.1.4.min.js"></script> -->
	<!-- jQuery 1.x UI -->
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	<!-- <script src="js/jquery-ui.min.js"></script> -->
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<!-- <script src="js/bootstrap.min.js"></script> -->

	<script>
	$("#btnLogin").click(function(){
		var strUsername = $("#lblUsername").val();
		var strPassword = $("#lblPassword").val();
		$.ajax({
			url: "handler.php",
			type: "post",
			dataType: "json",
			data: {
				function: "login",
				username: strUsername,
				password: strPassword
			}
		})
		.done(function(response){
			var strResponse = response.response;
			var strFirstname = response.firstname;
			var strLastname = response.lastname;
			var strAge = response.age;
			var responseClass;

			if(strResponse == "true"){
				console.log("Login succesfull");
				responseClass = "success";
				$("#lblHeader").html('<div class="alert alert-'+responseClass+' alert-dismissible" role="alert">Welcome '+strFirstname+' '+strLastname+', you are really old, huh? '+strAge+' years!!!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
			}
			else if(strResponse == "nouser"){
				responseClass = "warning";
				$("#lblHeader").html('<div class="alert alert-'+responseClass+'" role="alert">User or Password incorrect!</div>');
			}
			else if(strResponse == "error"){
				responseClass = "danger";
				$("#lblHeader").html('<div class="alert alert-'+responseClass+'" role="alert">Fatal error, contact page admin <a href="#">here</a></div>');
			}
		})
		.fail(function(){
			console.log("Something went wrong in the system! Contact the page administrator.");
		})
	})

	$("#btnSignup").click(function(){
		var strUsername = $("#lblUsernameSignup").val();
		var strPassword = $("#lblPasswordSignupOne").val();
		var strPasswordTwo = $("#lblPasswordSignupTwo").val();
		var strFirstname = $("#lblFirstname").val();
		var strLastname = $("#lblLastname").val();
		var strAge = $("#lblAge").val();

		if (strPassword == strPasswordTwo) {
			$.ajax({
				url: "handler.php",
				type: "post",
				data: {
					function: "signup",
					username: strUsername,
					password: strPassword,
					firstname: strFirstname,
					lastname: strLastname,
					age: strAge
				}
			})
			.done(function(response){
				console.log(response);
			})			
		}
		else {
			console.log("password doesnt match!");
		}
	})
	</script>
	
</body>
</html>