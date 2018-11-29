var color = d3.scale.category10();

var canvas = d3.select("body").append("svg")
  .attr("width",1470)
  .attr("height",870);

d3.json("data.json",function (data){

    var treemap = d3.layout.treemap()
      .size([1470,870])
      .nodes(data)

    var cells = canvas.selectAll(".cells")
      .data(treemap)
      .enter()
      .append("g")
      .attr("class","cell")

    cells.append("rect")
      .attr("x", function (d) {return d.x;})
      .attr("y", function (d) {return d.y;})
      .attr("width", function (d) {return d.dx;})
      .attr("height", function (d) {return d.dy;})
      .attr("fill", function (d) {return d.children ? null : color(d.parent.name); })
      .attr("stroke", "#fff")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)

    cells.append("text")
      .attr("x", function (d){return d.x + d.dx /2})
      .attr("y", function (d){return d.y + d.dy /2})
      .attr("text-acnhor", "middle")
      .text(function (d) {return d.children ? null : d.name;})


      function handleMouseOver(d, i) {
          d3.select(this).attr({
            fill: "orange"
          });

          cells.append("text").attr({
              id: "t" + d.x + "-" + d.y + "-" + i,
              x: function() { return d.x + d.dx /3 },
              y: function() { return d.y + d.dy /3 }
          })
          .text(function() {
            return "Total Commits: " +d.value;
          });
        }

    function handleMouseOut(d, i) {
          // Use D3 to select element, change color back to normal
          d3.select(this).attr({
            fill: color(d.parent.name),
          });
          d3.select("t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
        }
  })
