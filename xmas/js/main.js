//Start animations::::
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());//requestAnimationFrame polyfill ends

//load window...
$(window).on("load",function(){

  //jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500);
        event.preventDefault();
    });
});//end pg scroll


var ch = $("#cube1").height(); 
var cw = $("#cube1").width();//standard cube dimensions

sweets();
luggage();


 function sweets() {
      for (i = 0; i < 20; i++) {
        var rand = i * Math.floor((Math.random()*2));
       $("<div class='piling'></div>").appendTo(".sweetWrap"); //create sweets
      }
}


$(".row0").waypoint({
    handler: function(direction){
    if (direction === 'down') {
      $(".up , .down").addClass("flood");//uk 'floods'
  } else if (direction === 'up'){ $(".row0").waypoint('remove');}
},offset: '60%'});

$(".row1").waypoint({
    handler: function(direction){
    if (direction === 'down') {
      $(".tear").addClass("flood");//tears rise on flights
      $(".bag").each(function(i){ //baggage fxns
          var t = $(this);
          setTimeout( function () {
                t.css({"opacity":"1"});
                fly(t);//animate luggage w/ stagger
      }, i * 200); });
  } else if (direction === 'up'){ $(".row1").waypoint('remove');}
},offset: '40%'});


$(".row3").waypoint({
    handler: function(direction){
 if (direction === 'down') {
    $(".boozes").attr("class","flow");
     $(".piling").each(function(i){ //'piling' cookies
      var t = $(this);
      setTimeout(function(){
                pile(t); //animate w/ stagger
        }, i*400);  });//each
  }else if (direction === 'up'){ $(".row3").waypoint('remove'); }
},offset: '60%'});


function pile(t) { //Sweets Consumption
  var piler = t;
  TweenMax.to(piler, 2, {rotationZ:530, scale:1.5, left:0, opacity:1, top:ch + 5, repeat: -1, ease: Power2.easeOut, y: 0},"+=0.75");//tween those sweets
} //end sweets

function fly(t) { //Lost Baggage
  var bag = t,
      speed= 6;
TweenMax.to(bag, 3, { bezier:{type:"soft", values:[{x:50, y:ch/1.5}, {x:120, y:ch/2.5,}, {x:150, y:ch/1.5}, {x:cw, y:ch}], autoRotate:["x","y","rotation", 0, true]}, repeat: -1, scale:1.2, opacity:1, ease:Linear.easeNone});
}//end flying bags



function luggage() {
    var lugWrap = $(".luggage"), i, lug;
    for (i=1; i < 12; i++) {
        lugWrap.append("<div class='bag'><img src='https://cdn-goeuro.com/static_content/web/Design/bag" + i + ".svg'/></div>");//add luggage
    }
}

window.requestAnimationFrame( pile, fly); //not sure this does anything..?


});//end window ready