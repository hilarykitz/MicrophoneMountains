<?php

    // REQUIRED ON ALL JSON FILES:
	header('Content-Type: application/javascript');

    // Shortforms for the to and from entries (?)
    $f = (isset($_GET["fromlatlng"])) ? $_GET["fromlatlng"] : "";
    $t = (isset($_GET["tolatlng"])) ? $_GET["tolatlng"] : "";


    $json = array();    // Empty array

    require_once("database.php"); 
    require_once("package.json");                      // Connect



    // REQUIRED ON ALL JSON FILES:

$API = json_encode($API);
if (isset($_GET['callback'])) 
	$API =  $_GET['callback'] . "(" . $API . ")";

echo $API;

// ah i dunno but also get the distance? //////??//////

$distance = json_encode($distance);
if (isset($_GET['callback'])) 
	$distance =  $_GET['callback'] . "(" . $distance . ")";

echo $distance;


?>



