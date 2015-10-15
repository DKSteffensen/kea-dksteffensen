<?php

$planeID = $_POST['planePosition'];
$passengers = $_POST['bookings'];

// get the array and whatever data is in there
$strData = file_get_contents('planesDatabase.json');

// string to object
$arrData = json_decode($strData);

$intCurrentbookings = $arrData[$planeID]->bookedSeats;
$intTotalBookings = $intCurrentbookings + $passengers;

$arrData[$planeID]->bookedSeats = $intTotalBookings;

// convert the array to string
$strData = json_encode($arrData, JSON_PRETTY_PRINT);
file_put_contents('planesDatabase.json', $strData);

?>