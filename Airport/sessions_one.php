<?php
	session_start();

	if(isset($_POST['myName'])){

		$_SESSION['myName'] = $_POST['myName'];

	}
	if (isset($_SESSION['myName'])) {
		echo $_SESSION['myName'];
	}
		
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Session One</title>
</head>
<body>
<form method="post">
	<input id="lblName" type="text" name="myName" placeholder="Name"></input>
	<input id="btnSaveSession" type="submit" value="Save Session"></input>
</form>

<form action="sessions_two.php">
	<input id="btnUnsetSession" type="submit" value="Unset Session"></input>
</form>


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
</body>
</html>