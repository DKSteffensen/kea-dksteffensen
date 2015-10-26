<?php
// $action = "countJSON";
$action = $_POST['action'];
////// User Handles
// signup
// login
// getUserInfo
// updateUser
// deleteUser
////// Plane Handles
// addPlane
// updatePlane
// deletePlane
// getPlaneInfo
////// Statistics
// countJSON

if($action == "signup"){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$password = $_POST['password'];

	$count = 0;

	$strDataUsers = file_get_contents('users.json');
	$arrDataUsers = json_decode($strDataUsers);

	$arrCount = count($arrDataUsers);
	for ($i=0; $i < $arrCount; $i++) { 
		$dbEmail = $arrDataUsers[$i]->email;
		if($dbEmail == $email){
			$count += 1;
		}
	}

	if($count == "0"){
		$sTemplateUser = '{"firstName":"'.$firstname.'","lastName":"'.$lastname.'","email":"'.$email.'","mobile":"'.$mobile.'","password":"'.$password.'"}';
		$jTemplateUser = json_decode($sTemplateUser);
		array_push($arrDataUsers, $jTemplateUser);

		$userid = max(array_keys($arrDataUsers));

		$strDataUsers = json_encode($arrDataUsers, JSON_PRETTY_PRINT);
		file_put_contents('users.json', $strDataUsers);

		$response = "succes";		
	}
	else if($count > "0"){
		$response = "userexists";
		$userid = 0;
	}

	$arrResponse = json_encode(array('answer' => $response, 'userid' => $userid));

	echo $arrResponse;

}
else if($action == "login"){
		$strUser = file_get_contents("users.json");
		$arrUsers = json_decode($strUser);

		$email = $_POST['email'];
		$password = $_POST['password'];

		// $email = "d_kristian_s@hotmail.com";
		// $password = "ek5trem";

		$count = 0;
		$strUserID = 0;

		$arrCount = count($arrUsers);
		for ($i=0; $i < $arrCount; $i++) {
			$dbEmail = $arrUsers[$i]->email;
			$dbPassword = $arrUsers[$i]->password;

			if($dbEmail == $email && $dbPassword == $password){
				$count += 1;
				$strUserID = $i;
			}
		}

		if($count == 1){
			$response = "succes";
		}
		else if($count > 1){
			$response = "error";
		}
		else if($count == 0){
			$response = "nouser";
		}

		$arrResponse = json_encode(array('answer' => $response, 'userid' => $strUserID));

		echo $arrResponse;
}
else if($action == "getUserInfo"){
	$intUserID = $_POST['userID'];

	$strUsers = file_get_contents("users.json");
	$arrUsers = json_decode($strUsers);

	$strFirstname = $arrUsers[$intUserID]->firstName;
	$strLastname = $arrUsers[$intUserID]->lastName;
	$strEmail = $arrUsers[$intUserID]->email;
	$strMobile = $arrUsers[$intUserID]->mobile;
	$strPassword = $arrUsers[$intUserID]->password;

	$arrResponse = json_encode(array('firstname' => $strFirstname, 'lastname' => $strLastname, 'email' => $strEmail, 'mobile' => $strMobile, 'password' => $strPassword));

	echo $arrResponse;

}
else if($action == "updateUser"){
	$intUserID = $_POST['userid'];

	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$password = $_POST['password'];

	$count = 0;

	$strUsers = file_get_contents("users.json");
	$arrUsers = json_decode($strUsers);

	$arrCount = count($arrUsers);
	for ($i=0; $i < $arrCount; $i++) {
		$dbEmail = $arrUsers[$i]->email;
		if($dbEmail == $email && $i != $intUserID){
			$count += 1;
		}
	}

	if($count == 0){	
		$arrUsers[$intUserID]->firstName = $firstname;
		$arrUsers[$intUserID]->lastName = $lastname;
		$arrUsers[$intUserID]->email = $email;
		$arrUsers[$intUserID]->mobile = $mobile;
		$arrUsers[$intUserID]->password = $password;

		$strUsers = json_encode($arrUsers, JSON_PRETTY_PRINT);
		file_put_contents('users.json', $strUsers);

		echo "succes";
	}
	else if($count > 0){
		echo "emailinuse";
	}
}
else if($action == "deleteUser"){
	$intUserID = $_POST['userid'];
	// $intUserID = 4;

	$strUsers = file_get_contents("users.json");
	$arrUsers = json_decode($strUsers);

	array_splice($arrUsers, $intUserID, 1);

	$strUsers = json_encode($arrUsers, JSON_PRETTY_PRINT);
	file_put_contents('users.json', $strUsers);
}

// Add Plane
else if($action == "addPlane"){
	
	$strModel = $_POST['model'];
	$strCapacity = $_POST['capacity'];
	$strTakeoff = $_POST['takeoff'];
	$strTravelTime = $_POST['travelTime'];
	$strDestination = $_POST['destination'];

	$strPlanes = file_get_contents("planes.json");
	$arrPlanes = json_decode($strPlanes);

	$strTemplatePlane = '{"model":"'.$strModel.'","capacity":"'.$strCapacity.'","takeoff":"'.$strTakeoff.'","travelTime":"'.$strTravelTime.'","destination":"'.$strDestination.'"}';
	$jsoTemplatePlane = json_decode($strTemplatePlane);

	array_push($arrPlanes, $jsoTemplatePlane);

	$strPlanes = json_encode($arrPlanes, JSON_PRETTY_PRINT);
	file_put_contents("planes.json", $strPlanes);
}
else if($action == "updatePlane"){
	$intPlaneID = $_POST['planeid'];
	
	$strModel = $_POST['model'];
	$strCapacity = $_POST['capacity'];
	$strTakeoff = $_POST['takeoff'];
	$strTravelTime = $_POST['travelTime'];
	$strDestination = $_POST['destination'];

	$strPlanes = file_get_contents("planes.json");
	$arrPlanes = json_decode($strPlanes);

	$arrPlanes[$intPlaneID]->model = $strModel;
	$arrPlanes[$intPlaneID]->capacity = $strCapacity;
	$arrPlanes[$intPlaneID]->takeoff = $strTakeoff;
	$arrPlanes[$intPlaneID]->travelTime = $strTravelTime;
	$arrPlanes[$intPlaneID]->destination = $strDestination;

	$strPlanes = json_encode($arrPlanes, JSON_PRETTY_PRINT);
	file_put_contents("planes.json", $strPlanes);
}
else if($action == "deletePlane"){
	$intPlaneID = $_POST['planeid'];
	// $intPlaneID = 0;

	$strPlanes = file_get_contents("planes.json");
	$arrPlanes = json_decode($strPlanes);

	array_splice($arrPlanes, $intPlaneID, 1);

	$strPlanes = json_encode($arrPlanes, JSON_PRETTY_PRINT);
	file_put_contents('planes.json', $strPlanes);
}
else if($action == "countJSON"){
	$strUsers = file_get_contents("users.json");
	$arrUsers = json_decode($strUsers);
	$countUsers = count($arrUsers);

	$strPlanes = file_get_contents("planes.json");
	$arrPlanes = json_decode($strPlanes);
	$countPlanes = count($arrPlanes);

	$arrResponse = json_encode(array('countedUsers' => $countUsers, 'countedPlanes' => $countPlanes));

	echo $arrResponse;
}
// $sUsers = file_get_contents('users.json');
// $aUsers = json_decode($sUsers);
// if(!is_array($aUsers)) 
// { 
// 	echo '{"iError":"001"}';
// 	exit;
// }

// echo '{"iId":1, "sResponse":"Ajax Success"}';
// // echo "{'iId':1, 'sResponse':'Ajax Success'}";
?>