<?php

// flights
$aFlights = array();
$sjDestinationOne = '{"id":"1", "destination":"JFK"}';
$sjDestinationTwo = '{"id":"2", "destination":"MIA"}';
$sjDestinationThree = '{"id":"3", "destination":"JFK"}';
$sjDestinationFour = '{"id":"4", "destination":"JFK"}';

$jDestinationOne = json_decode($sjDestinationOne);
$jDestinationTwo = json_decode($sjDestinationTwo);
$jDestinationThree = json_decode($sjDestinationThree);
$jDestinationFour = json_decode($sjDestinationFour);

array_push($aFlights, $jDestinationOne, 
	$jDestinationTwo, $jDestinationThree,$jDestinationFour);
var_dump($aFlights);
$jStats = json_decode('{}');
for($i = 0; $i < count($aFlights); $i++){
	$sTempDestination = $aFlights[$i]->destination;
	$jStats->$sTempDestination = $jStats->$sTempDestination + 1;
}
$sjStats = json_encode($jStats);
echo $sjStats;


// [{"destination":"MIA", "counter":10},
// {"destination":"JFK", "counter":200}
// ]

// $aDestinationsCounter [{"MIA":1},{"JFK":2}]

?>