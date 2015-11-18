<?php
include('dbconn.php');

$action = $_POST['action'];

if($action == 'getFleet'){	

	$sQuery = $dbh->prepare("SELECT * FROM fleet ORDER BY id ASC");
	$sQuery->execute();
	$oResult = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResult = json_encode($oResult);
	echo $sResult;

}


?>