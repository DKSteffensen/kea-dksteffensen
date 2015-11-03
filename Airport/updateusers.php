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
	<select name="" id="selUsers">
		<option value="id">Name</option>
	</select>
	<input type="checkbox" id="changeAll" value="" placeholder="Change all names with..."><span>Change all names.</span>
	<input type="text" id="newUserName" value="" placeholder="New name">
	<button id="btnUpdateUser">Update Name</button>
	<span id="response"></span>
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
function getUsers(){
	$.ajax({
		url: "ajax.php",
		type: "post",
		dataType: "json",
		data: {
			action: "getUser"
		}
	})
	.done(function(ajUsers){
		var infoHTML = '';
		var selectHTML = '<option selected="selected" disabled>Select a name</option>';
		for (var i = 0; i < ajUsers.length; i++) {
			infoHTML += '<p>'+ajUsers[i].id+'. '+ajUsers[i].name+'</p>';
			selectHTML += '<option id="user'+ajUsers[i].id+'" value="'+ajUsers[i].id+'">'+ajUsers[i].name+'</option>';
		};
		$("#lblShowInfo").html(infoHTML);
		$("#selUsers").html(selectHTML);
	})	
}
getUsers();
$("#btnUpdateUser").click(function(){

	if($("#changeAll").prop('checked')){
		var oldName = $("#selUsers option:selected").text();
		var newUserName = $("#newUserName").val();

		$.ajax({
			url: "ajax.php",
			type: "post",
			data: {
				action: "updateAllUsers",
				oldname: oldName,
				newusername: newUserName
			}		
		})
		.done(function(response){
			$("#response").html(response+" Names have been changed!");		
			getUsers();
		})
	}
	else {
		var getUserID = $("#selUsers").val();
		var newUserName = $("#newUserName").val();

		$.ajax({
			url: "ajax.php",
			type: "post",
			data: {
				action: "updateUser",
				userid: getUserID,
				newusername: newUserName
			}		
		})
		.done(function(response){
			$("#response").html(response+" Names have been changed!");		
			getUsers();
		})
	}
})

$(document).on('blur', '#changeAll', function(){
	$("#selUsers").prop('disabled');
})
</script>
</body>
</html>