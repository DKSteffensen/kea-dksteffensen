<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<table border="1">
		<thead>
			<tr>
				<td>ID</td>
				<td>Reg. Number</td>
				<td>Model</td>
				<td>Max Speed</td>
				<td>Max Distance</td>
				<td>Fuel Capacity</td>
				<td>Fuel Consumption</td>
				<td>Pass.Capacity</td>
			</tr>
		</thead>
		<tbody id="tblShowAirplanes">
			
		</tbody>
	</table>

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

	<script>

	function showAirplanes(){
		$.ajax({
			url: "mysql.php",
			dataType: "json"
		})
		.done(function(jAirplanes){
			console.log(jAirplanes);
			var tShowAirplanesHTML = "";
			for (var i = 0; i < jAirplanes.length; i++) {
				var id = jAirplanes[i].id;
				var regNumber = jAirplanes[i].reg_number;
				var model = jAirplanes[i].model;
				var maxSpeed = jAirplanes[i].max_speed;
				var maxDistance = jAirplanes[i].max_distance;
				var fuelCapacity = jAirplanes[i].fuel_capacity;
				var fuelConsumption = jAirplanes[i].fuel_consumption;
				var capacity = jAirplanes[i].capacity;

				tShowAirplanesHTML += '<tr><td>'+id+'</td><td>'+regNumber+'</td><td>'+model+'</td><td>'+maxSpeed+'</td><td>'+maxDistance+'</td><td>'+fuelCapacity+'</td><td>'+fuelConsumption+'</td><td>'+capacity+'</td></tr>';
			};

			$("#tblShowAirplanes").html(tShowAirplanesHTML);
		})
	}
	showAirplanes();

	</script>
</body>
</html>