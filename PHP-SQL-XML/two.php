<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>AI</title>
</head>
<body>
<h3>Two</h3>
<a href="one.php">To Control Panel</a>

<?php
$airplaneModel = $_GET['model'];
$numberOfPassengers = $_GET['numberOfPassengers'];
$generatedNumber = rand(0, $numberOfPassengers);
?>

<h4>Information from Control Panel</h4>
<p>Model: <?php echo $airplaneModel; ?></p>
<p>Passengers: <?php echo $numberOfPassengers; ?></p>
<p>Generated number: <?php echo $generatedNumber; ?></p>
	
</body>
</html>