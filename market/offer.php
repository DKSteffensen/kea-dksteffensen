<?php 
	$servername = "localhost";
	$username = "marketplace";
	$password = "test123";
	$dbname = "marketplace";

	$intBuyer = $_GET['buyer'];
	$uniqid = $_GET['key'];

	$oDb = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);

	// INSERT one row in the database
	$oQuery = $oDb->prepare("
								UPDATE offers
								SET buyer_id = :iBuyer
								WHERE unique_key = :sKey
								AND buyer_id = 0
							");
	$oQuery->bindParam(':iBuyer', $intBuyer);
	$oQuery->bindParam(':sKey', $uniqid);
	$oQuery->execute();
	$iRowsInserted = $oQuery->rowCount();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>Offer Status</h1>
	<h1 id="lblStatus">
		<?php 
			if($iRowsInserted == 0){
				echo "Sorry, passengers are allready taken!";
			}
			else if ($iRowsInserted == 1){
				echo "Congratulations, you got the passengers.";
			}
		?>
	</h1>
</body>
</html>