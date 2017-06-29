$(document).ready(function(){

$(".preloader").fadeOut(500);
});
  var ww = $(".wrapper").width();
  var margin = {top: 20, right: 20, bottom:50, left: 20},
    width = ww,
    height = 460 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([width, 0]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .ticks(31)
    .tickSize(10,0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("cardinal")
    .x(function(d) { return x(+d.day); })
    .y(function(d) { return y(+d.people); });

var svg = d3.select("#line1").append("svg")
    .attr("id","travel-chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = d3.csv("december.csv", function(error, data) {
  if (error) throw error;
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "day"; }));
  
  data.forEach(function(d) {
    d.day = +d.day;

  });

var transports = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {day: d.day, people: +d[name]};
      })
    };
  }); //end data...?
var bus = transports[0];
var plane = transports[1];
var train = transports[2];
var car = transports[3];
  x.domain(d3.extent(data, function(d) { return d.day; }))
    .range([0, width]);
   // .clamp(true);

  y.domain([
    d3.min(transports, function(c) { return d3.min(c.values, function(v) { return v.people; }); }),
    d3.max(transports, function(c) { return d3.max(c.values, function(v) { return v.people; }); })
  ]);
svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + 1.05*height + ")")
      .call(xAxis);

  var city = svg.selectAll(".city")
      .data(transports)
      .enter().append("g")
      .attr("class", "city");

var p1 = city.append("path") //Add the 3 coloured lines for transport type
      .attr("class", "transline")
      .attr("id", function(d) { return d.name; }) // ID of transport type
      .attr("d", function(d) { return line(d.values); }); //data of all Y values
 //data function return names.

var handleLine = svg.append("rect")
      .attr("class","line")
      .attr("height", (height + 20))
      .attr("transform", "translate(1,-5)")
      .attr("width",1)
      .attr("fill","#FFF");

var handle = svg.append("svg:image")
    .attr("xlink:href", "https://cdn-goeuro.com/static_content/web/Design/ball_indicator.svg")//christmas ball handle
    .attr("width", 34)
    .attr("height", 34)
    .attr("transform", "translate(-15," + (height + 15) + ")");

var handleText = svg.append("text")
    .style({"fill":"#FFF","font-size":"14px","text-anchor":"middle"})
    .html(1)
    .attr("transform", "translate(1," + (height + 40) + ")");

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



var graph = svg.select("g.graph");
    var lines = graph.select('g.line-container')
        .selectAll('path.line').data(data);

    lines.enter()
        .append('path')
        .attr('class', function (d, i) {
            return 'line' + d.key;
        })
        .attr('fill', 'none')
        .attr('stroke', function (d, i) {
            return colors(i);
        })
        .attr('d', function (d) {
            return line(d.values);
        });

    //** Create a invisible rect for mouse tracking
 var hoverRect = svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', 'none')
        .style('pointer-events', 'all')
        .on('mousemove', mouseMove)
        .on('mouseout', mouseOut);
    
    //** Init Tooltip

var toolTip = d3.select("#line1").append('div')
              .attr('class', 'chart-tooltip');

function mouseMove() {

     var mouse   = d3.mouse(this),
            mouseX  = mouse[0],
            mouseY  = mouse[1],
            value   = Math.round(x.invert(mouseX)),
            valMap = value-1;  //map day - 1 for proper match (since array indexing starts at 0)
          if (value > 0) {  
            var dayBus = data[valMap].bus;
            var dayTrain = data[valMap].train;
            var dayPlane = data[valMap].plane;
            var dayCar = data[valMap].car;
          }
        //** Display tool tip
        
        toolTip
            .style('visibility', 'visible')
            .style("top", (mouseY + "px"))
            .html(value + " December 2015<br/>Bus: <span class='textB'></span><br/>Train: <span class='textT'></span><br/>Plane: <span class='textP'></span><br/>Car: <span class='textC'></span>");
            
        //Get 'slider' to follow mouse:
        handle
          .attr("x", (mouseX + "px"));
        handleText
          .attr("x", (mouseX + "px"))
          .html(value);
        handleLine
          .attr("x", (mouseX + "px")); //

//Don't smush tooltip on right edge:
  var leftLimit = width - 190;
        if (mouseX >= leftLimit) {
          toolTip.style("left", + (mouseX - 170) + "px");
  } else {
        toolTip.style("left",+ (mouseX + 20) + "px");
  }

            $(".textB").text(dayBus.toLocaleString()),
            $(".textP").text(dayPlane.toLocaleString()),
            $(".textT").text(dayTrain.toLocaleString()),
            $(".textC").text(dayCar.toLocaleString());
//get cumulative values and print
     var totalBus = 0,
              totalTrain = 0,
              totalPlane = 0,
              totalCar = 0;

            for (var i = 0; i <= valMap; i++){
              totalBus += parseInt(data[i].bus);
              totalTrain += parseInt(data[i].train);
              totalPlane += parseInt(data[i].plane);
              totalCar += parseInt(data[i].car); 
            }
 //print values:           
            $(".printbus").text(totalBus.toLocaleString()),
            $(".printtrain").text(totalTrain.toLocaleString()), 
            $(".printplane").text(totalPlane.toLocaleString()), 
            $(".printcar").text(totalCar.toLocaleString());

    }//end mousemove

function mouseOut() {
  toolTip.style('visibility', 'hidden');
           var totalBus = 0,
              totalTrain = 0,
              totalPlane = 0,
              totalCar = 0;//reset values
  //...anything else?
}
//end hover
var graphLines = $(".transline");

$("#travel-chart").waypoint({
    handler: function(direction){
    if (direction === 'down') {
      graphLines.attr("class","transline drawing");
  } else if (direction === 'up'){ $("#travel-chart").waypoint('remove');}
},offset: '40%'});

});
