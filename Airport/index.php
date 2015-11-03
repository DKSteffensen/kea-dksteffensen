<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>
SQLite3
</title>
</head>
<body>

<div>
	<button id="btnGetInfo">Show Info</button>
</div>
<div id="lblShowInfo">
	
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
	$("#btnGetInfo").click(function(){
		$.ajax({
			url: "handler.php",
			dataType: "json"
		})
		.done(function(ajUsers){
			var infoHTML = '';
			for (var i = 0; i < ajUsers.length; i++) {
				infoHTML += '<p>'+ajUsers[i].id+'. '+ajUsers[i].name+'</p>';
			};
			$("#lblShowInfo").html(infoHTML);
		})
	})
</script>
</body>
</html>