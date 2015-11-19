<?php
include('dbconn.php');

// $action = 'airplaneDropdown';
$action = $_POST['action'];

if($action == 'airplaneDropdown'){
	$sQuery = $dbh->prepare("SELECT id, reg_number, passengers_capacity, classes FROM airplanes WHERE deleted = 0");
	$sQuery->execute();
	$oResults = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResults = json_encode($oResults);
	echo $sResults;
}
else if($action == 'airportDropdown'){
	$sQuery = $dbh->prepare("SELECT id, name, airport_code FROM airports");
	$sQuery->execute();
	$oResults = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResults = json_encode($oResults);
	echo $sResults;	
}

?>