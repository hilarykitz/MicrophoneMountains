<?php require_once('header.php'); ?>

    <body>



        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <div class="main-container">
        <div class="main wrapper clearfix">
<!--background images-->
   <img class="lamp" src="img/streetlamp.png"/>
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
  <input id="pac-input" class="controls" type="text" placeholder="Search..." style="color:seagreen;"/>

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
    <div class="dial"><a href=#phonesomething><p>CALL</br> #TAXI</p></a></div>

    <div id="map-canvas"></div>


<!--PHP FARE CALCULATOR -->
    <article id="fare">
    <div class="distance_road" id="distance_road">


    </div>
    </article>
<!--end first PHP -->

    <div class="transit"> </div>

    
    <article class="traffic">
    <h3 style="color:white;">Traffic is <span style="color:seagreen; font-size:1.5em;">GOOD</span></h3>
  </article>


  <div id="user_entrance">
  <div class="login"><a href="/saves.php">Log In</a>
  </div>
  <div class="signup"><a href="/saves.php">Sign Up</a>
  </div>

  </div>

<?php

?>
     <div id="bottombuttons">

     <nav class="myplaces">
     <ul>
     <li id="work"><a href="/saves.php"></li></a>
     <li id="home"><a href="/saves.php"></li></a>
     <li id="saved"><a href="/saves.php"></li></a>
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
