<?php
	$sCapacity = $_POST['capacity'];
	$randomGeneratedNumber = rand(1, $sCapacity);

	echo $randomGeneratedNumber;
?>