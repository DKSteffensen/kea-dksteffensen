<?php
	$sjUser = '{"name":"Daniel","lastname":"Steffensen","age": 28}';
	$jUser = json_decode($sjUser);
	$_SESSION['jUser'] = $jUser;

	echo "My name is ".$_SESSION['jUser']->name." ".$_SESSION['jUser']->lastname." and i am ".$_SESSION['jUser']->age." years old";
?>