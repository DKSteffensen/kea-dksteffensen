<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Control Panel</title>
</head>
<body>
<h3>Control Panel</h3>

<p>
	<input type="number" value="0" id="lblCapacity">
	<button id="btnGetPassengers">Get Passengers</button>
</p>

<p>
	<h4>You have received:</h4>
	<p><span id="lblGeneratedNumber">0</span> passengers.</p>
</p>



<!-- Javascript & jQuery libraries -->
<!-- jQuery 1.x snippet -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- <script src="js/jquery-1.11.3.min.js"></script> -->
<!-- jQuery 2.x snippet -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<!-- <script src="js/jquery-2.1.4.min.js"></script> -->
<!-- jQuery 1.x UI -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script> -->
<!-- <script src="js/jquery-ui.min.js"></script> -->
<!-- Latest compiled and minified JavaScript -->
<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> -->
<!-- <script src="js/bootstrap.min.js"></script> -->

<script>

// $("#btnGetPassengers").click(function(){
// 	var getCapacity = $("#lblCapacity").val();
// 	var url = "aiAjax.php?capacity="+getCapacity;
// 	$.get(url, function(sData){
// 		$("#lblGeneratedNumber").html(sData);
// 	})
// });

$("#btnGetPassengers").click(function(){
	var getCapacity = $("#lblCapacity").val();

	$.ajax({
		url: "aiAjax.php",
		type: "post",
		data: {
			capacity: getCapacity
		},
		beforeSend: function(){
			$("#btnGetPassengers").html("Working");
		},
		success: function(sData){
	 		$("#lblGeneratedNumber").html(sData);
			$("#btnGetPassengers").html("Get Passengers");
		},
	})
});
	
</script>
</body>
</html>