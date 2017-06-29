//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function(){
    var count= 0,//start counter
        wrap = $(".sWrap"),//wrapper we add them to
        spinner = $(".spin");//spinner item
for ( count = 0; count < 20; count++ ) { //create set # of spinners
    wrap.append("<div class='spin' id='s"+ count + "'></div>");

}
var i = 0;
$(".spin").each(function(i){//stepwise spin then
        i+=120;
    var t = $(this),
        rot = i*90,
        speed = i*500;
        console.log(rot);
    t.delay(200).queue(function(){
        t.css({"-webkit-transform":"rotate(" + rot + "deg)",
                "-webkit-transition":speed + "ms",
                "transform":"rotate(" + rot + "deg)",
                "transition":speed + "ms"
            });
    });
});



});