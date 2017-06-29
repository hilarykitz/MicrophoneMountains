<head>
<?php //require_once('header.php'); ?>
<!--<?php // require_once('auth.php'); ?> -->
<link rel="stylesheet" href="css/themes/CabFare.css" />
 <link rel="stylesheet" href="css/themes/jquery.mobile.icons.min.css" />
 <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile.structure-1.4.2.min.css" />
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>

</head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <div class="main-container">
            <div class="main wrapper clearfix">
<!--background images-->
   
   <a href="index.php" class="ui-btn ui-icon-home ui-btn-icon-left" >Home</a>

            <?php
                // Connect to the session before deciding which button to show
                session_start();

                // Check if we're logged in, per the session userid
                if ( isset($_SESSION["userid"]) ) {
                    echo '<button class="ui-btn-icon ui-icon-user ui-btn-icon-left"> <a href="logout.php" style="color:white; text-decoration:none;" >Log Out</a> </button>';
                }
                else {
                    echo '<button type="button" class="login">LOGIN</button>';
                    echo '<a class="logout" href="logout.php" style="display:none">logout</a>';
                }
            ?>


            <div class="addresses" id="addresses">

                <?php
                    require_once("database.php");                       // Connect

                    $query = "SELECT c.id, address, class
                                FROM saves AS c
                                JOIN users AS u
                                WHERE c.user = u.id
                                ORDER BY c.id DESC";   // Query
                    $result = mysqli_query($dbc, $query);        // Execute

                    // For each row returned, print out some HTML...
                    while($row = mysqli_fetch_assoc($result))           // Traverse
                    {
                        require("onesave.php");  // Template Save
                    }
                ?>

            </div>

            <div>
         <form name="work">
                    <fieldset>
                        <label for="address">Work Location</label>
                        <input type="text" name="address" placeholder="Type a full address">
                        <output for="address"></output>
                    </fieldset>
                     <button type="submit" class="savelocation">SAVE</button>
                </form>
            </div>
          

              <div>
                           <form name="home">
                    <fieldset>
                        <label for="home">Home Location</label>
                        <input type="text" name="address" placeholder="Type a full address">
                        <output for="address"></output>
                    </fieldset>
                    <button type="submit" class="savelocation">SAVE</button>
                </form> </div>
     
<div>
                           <form name="misc">
                    <fieldset>
                        <label for="misc">Frequent Location</label>
                        <input type="text" name="address" placeholder="Type a full address">
                        <output for="address"></output>
                    </fieldset>
                    <button type="submit" class="savelocation">SAVE</button>
                </form>
            </div>



     <div id="SAVES">

     <nav class="myplaces">

     <ul id="savesul">
    
     <li id="work" class="work"></li>
    
     <li id="home" class="home"></li>
    
     <li id="miscs" class="misc"></li>
    
</ul></nav>

     </div>


</div>
</div>

    <div class="clearfix" style="float:left; width:100%; height:3em;"><p style="font-size:0.8em; font-family:Futura; color:#cdcdcd; text-align: center;">&copy; Hilary Kitz 2014 all rights reserved.</p>
</div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
       
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>

        <script type="text/javascript" src="js/jquery.gmap.js"></script>
        <script src="js/main.js"></script>
        <script src="js/saves.js"></script>
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
