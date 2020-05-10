var width = 1200;
var height = 700;
var svg = d3.select("#svgcontainer3")
    .append('svg')
    .attr("width", width)
    .attr("height", height);
//svg.append("line")
//    .attr("x1", 100)
//    .attr("y1", 100)
//    .attr("x2", 200)
//    .attr("y2", 200)
//    .style("stroke", "rgb(255,0,0)")
//    .style("stroke-width", 2);
svg.append("rect")
    .attr("id", "r20652")
    .attr("x", 800)
    .attr("y", 0)
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("opacity","0.2")
    .attr("width",  "30%")
    .attr("height", "90%")
    .attr("fill", "#f42f63");