<?php
	/* CONSIDER A FEW THINGS NOT INCLUDED HERE:
	- What if the username or password is blank
	- What if the username is correct but the password is wrong
	- What if a user tries to hit this page without going through the form ("security!")
	- Do we need different messages for different password errors?
	*/


	// REQUIRED ON ALL JSON FILES:
	header('Content-Type: application/javascript');

	// The value from the HTML interface (sent by jQuery)
	$user = (isset($_GET["user"])) ? $_GET["user"] : "";
	$pass = (isset($_GET["pass"])) ? $_GET["pass"] : "";

    // Create an empty array to hold the results
	$json = array();

	// Connect to the database
	require_once("database.php");



	$query = "SELECT * FROM users WHERE email='$user' AND password='$pass'";
	$result = mysqli_query($dbc , $query);        // Execute

	if (mysqli_num_rows($result) > 0)
	{
		// Store the values as a "row"
		$row = mysqli_fetch_assoc($result);

		// Start up a session and let it know who's logged in
		session_start();
		$_SESSION["userid"] = $row["userid"];
		$_SESSION["fname"] = $row["first"];
		$_SESSION["lname"] = $row["last"];

		// Write some success login JSON
		$json = array(
			"status" => true,
			"errors" => array(),
			"user" => "fname"
		);
	}

	else
	{
		$errors = array();
		array_push($errors, array("field"=>"user", "message"=>"Invalid username."));
		array_push($errors, array("field"=>"pass", "message"=>"Invalid password."));

		$json = array(
			"status" => false,
			"errors" => $errors
		);
	}




    // Output the data that was returned
    if (  isset($_GET["callback"])  )
    	echo $_GET["callback"] . "(" . json_encode($json) . ")";
    else
    	echo json_encode($json);
?>










