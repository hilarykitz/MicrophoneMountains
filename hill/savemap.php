<?php
	session_start();

	// Check if I'm logged in (hint: I can't be on this page if I'm not!)
	if ( isset($_SESSION["userid"]) ) {
		$userid = $_SESSION["userid"];
	}
	else {
		header("Location:index.php");
		exit();
	}


	// 1. Grab the chirp that was POSTed to this page
	$chirp = addslashes($_POST['chirp']);

	// 2. Connection to the database
	require_once("database.php");

	// 3. Build a query
	$query = "INSERT INTO chirps (user, chirp)
				          VALUES ($userid, '$chirp')";

	// 4. Run the query
	$result = mysqli_query($connection, $query);


	// 5. Output any errors
	if (!$result)
	{
		echo "There was an error saving your chirp.";
	}

?>