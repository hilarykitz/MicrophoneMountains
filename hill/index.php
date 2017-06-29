<?php
  // Connect to the session before deciding which button to show
  session_start();
  require_once('header.php'); 
?>

    <body>



        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <div class="main-container">
           <?php
        // Check if we're logged in, per the session userid
          if ( isset($_SESSION["userid"]) ) {
              echo '<a class="logout" href="logout.php">logout</a>';
              echo '<button type="button" class="new"><a href="saves.php">CHANGE SAVED LOCATIONS</a></button>';
              echo  '<button type="button" class="login" style="display:none;">LOGIN</button>';
               
          }
          else {
              echo '<button type="button" class="login">LOGIN</button>';
              echo '<a class="logout" href="logout.php" style="display:none">logout</a>';
          }
      ?>
        <div class="main wrapper clearfix">
<!--background images-->
   <img class="lamp" src="img/streetlamp.png"/>
<!--start real content-->

<section class="ribbons">
<form id="calculate-route" name="calculate-route" action="#" method="get">
  <label for="from" class="fromlabel">From:</label>
  <a id="from-link" href="#" style="font-size:1.5em;">HERE</a>
  <input type="text" id="from" name="from" required="required" placeholder="     Start Address" size="30" color="cadetblue" />
  <br/>
  <br/>

  <label for="to" class="tolabel" label="to">To:</label>
  <input type="text" id="to" name="to" required="required" placeholder="       Destination" size="30" color="cadetblue" />
  <br/>
  <div class="submitholder">
  <input class="sendorclear" type="submit" id="submit" style="font-family:'Codystar'; padding:0.4em; font-size:3em;"/>
 </div>
  </form>
</section>

    <main class="cabstand clearfix">
        <div class="cabimg">
        </div>
          </main>
      <!--  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&libraries=places"></script>
  -->

<!--<div id="map-canvas">
 <div id="map"> </div>
</div> -->
<!--ATTEMPTED DISTANCE MATRIX
    <div id="content-pane">
      <div id="inputs">
        <pre>
var origin = document.getElementById('from');
var destination = document.getElementById('to');
        </pre>
        <p><button type="button" class="calcdistance" onclick="calculateDistances();">Calculate
          distances</button></p>
      </div>
      <div id="outputDiv"></div>
      <div style="width:400px; height:400px; position:relative; border: 1px white solid;" id="distance_road"></div>
    </div>
-->
    <div class="dial"><a href="tel:#8294"><p>CALL</br> #TAXI</p></a></div>

    <div id="map-canvas"></div>


<!--PHP FARE CALCULATOR -->
    <article id="fare">
    <div class="distance_road" id="distance_road">


    </div>
    </article>
<!--end first PHP -->

    <a href="http://maps.google.ca" class="transit"></a>

    
    <article class="traffic">
    <h3 style="color:white;">Traffic is <span style="color:seagreen; font-size:1.5em;">GOOD</span></h3>
  </article>

<!--
  <div id="user_entrance">
  <div class="login"><a href="/saves.php">Log In</a>
  </div>
  <div class="signup"><a href="/saves.php">Sign Up</a>
  </div>

  </div>
-->
<!--

          <!--SAVES INPUT -->

            <section class="popup log">
                <!-- Login popup -->
                <form name="login">
                    <fieldset>
                        <legend>Sign In</legend>

                        <label for="user">Email</label>
                        <input type="email" name="user" id="user" placeholder="Email">
                        <output for="user"></output>

                        <label for="pass">Password</label>
                        <input type="password" name="pass" id="pass" placeholder="Password">
                        <output for="pass"></output>
                    </fieldset>

                    <fieldset>
                        <button type="submit">Log In</button>
                    </fieldset>
                    <button type="button" class="register">register</button>
                </form>

                <!-- Register popup -->
                <form name="register">
                    <fieldset>
                        <legend>Personal Information</legend>

                        <label for="fname">First Name</label>
                        <input type="text" name="fname" id="fname" placeholder="First Name">
                        <output for="fname"></output>
                        
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname" id="lname" placeholder="Last Name">
                        <output for="lname"></output>
                    </fieldset>
                    <fieldset>
                        <legend>Login Details</legend>

                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email">
                        <output for="email"></output>
                        
                        <label for="pass1">Password</label>
                        <input type="password" name="pass1" id="pass1" placeholder="Password">
                        <output for="pass1"></output>

                        <label for="pass2">Retype Password</label>
                        <input type="password" name="pass2" id="pass2" placeholder="Retype Password">
                        <output for="pass2"></output>
                    </fieldset>
                    <fieldset>
                        <button type="submit" name="register">Register</button>
                    </fieldset>

                    <button type="button" class="signin">Sign In</button>
                </form>


            </section>
            



            <div class="addresses" id="addresses">

            </div>
  

            <section class="popup new">
                           <form name="work">
                    <fieldset>
                        <label for="address">Work Location</label>
                        <input type="text" name="address" placeholder="Type a full address">
                        <output for="address"></output>
                    </fieldset>
                     <button type="submit" class="savelocation">SAVE</button>
                </form>
          

              
                           <form name="home">
                    <fieldset>
                        <label for="home">Home Location</label>
                        <input type="text" name="address" placeholder="Type a full address">
                        <output for="address"></output>
                    </fieldset>
                    <button type="submit" class="savelocation">SAVE</button>
                </form>
     

                           <form name="misc">
                    <fieldset>
                        <label for="misc">Frequent Location</label>
                        <input type="text" name="address" placeholder="Type a full address">
                        <output for="address"></output>
                    </fieldset>
                    <button type="submit" class="savelocation">SAVE</button>
                </form>
            </section>

         <div class="HAL">



<p style="color:white;">Hello,

                <?php
                      require("heyuser.php"); //Say hello! Hi!
                  
                ?>

            </div>

     <div id="bottombuttons">

     <nav class="myplaces">
     <ul>
     <li id="work"><a id="work"></li></a>
     <li id="home"><a id="home"></li></a>
     <li id="saved"><a id="misc"></li></a>

     </ul>
     </nav>
     </div>


</div>
</div>

    <div class="clearfix credit" style="position:relative; height:3em; max-width:100%;"><p style="font-size:0.8em; font-family:Futura; color:#cdcdcd; text-align: center;">&copy; Hilary Kitz 2014 all rights reserved.</p>
</div>
          
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
       
        <script type="text/javascript" src="https://apis.google.com/js/client.js?onload=initialize"></script>


        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
