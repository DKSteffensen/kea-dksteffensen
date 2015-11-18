$("#btnMainMenuFleet").click(function(){
	$("#fleetTableBody").empty();

	$.ajax({
		url: "fleet.php",
		dataType: "json",
		type: "post",
		data: {
			action: "getFleet"
		}
	})
	.done(function(oResponse){
		for (var i = 0; i < oResponse.length; i++) {
			var airplaneID = oResponse[i].id;
			var airplaneReg = oResponse[i].reg_number;
			var airplaneBrand = oResponse[i].brand;
			var airplaneModel = oResponse[i].model;
			var airplaneCapacity = oResponse[i].passengers_capacity;
			var airplaneClasses = oResponse[i].classes;
			var airplaneMaxSpeed = oResponse[i].max_speed;

			var fleetRow = '<tr><td>'+airplaneID+'</td><td>'+airplaneReg+'</td><td>'+airplaneBrand+'</td><td>'+airplaneModel+'</td><td>'+airplaneCapacity+'</td><td>'+airplaneClasses+'</td><td>'+airplaneMaxSpeed+' km/h</td><td class="tableLink"><a href="#" data-airplaneID="'+airplaneID+'"><i class="fa fa-list"></i></a></td></tr>';
	
			$("#fleetTableBody").append(fleetRow);

		};
	})
})