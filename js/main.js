//   var cloud_snow = Snap('#cloud_snow');
//   var flakes = ['tri1','tri2','tri3','tri4','tri5','tri6','tri7','tri8','tri9','tri10','tri11','tri12','tri13','tri14','tri15','tri16','tri17','tri18','tri19','tri20','tri21','tri22','tri23','tri24','tri25','tri26','tri26','tri26','tri26','tri26','tri26','tri26','tri26','tri26','tri26','tri26','tri26','tri26','tri27','tri28','tri29','tri30','tri31','tri32','tri33','tri34','tri35','tri36','tri37','tri38','tri39','tri40','tri41']; // Setup our snow. Matches IDs in SVG.
//   function snow(){
//     for (var i=0; i < flakes.length; i++){
//       var flakeId = flakes[i];
//       var flake = cloud_snow.select('#'+flakeId); // Select each individual flake from our list
//       var cx = getRandomArbitrary(0,400);//flake.getBBox().cx; // Get its initial coordinates
//       var cy = getRandomArbitrary(0,400);//flake.getBBox().cy;
//       animateFlake(flake, cx, cy); // Send it to be infinitely animated
//     }
//   }
// var scroll = $(window).scrollTop()/100;
//   function animateFlake(flake, cx, cy){
//     var timing = getRandomArbitrary(1000,2000); // Random transition time between times we specify
//       var deg = getRandomArbitrary(-180,180); // Random rotation (allows it to go either direction)
//       // Animate the flake and do a new animation for it when it's done (repeat this function)
//     flake.stop().animate({ transform: 'r'+deg+' '+cx+' '+cy}, timing, function(){ animateFlake(flake, cx, cy);});
//   }

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// $("#cloud_snow").waypoint(function(){
// snow();
// setInterval(function(){
//   colorize(fillColor);
// }, 300);
// }, {offset:'300px'});


//       var Rects = $("#cloud_snow").find("polygon");
//       var fillColor = [464867, 404030, 831600, 917330, 444517, 793295, 730298,953281];
//   function colorize(fillColor) {
//         for (i=0; i<fillColor.length; i++) {
//           Rects.each(function(i){
//             var rS = getRandomArbitrary(0,7);
//             var randSpot = rS.toFixed(0);
//             var randColor = fillColor[randSpot];
//             $(this).attr({"fill":'#'+randColor});
//           });//each rect
//         }//for
//   } //colorize assets


$(document).ready(function(){


$("#i-img").delay(300).animate({left:"-60px"},{ queue: false, duration: 1000 });
$("#t-img").delay(300).animate({left:"60px"},{ queue: false, duration: 1000 });

var halfwindow = $(window).width() * 0.5;
var img = $(".graphicpiece");

$(".octo").each(function(){
var $t = $(this);
var $hover = $t.next(".hover-desc");

$t.mouseenter(function(){
$hover.fadeIn(200).addClass("shownhover");
});

$t.mouseleave(function(){
$(".shownhover").fadeOut(200).removeClass("shownhover");
});
});


$(window).scroll(function(){
  t = $(window).scrollTop();
  $("header").css("-webkit-transform","translateY(" + (t/4) + "px)");
var scrollTop     = $(window).scrollTop(),
    elementOffset = $('.re-show').offset().top,
    distance      = (elementOffset - scrollTop);
  if (distance < 50 ){
          $("header").css("-webkit-transform","translateY(0px)");
        }
});


  var openMenu = function() {
    $('main').addClass('open');
  };

  var closeMenu = function() {
    $('main').removeClass('open');
  };

  // Run those functions when either option is clicked
  $('.tab').mouseover(openMenu);
  $('.background').click(closeMenu);


$( "#skillcont" ).waypoint(function(){
    $(".goodat").animate({ width:"100%"}, { queue: false, duration: 1000 });
    $(".cando").animate({ width:"79%"},{ queue: false, duration: 1200 });
    $(".wanttolearn").animate({ width:"64%"},{ queue: false, duration: 1400 });
}, {offset:'300px'});


$(".graphics-wrap .img-wrap").not(".enlarged").click(function(){
$(".enlarged").removeClass("enlarged");
$(this).toggleClass("enlarged");
$(".enlarged").prepend("<div class='hide'><span></span></div>").one("click", function(e){
$(this).removeClass("enlarged");
$(".hide").remove();
e.stopPropagation();
});

});

//SCROLL EFFECT for Illustrations//

$(".picture").mouseover(function() {
  $( ".picture img, .advice, .prev, .next" ).css("-webkit-filter", "brightness(1)").css("filter", "brightness(1)").fadeIn("slow").delay(3000);
  $(".caption").css("display", "inline-block").fadeIn("slow").delay(1500);
   $( ".description").css("opacity","1").fadeIn(1000).delay(2000);
});


var tStart = 30 
  , tEnd = 180   
  , cStart = [0, 0, 0]  
  , cEnd = [255, 255, 255]   
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[0] - cStart[1]];

    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $('.covers').css('background-color', 'rgb(' + cBg.join(',') +')').animate({"opacity":"1"},1000);
    });







});