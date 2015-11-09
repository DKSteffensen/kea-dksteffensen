<?php
include('dbconn.php');
session_start();

$action = $_POST['action'];
// $action = "saveTicket";

if($action == "checkLogin"){
	if(isset($_SESSION['customerInformation'])){
		$sCustomer = json_encode($_SESSION['customerInformation']);
		echo $sCustomer;
	}
	else {
		echo '{"loggedIn":0}';
	}
}
else if($action == "login"){
	$customerEmail = $_POST['email'];
	$customerPassword = $_POST['password'];

	$sQuery = $dbh->prepare("CALL customer_login(:cEmail, :cPassword)");
	$sQuery->bindParam(':cEmail', $customerEmail);
	$sQuery->bindParam(':cPassword', $customerPassword);
	$sQuery->execute();
	$sResult = $sQuery->fetch();

	$customerID = $sResult['id'];
	$firstname = $sResult['firstname'];
	$lastname = $sResult['lastname'];
	$email = $sResult['email'];
	$cpr = $sResult['cpr'];

	$sCustomer = '{"loggedIn":1,"customerID":'.$customerID.',"firstname":"'.$firstname.'","lastname":"'.$lastname.'","email":"'.$email.'","cpr":"'.$cpr.'"}';
	$oCustomer = json_decode($sCustomer);
	$_SESSION['customerInformation'] = $oCustomer;
}
else if($action == "signup"){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$cpr = $_POST['cpr'];
	$password = $_POST['password'];
	// $firstname = "Tester";
	// $lastname = "Tester";
	// $email = "Tester";
	// $cpr = "123";
	// $password = "test12345";

	$sQuery = $dbh->prepare("CALL customer_signup(:cFirstname, :cLastname, :cEmail, :cCpr, :cPassword)");
	$sQuery->bindParam(':cFirstname', $firstname);
	$sQuery->bindParam(':cLastname', $lastname);
	$sQuery->bindParam(':cEmail', $email);
	$sQuery->bindParam(':cCpr', $cpr);
	$sQuery->bindParam(':cPassword', $password);
	$sQuery->execute();
}
else if($action == "logout"){
	session_unset($_SESSION['customerInformation']);
	session_destroy();

	echo "success";
}
else if($action == "saveTicket"){
	$sOrder = $_POST['order'];
	$oOrder = json_decode($sOrder);

	$sQuery = $dbh->prepare("
								INSERT INTO tickets (customers_id, tickets_type_id, ticket_number, firstname, lastname, gender, passport)
								VALUES (:tCustomerID, :tTicketID, :tTicketNumber, :tFirstname, :tLastname, :tGender, :tPassport)
							");

	$sQuery->bindParam(':tCustomerID', $oOrder->customerID);
	$sQuery->bindParam(':tTicketID', $oOrder->ticketID);
	$sQuery->bindParam(':tTicketNumber', $oOrder->passengers[0]->ticketNumber);
	$sQuery->bindParam(':tFirstname', $oOrder->passengers[0]->firstname);
	$sQuery->bindParam(':tLastname', $oOrder->passengers[0]->lastname);
	$sQuery->bindParam(':tGender', $oOrder->passengers[0]->gender);
	$sQuery->bindParam(':tPassport', $oOrder->passengers[0]->passport);
	$sQuery->execute();
}

?>