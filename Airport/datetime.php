<?php
	include('pdo-db.php');

	
	$dateFormat = "y-m-d H:i:s";
	$date = date($dateFormat);

	// $query = $dbh->prepare("INSERT INTO airplane_status_log (`status_id`, `airplanes_id`, `airports_id`, `datetime`) VALUES (1, 1, 1, :date)");
	// $query->bindParam(':date', $date);
	$query = $dbh->prepare("SELECT * FROM airplane_status_log WHERE datetime > '0000-00-00 00:00:00'");
	$query->execute();

	$results = $query->fetchAll(PDO::FETCH_ASSOC);

	foreach($results as $result){
		echo $result['id'];
		echo " - ";

		$theDate = strtotime($result['datetime']);
		$theDate1 = date("d/m-Y H:i:s", $theDate);

		echo $theDate1;
		echo "<br>";
	};