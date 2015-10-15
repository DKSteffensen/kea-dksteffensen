<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>AI</title>
</head>
<body>
<h3>AI</h3>
<a href="admin.php">To Control Panel</a>

<?php

if(isset($_POST['model']) || isset($_POST['capacity'])){
	$airplaneModel = $_POST['model'];
	$capacity = $_POST['capacity'];

	$generatedLowNumber = $capacity / 100 * 10;
	$generatedHighNumber = $capacity / 100 * 105;
	$generatedNumber = rand($generatedLowNumber, $generatedHighNumber);
}
else {
	$airplaneModel = "No plane created.";
	$capacity = "0";
	$generatedNumber = "0";
}
?>

<h4>Information from Control Panel</h4>
<p>Model: <?php echo $airplaneModel; ?></p>
<p>Passengers: <?php echo $capacity; ?></p>
<p>Generated number: <?php echo $generatedNumber; ?></p>
	
</body>
</html>