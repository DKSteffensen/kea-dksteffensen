<?php
include('dbconn.php');
// $action = $_POST['action'];
// $action = "getFlights";

// 1. getFlights


// 1. getFlights


?>


<?php

	$sQuery = $dbh->prepare("CALL customerLogin('d_kristian_s@hotmail.com', 'test123')");
	$sQuery->execute();
	$aResult = $sQuery->fetchAll(PDO::FETCH_ASSOC);
	$jResult = json_encode($aResult);
	echo $jResult;
?>