<?php
    // REQUIRED ON ALL JSON FILES:
	header('Content-Type: application/javascript');


    // GET all parameters passed into this PHP page:
    /*if (   isset($_GET["last"])   ) {
        $last = $_GET["last"];
    }
    else {
        $last = 0;
    }*/

    // Shortform for above:
    $last = (isset($_GET["last"])) ? $_GET["last"] : 0;



    $json = array();    // Empty array

    require_once("database.php");                       // Connect

    $query = "SELECT c.id, date, chirp, first, last, image 
                FROM chirps AS c
                JOIN users AS u
                WHERE c.user = u.id
                AND c.id > $last
                ORDER BY id ASC";   // Query

    $result = mysqli_query($connection, $query);        // Execute

    // For each row returned, push it onto the array
    while($row = mysqli_fetch_assoc($result))           // Traverse
    {
        array_push($json, $row);
    }



    // REQUIRED ON ALL JSON FILES:
    if (  isset($_GET["callback"])  )
    	echo $_GET["callback"] . "(" . json_encode($json) . ")";
    else
    	echo json_encode($json);
    
?>






