<?php

// $sXml = "<person>
// 			<name>Santiago</name>
// 			<sibblings>
// 				<sibbling>
// 					<name>A</name>
// 				</sibbling>
// 				<sibbling>
// 					<name>B</name>
// 				</sibbling>	
// 				<sibbling>
// 					<name>C</name>
// 				</sibbling>							
// 			</sibblings>
// 		</person>";


// $oXml = simplexml_load_string($sXml);
// $sentence = $oXml->name." has sibbling ";

// // Santiago has sibbling A and also sibbling B

// $count = 0;
// foreach($oXml->sibblings->sibbling as $sibbling){
// 	if($count > 0){
// 		$sentence .= " and ".$sibbling->name;
// 	}
// 	else {
// 		$sentence .= $sibbling->name;
// 	}

// 	$count++;
// }
// echo $sentence;

$oXml = simplexml_load_file('person.xml');

$sName = $oXml->name;

foreach ($oXml->sibblings->sibbling as $oElement) {
	echo $oElement->name;
}

?>