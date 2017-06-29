<?php

	session_start();		// Connect to the current session
	session_unset();		// Delete all of the variables
	session_destroy();		// Kill the session

	// Bring the user to the login.php page, so they can log-in again
	header("Location:index.php");

	// Using this instead will take you back to the page you came from:
	//header('Location: ' . $_SERVER['HTTP_REFERER']);

	// Alternativly, if you leave out the "header()" command, you could
	// call the logout.php page using jQuery/Ajax so that you don't have
	// to redirect at all, like this: 
	/*
		$.ajax( "logout.php" )
			.done(function() {
    			// Go to some page -> optional
				window.location = "home.php";
  			})
			.fail(function() {
				// Here's where you would alert the user if there was a problem
				// Totally optional as well
			});

	*/
?>