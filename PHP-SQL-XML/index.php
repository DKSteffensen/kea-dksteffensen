<?php

	// $income = 18686;
	// $tax = 44;

	// $income = $_GET['income'];
	// $tax = $_GET['tax'];

	// $letterOne = $_GET['letter1'];
	// $letterTwo = $_GET['letter2'];
	// $letterThree = $_GET['letter3'];

	// if(isset($_GET['icon'])){
	// 	if ($_GET['icon'] == "") {
	// 		$icon = "user";	
	// 	}
	// 	else {
	// 		$icon = $_GET['icon'];	
	// 	}
	// }
	// else {
	// 	$icon = "user";	
	// }

	// $iconSize = $_GET['iconSize'];

	// $sPosition = $_GET['position'];
	// $sAirlines = $_GET['airline'];

	// $aAirlines = array("KLM", "SAS", "IBERA");

	// $aNames = array("Santiago", "Daniel", "Morten");

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PHP / SQL / XML</title>
	<link href='https://fonts.googleapis.com/css?family=Quicksand:400,300|Roboto:400,300,700|Ubuntu:400,500|Exo+2:400,300' rel='stylesheet' type='text/css'>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
	<!-- Font Awesome CDN -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
	<!-- Personal CSS Files -->
	<link rel="stylesheet" href="index.css">

</head>
<body>

	<div class="welcome">

<!-- 		<h1 class="fa fa-<?php echo $icon; ?> fa-<?php echo $iconSize; ?>"></h1>
		<p>
			<input type="text" id="lblSetIcon" placeholder="fa-" value="<?php echo $icon; ?>">
		</p>
		<p>
			<select id="lblIconSize">
				<option value="1x">Smaller</option>
				<option value="2x">Small</option>
				<option value="3x">Normal</option>
				<option value="4x">Large</option>
				<option value="5x">Larger</option>
			</select>
		</p>
		<p>
			<button id="btnUpdate">Update Icon</button>
		</p> -->

		<?php
		function fOrganizeLetters($letters){		
			$aLetters = explode(",", $letters);
			
			$cLetters = count($aLetters);
			$cLetters--;
			return $aLetters[$cLetters];
		}
		
		$sLetters = $_GET['letters'];

		if(isset($sLetters)){
		}
		else {
			$sLetters = "a,b,c";
		}


		echo fOrganizeLetters($sLetters);

		// function fMyName($firstName, $lastName){
		// 	echo $firstName." ".$lastName;
		// }

		// $getFirstName = $_GET['firstName'];
		// $getLastName = $_GET['lastName'];
		// fMyName($getFirstName, $getLastName);

		// $letter = "x";

		// switch($letter){
		// 	case 'x':
		// 	echo "Yes";
		// 	break;
		// 	default:
		// 	echo "no";
		// }

		// foreach ($aNames as $names){
		// 	echo "<div>".$names."</div>";
		// }

		// $aNamesCount = count($aNames);
		// for($i = 0; $i < $aNamesCount; $i++){
		// 	$theName = $aNames[$i];
		// 	echo "<div>".$theName."</div>";
		// }

		// $aAirlines[$sPosition] = $sAirlines;

		// var_dump($aAirlines);

		// $newArray = array();
		// $letter = "a";

		// array_push($newArray, $letterOne);
		// array_push($newArray, $letterTwo);
		// array_push($newArray, $letterThree);

		// echo $newArray[2];

		// $income = $income - (($income * $tax) / 100);

		// echo $income;

		// $letter = "b";

		// $message = ($letter == "a") ? "Letter is ".$letter : "Letter is not A, but it is ".$letter;

		// echo $message;

			// if($letter == "a"){
			// 	echo $letter;
			// }
			// else {
			// 	echo "Letter is not A!";
			// }

		?>
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
	$("#setIcon").focus();
	$(document).on("click", "#btnUpdate", function(){
		var sIcon = $("#lblSetIcon").val();
		var sIconSize = $("#lblIconSize").val();

		window.location.href = "?icon="+sIcon+"&iconSize="+sIconSize;
	});
	</script>
</body>
</html>