<?php

include('dbconn.php');

// $action = "newTravel";
$action = $_POST['action'];

if($action == "getTravels"){

	$sQuery = $dbh->prepare("SELECT * FROM travels WHERE deleted = 0 ORDER BY id ASC");
	$sQuery->execute();
	$oResult = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResult = json_encode($oResult);
	echo $sResult;
}

else if($action == 'getPassengers'){
	$id = $_POST['tiID'];

	$sQuery = $dbh->prepare("SELECT * FROM tickets_information WHERE travel_information = :id AND deleted = 0");
	$sQuery->bindParam(':id', $id);
	$sQuery->execute();
	$oResult = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResult = json_encode($oResult);
	echo $sResult;
}
else if($action == 'getTicketsType'){
	$id = $_POST['tiID'];

	$sQuery = $dbh->prepare("SELECT id, class, price, number_of_tickets FROM tickets_type WHERE travel_information_id = :id AND deleted = 0");
	$sQuery->bindParam(':id', $id);
	$sQuery->execute();
	$oResult = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResult = json_encode($oResult);
	echo $sResult;
}
else if($action == 'updateTicketType'){
	// $sTickets = '[{"id":1,"class":"Business","price":9990,"number_of_tickets":80},{"id":2,"class":"Economy","price":6990,"number_of_tickets":220}]';
	$sTickets = $_POST['newTicket'];
	$oTickets = json_decode($sTickets);

	foreach ($oTickets as $ticket) {
		$id = $ticket->id;
		$class = $ticket->class;
		$price = $ticket->price;
		$nOTickets = $ticket->number_of_tickets;

		$sQuery = $dbh->prepare("UPDATE tickets_type SET class = :class, price = :price, number_of_tickets = :nOTickets WHERE id = :id");
		$sQuery->bindParam(':id', $id);
		$sQuery->bindParam(':class', $class);
		$sQuery->bindParam(':price', $price);
		$sQuery->bindParam(':nOTickets', $nOTickets);
		$sQuery->execute();
	}
}
else if($action == 'updateTravels'){
	$id = $_POST['tID'];
	$apID = $_POST['tAirplane'];
	$flightNumber = $_POST['tNumber'];
	$adID = $_POST['tDAirport'];
	$dDatetime = $_POST['tDTime'];
	$aaID = $_POST['tAAirport'];
	$aDatetime = $_POST['tATime'];

	$sQuery = $dbh->prepare("UPDATE travel_information SET airplanes_id = :apID, flight_number = :flightNumber, airport_departures_id = :adID, departure_datetime = :dDatetime, airport_arrival_id = :aaID, arrival_datetime = :aDatetime WHERE id = :id");
	$sQuery->bindParam(':id',$id);
	$sQuery->bindParam(':apID',$apID);
	$sQuery->bindParam(':flightNumber',$flightNumber);
	$sQuery->bindParam(':adID',$adID);
	$sQuery->bindParam(':dDatetime',$dDatetime);
	$sQuery->bindParam(':aaID',$aaID);
	$sQuery->bindParam(':aDatetime',$aDatetime);
	$sQuery->execute();
}
else if($action == 'deleteTravel'){
	$id = $_POST['tID'];

	$sQuery = $dbh->prepare("UPDATE travel_information SET deleted = 1 WHERE id = :id");
	$sQuery->bindParam(':id', $id);
	$sQuery->execute();
}
else if($action == 'newTravel'){
	$apID = $_POST['fAirplaneID'];
	$adID = $_POST['fAirportDepartureID'];
	$aaID = $_POST['fAirportArrivalID'];
	$flNO = $_POST['fNumber'];
	$dTime = $_POST['fDepartureTime'];
	$aTime = $_POST['fArrivalTime'];
	$sTickets = $_POST['newTicket'];
	$oTickets = json_decode($sTickets);

	// $apID = 2;
	// $adID = 3;
	// $aaID = 4;
	// $flNO = "DS0012";
	// $dTime = "2015-01-01 11:11:11";
	// $aTime = "2015-01-01 11:11:11";

	$sQuery = $dbh->prepare("CALL new_travel(:apID, :adID, :aaID, :flNO, :dTime, :aTime)");
	$sQuery->bindParam(':apID',$apID);
	$sQuery->bindParam(':adID',$adID);
	$sQuery->bindParam(':aaID',$aaID);
	$sQuery->bindParam(':flNO',$flNO);
	$sQuery->bindParam(':dTime',$dTime);
	$sQuery->bindParam(':aTime',$aTime);
	$sQuery->execute();


	$sQuery = $dbh->prepare("SELECT id FROM travel_information WHERE flight_number = :flNO ORDER BY id DESC");
	$sQuery->bindParam(':flNO',$flNO);
	$sQuery->execute();
	$lastID = $sQuery->fetch(PDO::FETCH_ASSOC);

	echo $lastID['id'];

	foreach ($oTickets as $ticket) {
		$id = $ticket->id;
		$class = $ticket->class;
		$price = $ticket->price;
		$nOTickets = $ticket->number_of_tickets;

		$sQuery = $dbh->prepare("INSERT INTO tickets_type(travel_information_id, class, price, number_of_tickets, deleted) VALUES (:tiID, :class, :price, :nOTickets, 0)");
		$sQuery->bindParam(':tiID', $lastID['id']);
		$sQuery->bindParam(':class', $class);
		$sQuery->bindParam(':price', $price);
		$sQuery->bindParam(':nOTickets', $nOTickets);
		$sQuery->execute();
	}
}