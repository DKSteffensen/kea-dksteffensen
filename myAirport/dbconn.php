<?php
	$db_host = 'localhost';
	$db_user = 'myAirport';
	$db_password = 'test123';
	$db_database = 'my_airport';

	try {
		$dbh = new PDO("mysql:host=$db_host;dbname=$db_database", $db_user, $db_password);
	} 
	catch (PDOException $e) {
	    print "Error!: " . $e->getMessage() . "<br/>";
	    die();
	}
?>