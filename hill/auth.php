<?php
	///////////////////////////////////////////
	// If I'm logged in, then do nothing. Otherwise, kick me out to the login page
	///////////////////////////////////////////
	
	// I'll know if a user is logged in, if they have a userid set in $_SESSION, so let's start a session
	session_start();
	
	if (!isset($_SESSION["user_id"]))
	{
		// No userid has been set inside of the current SESSION, so kick them to the login page
		header("Location:saves.php");
		exit();
	}
	else
	{
		// They are logged in! Store the userid in a local variable (cleaner)
		$userid = $_SESSION["user_id"];
	}

?>