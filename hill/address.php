<?php
// REQUIRED ON ALL JSON FILES:
header('Content-Type: application/javascript');

// The value from the HTML interface (sent by jQuery)
$address = (isset($_GET["address"])) ? trim($_GET["address"]) : "";
$kind = (isset($_GET["kind"])) ? trim($_GET["kind"]) : "";;
$userid = (isset($_SESSION["userid"])) ? $_SESSION["userid"] : "";

// Create an empty array to hold the final JSON results
$json = array();
	$status = true; // Assume all is good unless otherwise specified
	$errors = array(); // No errors unless otherwise specified


// Connect to the database
require_once("database.php");

$query = "INSERT INTO saves(address, kind) VALUES('$address', '$kind')";

$result = mysqli_query($dbc, $query);

// If there's an error, push it onto the error array
if (!$result)
{
	array_push($errors, mysqli_error($dbc));
	$status = false;
}


// Create our JSON with our status and any potential errors
$json = array(
	"status" => $status,
	"errors" => $errors
);

// Output the data that was returned
if (  isset($_GET["callback"])  )
	echo $_GET["callback"] . "(" . json_encode($json) . ")";
else
	echo json_encode($json);

?>











