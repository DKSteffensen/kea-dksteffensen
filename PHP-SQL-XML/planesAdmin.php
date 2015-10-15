<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Planes Table</title>
	<link href='https://fonts.googleapis.com/css?family=Quicksand:400,300|Roboto:400,300,700|Ubuntu:400,500|Exo+2:400,300' rel='stylesheet' type='text/css'>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
	<!-- Font Awesome CDN -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
	<!-- Personal CSS Files -->
	<style>
	body{
	}
	#wrapper{
		display:flex;
		justify-content: center;
	}
	#planesTableWrap{
		width:50%;
		margin:auto;	
	}
	#bookPlaneWrap {
		width:100%;
		height:100%;
		position:fixed;
		background:rgba(0,0,0,0.9);
		z-index:99;
		display:none;
	}
	#bookPlane{
		position:fixed;
		width:300px;
		height:200px;
		left:50%;
		top:50%;
		margin:-100px 0 0 -150px;
		background-color:#CCC;
		z-index:100;
		display:none;
	}
	</style>
</head>
<body>

<div id="bookPlaneWrap"></div>
<div id="bookPlane"></div>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-6">
			<input class="col-md-3" type="text" name="model" id="lblModel" value="" placeholder="Model">
			<input class="col-md-3" type="number" name="capacity" id="lblCapacity" value="" placeholder="Capacity">
			<button class="btn btn-success col-md-3" id="btnAddPlane">Add New Plane</button>
			<button class="btn btn-info col-md-3" id="btnShowPlanes">Show all Planes</button>
		</div>
		<div class="col-md-6">
			<table id="tblPlanes" class="table table-bordered table-hover">
				<thead>
					<tr class="success">
						<th class="col-md-4">Model</th>
						<th class="col-md-3">Capacity</th>
						<th class="col-md-3">Booked Seats</th>
						<th class="col-md-2"></th>
					</tr>
				</thead>
			</table>
		</div>
	</div>

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
	function closeBookingWrap(){
		$("#bookPlaneWrap").fadeOut();
		$("#bookPlane").fadeOut();
	}

	function showPlanesTable(){
		$.ajax({
			url: "getPlanes.php"
		})
		.done(function(strData){
			var objData = JSON.parse(strData);
			var planesTableHTML = '<thead><tr class="success"><th class="col-md-4">Model</th><th class="col-md-3">Capacity</th><th class="col-md-3">Booked Seats</th><th class="col-md-2"></th></tr></thead><tbody>';
			for (var i = 0; i < objData.length; i++) {
				planesTableHTML += '<tr><th>'+objData[i].model+'</th><th>'+objData[i].capacity+'</th><th>'+objData[i].bookedSeats+'</th><th><a class="btnBook" data-planeID="'+i+'" href="#">BOOK</a></th></tr>';
			};
			planesTableHTML += '</tbody>';
			$("#tblPlanes").html(planesTableHTML);
		})		
	}

	$("#btnAddPlane").click(function(){
		var strModel = $("#lblModel").val();
		var strCapacity = $("#lblCapacity").val();
			$.ajax({
				url: "planesApi.php",
				type: "post",
				data: {
					model: strModel,
					capacity: strCapacity,
				}
			})
	})

	$("#btnShowPlanes").click(function(){
		showPlanesTable();
	})
	$(document).on("click", ".btnBook", function(){
		var planeID = $(this).attr("data-planeID");
		$("#bookPlaneWrap").fadeIn();
		$("#bookPlane").fadeIn();
		$("#bookPlane").append('<input id="lblBook" type="number"><button id="btnBookNow" data-planeID="'+planeID+'">Book</button>')
	})
	$(document).on("click", "#btnBookNow", function(){
		var planeID = $(this).attr("data-planeID");
		var passengers = $("#lblBook").val();
		bookPlaneNow(planeID, passengers);
	})
	function bookPlaneNow(planeID, passengers){
		$.ajax({
			url: "bookPlane.php",
			type: "post",
			data: {
				planePosition: planeID,
				bookings: passengers
			}
		})
		.done(function(response){
			closeBookingWrap();
			showPlanesTable();
		})		
	}


	</script>
	
</body>
</html>