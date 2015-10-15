<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	body {
		background-color:darkolivegreen;
		transition-duration: 0.5s;
	}
	</style>
</head>
<body>

<!-- <button id="btnGetColor">Get New Color</button> -->



<!-- jQuery 1.x snippet -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- jQuery 2.x snippet -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	
<script>

	function changeColor(){
		$.ajax({
			url: "getColorApi.php",
			type: "post"
		})
		.done(function(strColor){
			$("body").css("background-color", strColor)			
		})	
	}

	setInterval("changeColor()", 1000);
</script>
</body>
</html>