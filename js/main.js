$(document).ready(function(){

  var openMenu = function() {
    $('main').addClass('open');
  };

  var closeMenu = function() {
    $('main').removeClass('open');
  };

  // Run those functions when either option is clicked
  $('.tab').mouseover(openMenu);
  $('.background').click(closeMenu);



});

$(window).resize(function(){
  if ($(window).width() <= 600){  
    $("#img").css("max-width:600px; max-height:400px;")


  }
});


//SCROLL EFFECT for Illustrations//

$( window ).scroll(function() {
  $( ".picture img, .advice, .prev, .next" ).css("-webkit-filter", "brightness(1)").css("filter", "brightness(1)").fadeIn("slow").delay(3000);
  $(".caption").css("display", "inline-block").fadeIn("slow").delay(1500);
 // $( ".curtainleft").animate({ left: "-=1200px", bottom: "-=600px", opacity: 0.25, scale: (0)})
 //  $( ".curtainright").animate({ left: "+=1200px", top: "-=600px", opacity: 0, scale:(0)})

 // $( ".curtainright").animate(
                              // { right: "-=50%", top: "-=100%", opacity: 0.25,}), 5000, fadeIn("slow").delay(500);

   $( ".description").css("opacity","1").fadeIn(1000).delay(2000);
});

//

$( ".picture img" ).click(function() {
  $(this).addClass("feature");
  $(".picture").css("margin-left","0");
  $(".splashpants").css("display", "inline-block");


    // Animation complete.
  });

$( ".splashpants" ).click(function() {
  $(".picture img").css("max-width", "90%").css("min-height", "0%")
  .css("position", "relative").css("left","0").css("z-index","4")
  .css("right","0")
  .css("padding", "0")
  .css("margin-top","2em")
  .fadeIn("fast");
   $(".picture").css("margin-left","10%");
   $(".splashpants").css("display", "none");


    // Animation complete.
  });

$( ".picture img" ).dblclick(function() {
  $(".picture img").removeClass("feature").fadeIn("fast");
   $(".splashpants").css("display", "none");


    // Animation complete.
  });

	$('button.submit').click(function()
{
	var f = $('[name="from"]').val();
  var e = $('[name="email"]').val();
	var s = $('[name="subject"]').val();
	var m = $('[name="message"]').val();

	$.getJSON("email.php?callback=?", {"from": f, "email": e, "subject": s, "message": m}, function(data) {
		console.log(data);
	});
	});

$('.next').click(function()
  {
    // Check if the current .shown item is the last
    // of it's parent container

    if ( $('.feature').is(':last-child') )
    {
      $('.feature').removeClass('feature');
      $(".splashpants").css("display", "none");
    }
    else
    {
      // next() element exists
      $('.feature')
        .removeClass('feature')
        .next()
        .addClass('feature');
    }

  });


    $('.butt').click(function(){
        $('.bottombar').slideToggle('slow')

        //Rocco rotate menu
    	var openMenu = function() {
		$('main').addClass('open');
	};

	var closeMenu = function() {
		$('main').removeClass('open');
	};

	// Run those functions when either option is clicked
	$('.tab').click(openMenu);
	$('nav').click(closeMenu);

});
