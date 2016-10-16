<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->  <!--<![endif]-->
    <head>

         <script src="http://code.jquery.com/jquery-latest.min.js"
        type="text/javascript"></script>
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

        <meta charset="utf-8">
       
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

 

    </head>
    <body>

        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?uredirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

          <div class="curtainleft"></div>
           <div class="curtainright"></div>

        <div class="background"> </div>
               <!--<h1 class="title">Hilary Kitz</h1>-->  

        
                <nav>
                    <ul>
                      <li><a href="mailto:hilarykitz@gmail.com">Contact<img class="button" src="img/mail.png"/></a></li>

                       <li><a href="http://www.linkedin.com/pub/hilary-kitz/24/b29/742">Social<img class="button right" src="img/workicon.png"/></a></li>

                    </ul>
                </nav>
     





<div class="rise">
<div class="headtitle" id="myid">
<h1 class="extruded">
    Hilary Kitz </h1> </div></div>

    <div class="pfscroll" data-stellar-ratio="0.2">
       
       <div class="passe planet" data-stellar-ratio="2"><div class="description" id="sectiontitle"><a href="wireframe.html"><p>Project Development</p></a>
       </div>
    </div> 


        <div class="vines planet" data-stellar-ratio="2"><div class="description" id="sectiontitle"><a href="illustration.php"><p>Graphic Design & Illustration</p>
        </a>
    </div>
    </div>

<!--
     <div class="bird planet"><div class="description"><a href="http://www.hkportfolio.tumblr.com">Drawings</a>
    </div>
    </div> -->

      <div class="symbiolia planet" data-stellar-ratio="2"><div class="description" id="sectiontitle"><a href="animation.html"><p>Animation</p></a>
    </div>
    </div>

    <div class="titlebox" data-stellar-ratio="1"><p>LIVE HAND-CODED WEBSITES</p>

    </div>

    <div class="kaleidoscope octo planet"> <div class="description2" style="padding-top:1em;"><a href="http://www.swirling.infinitepartycles.com"><p>Kaleidoscope</p></a>
       </div>
    </div>

     <div class="face octo planet"><div class="description2" style="padding-top:1em;"><a href="http://www.fontface.infinitepartycles.com"><p>"Font Face" App</p></a>
    </div>
    </div>

    <div class="nature octo planet"><div class="description2" style="padding-top:1em;"><a href="nature.html"><p>Park Guide Website</p></a>
    </div>
    </div>

    <div class="waffles octo planet"><div class="description2" style="padding-top:1em;"><a href="http://www.waffles.infinitepartycles.com"><p>Order-Online Site</p></a>
    </div>    </div>

    <div class="marron octo planet"><div class="description2" style="padding-top:1em;"><a href="http://www.marronbistro.com"><p>Wordpress Site</p></a>
    </div>    </div>

     <!-- <div class="recipes planet">
     <div class="description"><a href="recipe.html">Recipes Database</a> 
    </div>
</div>
-->

</div>
        <div class="contact" id="contact"> 


                         <div class="form">
                            <h1>Contact</h1>
            <label>Your Name</label>
            <input type="text" name="from" id="from">
            <label>What You're Looking For (short)</label>
            <input type="text" name="subject" id="subject">
            <label>What You're Looking For (long) </label>
            <textarea name="message" id="message"></textarea>
            <button class="submit">Send</button>
        </div>

<footer style="padding-bottom:1.3em; text-align:center; z-index:99; 
left: 0;
right: 0; bottom:0;
margin: auto;"> 
        <p>Hand Woven from 100% Virgin Code </br> by Hilary Kitz</p>
    </footer>


</div>

       <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="js/main.js"></script>

<script>
             <?php

    $to = "hilarykitz@gmail.com";
    $subject = $_GET['subject'];
    $message = $_GET['message'];
    $from = $_GET['from'];
    $headers = "From:" . $from;
    $mail = mail($to, $subject, $message, $headers);
    
    $confirm = array();
    $confirm["confirm"] = ($mail) ? "success" : "fail";

    $confirm = json_encode($confirm);
    if (isset($_GET['callback'])) 
        $confirm =  $_GET['callback'] . "(" . $tweets . ")";
    
    echo $confirm = alert( "Thanks!" );

?>
</script>

<script>
$('button.submit').click(function()
{
    var f = $('[name="from"]').val();
    var s = $('[name="subject"]').val();
    var m = $('[name="message"]').val();

    $.getJSON("email.php?callback=?", {"from": f, "subject": s, "message": m}, function(data) {
        console.log(data);
    });
    </script>
  
 
     
    </body>
</html>


