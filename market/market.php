<?php

	$servername = "localhost";
	$username = "marketplace";
	$password = "test123";
	$dbname = "marketplace";

	$uniqid = uniqid('', true);
	$uniqid = str_replace(".", "", $uniqid);
	$uniqid = substr($uniqid, 0,20);
	$uniqid = strtoupper($uniqid);
	$uniqid = implode("-", str_split($uniqid, 4));

	$intOwner = 1;
	$intBuyer = 2;
	$intExtraSeats = 10;
	$strFlightFrom = "CPH";
	$strFlightTo = "JFK";

	$oDb = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);

	// INSERT one row in the database
	$oQuery = $oDb->prepare("INSERT INTO offers VALUES(NULL, :iOwner, :iBuyer, :iExtraSeats, :sKey, :sFlightFrom, :sFlightTo)");
	$oQuery->bindParam(':iOwner', $intOwner);
	$oQuery->bindParam(':iBuyer', $intBuyer);
	$oQuery->bindParam(':iExtraSeats', $intExtraSeats);
	$oQuery->bindParam(':sKey', $uniqid);
	$oQuery->bindParam(':sFlightFrom', $strFlightFrom);
	$oQuery->bindParam(':sFlightTo', $strFlightTo);
	$oQuery->execute();
	$iRowsInserted = $oQuery->rowCount();
	echo '{"iRowsInserted":"'.$iRowsInserted.'"}';
	$iLastInsertedRowId = $oDb->lastInsertId();
	echo '{"iLastInsertedRowId":"'.$iLastInsertedRowId.'"}';

	// http://localhost/kea-dksteffensen/market/offer.php?key=".$uniqid."&buyer=".$intBuyer

?>