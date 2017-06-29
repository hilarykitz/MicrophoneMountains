<?php 

	// REQUIRED ON ALL JSON FILES:
	header('Content-Type: application/javascript');

	// The value from the HTML interface (sent by jQuery)
	$email = (isset($_GET["email"])) ? trim($_GET["email"]) : "";
	$pass1 = (isset($_GET["pass1"])) ? trim($_GET["pass1"]) : "";
	$pass2 = (isset($_GET["pass2"])) ? trim($_GET["pass2"]) : "";
	$fname = (isset($_GET["fname"])) ? trim($_GET["fname"]) : "";
	$lname = (isset($_GET["lname"])) ? trim($_GET["lname"]) : "";
	

    // Create an empty array to hold the final JSON results
	$json = array();


	$status = true;		// Assume all is good unless otherwise specified
	$errors = array();	// No errors unless otherwise specified
	
	
	// Connect to the database
	require_once("database.php");
	

	///////////////////
	// CHECK IF THE EMAIL EXISTS ALREADY!!!
	///////////////////
	$query = "SELECT * FROM users WHERE email='$email'";
	$result = mysqli_query($dbc, $query);        // Execute

	if (mysqli_num_rows($result) > 0)
	{
		$status = false;   // User exists - FAIL!!!!

		array_push($errors, array("field"=>"email", "message"=>"Email already exists"));
	}

	if ($pass1 != $pass2)
	{
		$status = false;   // Email address don't match - FAIL!!!!
		array_push($errors, array("field"=>"pass2", "message"=>"Passwords don't match"));
	}

	if ($email == "") {
		$status = false;   // Email blank? - DEFINITE FAIL!!!!
		array_push($errors, array("field"=>"email", "message"=>"Email address can't be blank"));
	}

	if ($pass1 == "") {
		$status = false;   // Password is blank - FAIL!!!!
		array_push($errors, array("field"=>"pass1", "message"=>"Enter a password"));
	}

	if ($fname == "") {
		$status = false;   // First name is blank - FAIL!!!!
		array_push($errors, array("field"=>"fname", "message"=>"Enter a first name"));
	}

	if ($lname == "") {
		$status = false;   // Last name is blank - FAIL!!!!
		array_push($errors, array("field"=>"lname", "message"=>"Enter a last name"));
	}


	/////////////////
	// We could continue to check things like if certain fields
	// are blank or mal-formed using the same pattern as above
	/////////////////


	// (If status is STILL true after all that, then we're good)
	if ($status == true)
	{
		////////////
		// ALL GOOD!!! 
		////////////

		$query = "INSERT INTO users(created, first, last, email, password)
					VALUES(NOW(), '$fname', '$lname', '$email', '$pass1')";
		$result = mysqli_query($dbc, $query);
			echo mysqli_error($dbc);

		// $query = "SELECT LAST_INSERT_ID() as id";

		$query = "SELECT * FROM users ORDER BY userid desc limit 1";

		$result = mysqli_query($dbc, $query);
		$row = mysqli_fetch_assoc($result);

		// Start up a session and let it know who's logged in
		session_start();
		$_SESSION["id"] = $row["userid"];
		$_SESSION["fname"] = $row["first"];
		$_SESSION["lname"] = $row["last"];

	

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
    	echo mysqli_error($dbc);
?>


