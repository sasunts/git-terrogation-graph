var color = d3.scale.category20();

var canvas = d3.select("body").append("svg")
  .attr("width",1470)
  .attr("height",800);

d3.json("data.json",function (data){

    var treemap = d3.layout.treemap()
      .size([1470,800])
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
      .attr("fill", "#70D7E3")
      .attr("stroke", "#fff")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)

    cells.append("text")
      .attr("x", function (d){return ((d.x + d.dx /2)-40)})
      .attr("y", function (d){return d.y + d.dy /2})
      .attr("text-acnhor", "left")
      .text(function (d) {return d.children ? null : d.name;})

        var k = 0;

      function handleMouseOver(d, i) {
          d3.select(this).attr({
            fill: "orange"
          });


          cells.append("text").attr({
              id: k,
              x: function() { return ((d.x + d.dx /3)-40) },
              y: function() { return d.y + d.dy /3 }
          })
          .text(function() {
            return "Total Commits: " +d.value;
          });
          k++;
        }

    function handleMouseOut(d, i) {
          // Use D3 to select element, change color back to normal
          d3.select(this).attr({
            fill: "#70D7E3",
          });
          d3.select(k).remove();  // Remove text location
          k--;
        }
  })
