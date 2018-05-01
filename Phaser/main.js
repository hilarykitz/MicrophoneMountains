$(function(){

var controller = new ScrollMagic.Controller();

var moonTween = new TweenMax.to('.moon', 1.5, {
    opacity: 0, 
});


var sunTween = new TweenMax.to('.sun', 2.5, {
    opacity: 1,
    top: '10vh'
});


var containerScene = new ScrollMagic.Scene({
    triggerElement: '#moonSet'
})
.setTween(moonTween)
.addTo(controller);

var sunRise = new ScrollMagic.Scene({
    triggerElement: '#sunRise'
})
.setTween(sunTween)
.addTo(controller);



});

