<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

<?php
header('Content-type: text/html; charset=utf-8');

	echo "<h1>List of users</h1>";


  $oDb = new SQLite3('db/database.sql3');

  // SELECT 1 result from the table users
  $sQuery = $oDb->prepare("SELECT * FROM users WHERE name = 'Santiago' ");
  // run the query  
  $oResults = $sQuery->execute();
  $ajUsers = getArrayWithJsonObjects($oResults);
  //var_dump($ajUsers);
  // [{"id":1,"name":"Santiago"}]
  $sUsers = convertJsonToString($ajUsers);
  // echo stripslashes($sUsers); // looks perfect, but JS breaks
  // echo ($sUsers); // shows scaping \" but JS works	

	foreach( $ajUsers as $users){
		echo $users->id;
		echo " ";
		echo $users->name;
		echo "<br>";
	}




	// DELETE one row in the database
	$sQuery = $oDb->prepare("DELETE FROM users WHERE id = 6");
	$sQuery->execute();
	$iRowsDeleted = $oDb->changes();
	echo '{"iRowsDeleted":"'.$iRowsDeleted.'"}';
  
  
  // UPDATE one row in the database
	$sQuery = $oDb->prepare("UPDATE users SET name='OOOOOOOOO' WHERE id= 5");
	$sQuery->execute();
	$iRowsUpdated = $oDb->changes();
	echo '{"iRowsUpdated":"'.$iRowsUpdated.'"}';




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
      //var_dump($row);
      //var_dump($aUsers);
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
      $sData = json_encode($jData, JSON_UNESCAPED_UNICODE);
      return $sData;    
    }
  }














  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/
  /****************************************************************************************************/





  echo "List of users:";

$oDb = new SQLite3('db/database.sql3');

// SELECT 1 result from the table users
$sQuery = $oDb->prepare("SELECT * FROM users");
// run the query  
$oResults = $sQuery->execute();
$ajUsers = getArrayWithJsonObjects($oResults);
// [{"id":1,"name":"Santiago"}]
$sUsers = convertJsonToString($ajUsers);
// echo stripslashes($sUsers); // looks perfect, but JS breaks
// echo ($sUsers); // shows scaping \" but JS works

foreach($ajUsers as $jUser){
echo "<div><span>".$jUser->id.". </span><span>".$jUser->name."</span></div>";
}
echo "<h1>ÆØÅ</h1>";

$sQuery = $oDb->prepare("DELETE FROM users WHERE name LIKE '%ø%'");
$sQuery->execute();
$iRowsDeleted = $oDb->changes();
echo $iRowsDeleted;

$sQuery = $oDb->prepare("UPDATE users SET name='Don Jon' WHERE id = 5");
$sQuery->execute();
$iRowsUpdated = $oDb->changes();
echo $iRowsUpdated;

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

</body>
</html>