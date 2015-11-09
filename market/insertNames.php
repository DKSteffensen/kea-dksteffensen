<?php
	$timeBefore = microtime(true);
	echo $timeBefore."<br>";

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "test";

	$arrNames = Array("Daniel", "Morten", "Kristoffer", "Sebastian", "Magnus", "Johan", "Kasper", "Adi", "Ada", "Tina");

	$strQuery = 'INSERT INTO `persons`(`names`) VALUES ';

	for($i = 0;$i < 100000;$i++){
		$theName = $arrNames[array_rand($arrNames)];

		$strQuery .= '("'.$theName.'"),';

	}

	
	$strQuery = rtrim($strQuery, ",");

	$oDb = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
	$oQuery = $oDb->prepare($strQuery);
	$oQuery->execute();
	$iRowsInserted = $oQuery->rowCount();

	$timeAfter = microtime(true);
	echo $timeAfter."<br><br>";

	$time = $timeAfter - $timeBefore;

	echo '{"iRowsInserted":"'.$iRowsInserted.'"}';
	echo "<br>";
	echo $time;
?>