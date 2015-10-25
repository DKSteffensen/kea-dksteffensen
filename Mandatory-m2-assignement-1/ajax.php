<?php
$action = $_POST['action'];

if($action == "signup"){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$password = $_POST['password'];

	$strDataUsers = file_get_contents('users.json');
	$arrDataUsers = json_decode($strDataUsers);
	$sTemplateUser = '{"firstName":"'.$firstname.'","lastName":"'.$lastname.'","email":"'.$email.'","mobile":"'.$mobile.'","password":"'.$password.'"}';
	$jTemplateUser = json_decode($sTemplateUser);
	array_push($arrDataUsers, $jTemplateUser);

	$strDataUsers = json_encode($arrDataUsers, JSON_PRETTY_PRINT);
	file_put_contents('users.json', $strDataUsers);

	$arrResponse = json_encode(array('firstname' => $firstname, 'lastname' => $lastname, 'email' => $email, 'mobile' => $mobile));

	echo $arrResponse;

}
else if($action == "login"){
	// Login handle goes here...
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