<?php
	$planeModel = $_POST['model'];
	$planeCapacity = $_POST['capacity'];

	// get the array and whatever data is in there
	$strData = file_get_contents('planesDatabase.json');

	// string to object
	$arrData = json_decode($strData);
	$sTemplate = '{"model":"'.$planeModel.'","capacity":'.$planeCapacity.',"bookedSeats":0}';
	$jTemplate = json_decode($sTemplate);
	array_push($arrData, $jTemplate);

	// convert the array to string
	$strData = json_encode($arrData, JSON_PRETTY_PRINT);
	file_put_contents('planesDatabase.json', $strData);

?>