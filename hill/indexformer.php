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

               <div class="expandingArea"><h3>FROM:</h3>
                          <pre><span></span><br></pre>
  <textarea type="text" id="from" name="FROM"></textarea></div>

<script>

   GMaps.geocode({
   address: $('#from').val(),
   callback: function(results, status) {
     if (status == 'OK') {
       var fromlatlng = results[0].geometry.location;
       map.setCenter(latlng.lat(), latlng.lng());
       map.addMarker({
         lat: latlng.lat(),
         lng: latlng.lng()
     });
     }
   }
 });
</script>

                <div class="expandingArea"><h3>TO:</h3>
                          <pre><span></span><br></pre>
  <textarea type="text" id="to" name="TO"></textarea></div>
<script>

   GMaps.geocode({
   address: $('#to').val(),
   callback: function(results, status) {
     if (status == 'OK') {
       var fromlatlng = results[0].geometry.location;
       map.setCenter(latlng.lat(), latlng.lng());
       map.addMarker({
         lat: latlng.lat(),
         lng: latlng.lng()
     });
     }
   }
 });
</script>

<div id="map" class="map">
    <p>This will be replaced with the Google Map.</p>
</div>

<!--<script><h3>Code:</h3>
<pre>
$('#map').gMap();
 </pre>
</script>
-->
</section>

<!--background images-->
    <main class="cabstand">
        <div class="cabimg">
        </div>
          </main>



<!--PHP FARE CALCULATOR -->
    <article id="fare">
     <p>
      <?php
        require_once ("database.php");
         require_once ("Oauth.php")
     "<p>"$"</p>"
       echo {
         4.25+(("$distance")*(1.75))
       };
      ?>

      </p>
    </article>
<!--end first PHP -->

    <div class="dial"><a href=#phonesomething><p>CALL</br> #TAXI</p></a></div>

    <div class="transit"> </div>

    
    <article class="traffic">
    <h3>Traffic is <span style="color:seagreen; font-size:1.5em;">GOOD</span>
  </article>


     <div id="SAVES">

     <nav class="myplaces">
     <ul>
     <li></li>
     <li></li>
     <li></li>
     </ul>
     </nav>
     </div>


</div>
</div>

    <div class="clearfix" style="position:relative; height:3em;"><p style="font-size:0.8em; font-family:Futura; color:#cdcdcd; text-align: center;">&copy; Hilary Kitz 2014 all rights reserved.</p>
</div>

       <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
       
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

        <script type="text/javascript" src="js/jquery.gmap.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
