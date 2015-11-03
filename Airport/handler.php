<?php

$oDb = new SQLite3('db/database.sql3');

// SELECT 1 result from the table users
$sQuery = $oDb->prepare("SELECT * FROM users");
// run the query  
$oResults = $sQuery->execute();
$ajUsers = getArrayWithJsonObjects($oResults);
// [{"id":1,"name":"Santiago"}]
$sUsers = convertJsonToString($ajUsers);
// echo stripslashes($sUsers); // looks perfect, but JS breaks
echo ($sUsers); // shows scaping \" but JS works

/**************************************************/
/**************************************************/
/**************************************************/
// @desc pass a result from the database and get back an array with JSON objects
// @param string
// @return array with json objects
function getArrayWithJsonObjects($oResults)
{
$aUsers = array();
while ($row = $oResults->fetchArray(SQLITE3_ASSOC)) 
{   
$jElement = convertArrayToJson($row);
array_push($aUsers, $jElement);
// var_dump($row);
// var_dump($aUsers);
}  
return $aUsers;       
}


/**************************************************/
/**************************************************/
/**************************************************/
function convertArrayToJson($aElement){
$jElement = convertStringToJson('{}');
foreach ($aElement as $key => $value) {
$jElement->$key = $value;
}  
return $jElement;          
}

/**************************************************/
/**************************************************/
/**************************************************/
// @desc convert a string to json
// @param string 
// @return json 
function convertStringToJson($sData)
{
if(json_decode($sData))
{
$jData = json_decode($sData);
return $jData;    
}
}



/**************************************************/
/**************************************************/
/**************************************************/
// @desc json to string
// @param json 
// @return string
function convertJsonToString($jData)
{ 
if(json_encode($jData))
{
// $sData = json_encode($jData, JSON_PRETTY_PRINT);
$sData = json_encode($jData);
return $sData;    
}
}

?>