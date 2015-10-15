<?php

$arrColors = array("Maroon", "Olive", "Brown", "Tan", "Tomato");

$numberOfColors = count($arrColors) - 1;

$colorRandomGenerator = rand(0, $numberOfColors);

echo $arrColors[$colorRandomGenerator];

?>