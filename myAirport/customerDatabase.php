<?php
include('dbconn.php');

// $action = "deleteTicket";
$action = $_POST['action'];

if($action == 'getCustomers'){

	$sQuery = $dbh->prepare("SELECT id, firstname, lastname, email, cpr, password FROM customers WHERE deleted = 0");
	$sQuery->execute();
	$oResult = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResult = json_encode($oResult);
	echo $sResult;

}
else if($action == "updateCustomer"){
	$id = $_POST['cID'];
	$firstname = $_POST['cFirstname'];
	$lastname = $_POST['cLastname'];
	$email = $_POST['cEmail'];
	$cpr = $_POST['cCPR'];
	$password = $_POST['cPassword'];

	$sQuery = $dbh->prepare("UPDATE customers SET firstname = :firstname, lastname = :lastname, email = :email, cpr = :cpr, password = :password WHERE id = :id");
	$sQuery->bindParam(':id', $id);
	$sQuery->bindParam(':firstname', $firstname);
	$sQuery->bindParam(':lastname', $lastname);
	$sQuery->bindParam(':email', $email);
	$sQuery->bindParam(':cpr', $cpr);
	$sQuery->bindParam(':password', $password);
	$sQuery->execute();

}
else if($action == "deleteCustomer"){
	$id = $_POST['cID'];

	$sQuery = $dbh->prepare("UPDATE customers SET deleted = 1 WHERE id = :id");
	$sQuery->bindParam(':id', $id);
	$sQuery->execute();

}


else if($action == "getCustomerTickets"){
	$id = $_POST['cID'];

	$sQuery = $dbh->prepare("SELECT * FROM tickets_information WHERE customers_id = :id AND deleted = 0");
	$sQuery->bindParam(':id', $id);
	$sQuery->execute();
	$oResult = $sQuery->fetchAll(PDO::FETCH_ASSOC);

	$sResult = json_encode($oResult);
	echo $sResult;
}

else if($action == "deleteTicket"){
	$id = $_POST['cID'];

	$sQuery = $dbh->prepare("UPDATE tickets SET deleted = 1 WHERE id = :id");
	$sQuery->bindParam(':id', $id);
	$sQuery->execute();

}
?>