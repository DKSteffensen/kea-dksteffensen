<?php
	$function = $_POST['function'];

	if ($function == 'login') {
		$strUser = file_get_contents("loginDatabase.json");
		$objUser = json_decode($strUser);
		$users = $objUser->users;

		$strFirstname = "";
		$strLastname = "";
		$strAge = 0;
		$count = 0;

		foreach ($users as $user) {
			$dbUsername = $user->username;
			$dbPassword = $user->password;

			$username = $_POST['username'];
			$password = $_POST['password'];

			$lowerdbUsername = strtolower($dbUsername);
			$lowerUsername = strtolower($username);

			if($lowerdbUsername == $lowerUsername && $dbPassword == $password){
				$count += 1;
				$strFirstname = $user->firstname;
				$strLastname = $user->lastname;
				$strAge = $user->age;
			}
		}

		if($count == 1){
			$response = "true";
		}
		else if($count > 1){
			$response = "error";
		}
		else if($count == 0){
			$response = "nouser";
		}

		$arrResponse = json_encode(array('response' => $response, 'firstname' => $strFirstname, 'lastname' => $strLastname, 'age' => $strAge));

		echo $arrResponse;
	}
	else if($function == 'signup'){
		$strData = file_get_contents('loginDatabase.json');
		$objData = json_decode($strData);
		



		$username = $_POST['username'];
		$password = $_POST['password'];
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$age = $_POST['age'];

		// get the array and whatever data is in there
		$strData = file_get_contents('loginDatabase.json');

		// string to object
		$arrData = json_decode($strData);
		$sTemplate = '{"username":"'.$username.'","password":"'.$password.'","firstname":"'.$firstname.'","lastname":"'.$lastname.'","age":'.$age.'}';
		$jTemplate = json_decode($sTemplate);
		array_push($arrData->users, $jTemplate);

		// convert the array to string
		$strData = json_encode($arrData, JSON_PRETTY_PRINT);
		file_put_contents('loginDatabase.json', $strData);

		echo "usersignupsucces";
	}

?>