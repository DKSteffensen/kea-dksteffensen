<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="airport.css">
</head>
<body>
	<nav>
		<div id="navAccount">		
			<ul>
				<li><a href="#" class="navScrollTo" data-page="page2">flights (Flights, Tickets, Passengers to certain flight)</a></li>
				<li><a href="#" class="navScrollTo" data-page="page3">Passengers Database</a></li>		
				<li><a href="#" class="navScrollTo" data-page="page4">Fleet (List all airplanes)</a></li>
				<li><a href="#" class="navScrollTo" data-page="page5">ControlPanel (Upcoming Travels, free airplanes)</a></li>
				<li><a href="#" class="navScrollTo" data-page="page5">World Map</a></li>
				<li><a href="#" class="navScrollTo" data-page="page1">Account</a>
					<ul>
						<li>Hello, Username</li>
						<li><a href="">Profile Settings</a></li>
						<li><a href="">Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
		
		
		
		
	</nav>

	<div id="contentBG">
		<div id="contentMask">
			<div class="page" id="page1">pageer - 1</div>
			<div class="page" id="page2">pageer - 2</div>
			<div class="page" id="page3">pageer - 3</div>
			<div class="page" id="page4">pageer - 4</div>
			<div class="page" id="page5">pageer - 5</div>
			<div class="page" id="page5">World Map</div>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/jquery.scrollTo-1.4.3.1-min.js"></script>

	<script>
	//
	// ScrollTo Plugin.
	var $target = $('#contentBG');	
	$('.navScrollTo').click(function(){
		var page = $(this).attr("data-page");
		$target.scrollTo( $('#'+page) , 500);
	});
	//
	</script>
</body>
</html>