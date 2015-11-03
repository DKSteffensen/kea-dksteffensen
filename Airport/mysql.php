<?php
	
	include('pdo-db.php');

	$query = $dbh->prepare("SELECT * FROM airplanes");
	$query->execute();

	$result = $query->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($result)


	// /**************************************************/
	// /**************************************************/
	// /**************************************************/
	// // @desc pass a result from the database and get back an array with JSON objects
	// // @param string
	// // @return array with json objects
	// function getArrayWithJsonObjects($query)
	// {
	// 	$ajUsers = array();
	// 	foreach($query->fetchAll() as $i => $aData) { 
	// 	$jElement = convertArrayToJson($aData);
	// 	array_push($ajUsers, $jElement);
	// 	}   
	// 	return $ajUsers;  		
	// }
	// /**************************************************/
	// /**************************************************/
	// /**************************************************/
	// function convertArrayToJson($aElement)
	// {
	// 	$jElement = convertStringToJson('{}');
	// 	foreach ($aElement as $key => $value) {
	// 	$jElement->$key = $value;
	// 	}  
	// 	return $jElement;          
	// }
	// /**************************************************/
	// /**************************************************/
	// /**************************************************/
	// // @desc convert a string to json
	// // @param string 
	// // @return json 
	// function convertStringToJson($sData)
	// {
	// 	if(json_decode($sData))
	// 	{
	// 	$jData = json_decode($sData);
	// 	return $jData;    
	// 	}
	// }
	// /**************************************************/
	// /**************************************************/
	// /**************************************************/
	// // @desc json to string
	// // @param json 
	// // @return string
	// function convertJsonToString($jData)
	// { 
	// 	if(json_encode($jData))
	// 	{
	// 	// $sData = json_encode($jData, JSON_PRETTY_PRINT);
	// 	$sData = json_encode($jData, JSON_UNESCAPED_UNICODE);
	// 	return $sData;    
	// 	}
	// }
?>