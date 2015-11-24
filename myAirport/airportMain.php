<?php
include('dbconn.php');
session_start();
// $action = "checkLogin";
$action = $_POST['action'];


if($action == "login"){
	$userid = $_POST['userid'];
	$password = $_POST['password'];

	$sQuery = $dbh->prepare("SELECT id, username, email, firstname, lastname, password, cpr FROM users WHERE username = :userid AND password = :password OR email = :userid AND password = :password");
	$sQuery->bindParam(':userid', $userid);
	$sQuery->bindParam(':password', $password);
	$sQuery->execute();
	$sResult = $sQuery->fetch();

	$sID = $sResult['id'];
	$sUsername = $sResult['username'];
	$sEmail = $sResult['email'];
	$sFirstname = $sResult['firstname'];
	$sLastname = $sResult['lastname'];
	$sPassword = $sResult['password'];
	$sCPR = $sResult['cpr'];

	$sUser = '{"status":1,"id":'.$sID.',"username":"'.$sUsername.'","email":"'.$sEmail.'","firstname":"'.$sFirstname.'","lastname":"'.$sLastname.'","password":"'.$sPassword.'","cpr":"'.$sCPR.'"}';

	$oUser = json_decode($sUser);

	$_SESSION['userInformation'] = $oUser;
}
else if($action == "checkLogin"){
	if(isset($_SESSION['userInformation'])){
		$sUser = json_encode($_SESSION['userInformation']);
		echo $sUser;
	}
	else {
		echo '{"status":0}';
	}
}
else if($action == "logout"){
	session_unset($_SESSION['userInformation']);
	session_destroy();

	echo "success";	
}

?>