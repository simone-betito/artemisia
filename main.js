const images = document.querySelectorAll(".grid > img");

async function loadData() {
  const painter = await d3.csv("baroque_painters.csv");
  const paintings = await d3.csv("artemisia_data.csv");
  console.log(painter);
  console.log(paintings);

  // nest the data by state
  const nest = d3
    .nest()
    .key((d) => d.Nationality)
    .entries(painter)
    .sort((a, b) => {
      return a.values.length - b.values.length;
    });

  // select the figure element
  const hist = d3.select(".chart");

  // Add 3 groups
  // one for each state
  const group = hist
    .selectAll(".group")
    .data(nest)
    .enter()
    .append("div")
    .attr("class", (d) => {
      return `group ${d.key.toLowerCase()}`;
    });

  // in each group add the appropriate number of blocks
  group
    .selectAll(".block")
    .data((d) => d.values)
    .enter()
    .append("div")
    .attr("class", "block");

  // add a state label to each group
  group.append("p").text((d) => d.key);
}
// d3.graphScroll()
// .eventId("uniqueId1")
// .graph(d3.select("#line-charts"))
// .sections(d3.selectAll("#line-chart-section > #sections > div"))
// .container(d3.select("#line-chart-section"))
// .offset(-100)
// .on("active", function (i) {
//   console.log(i);
//   switch (i) {
//     case 1:
//       d3.selectAll("#line-charts .line").classed("draw-line", true);
//       break;
//     case 2:
//       d3.selectAll("#line-charts .line").classed("dull", true);
//       d3.selectAll(".ent .line, .life .line").classed("dull", false);
//       break;
//     case 3:
//       d3.selectAll("#line-charts .line").classed("dull", true);
//       d3.selectAll(".stem .line, .outdoor .line").classed("dull", false);
//       break;
//     case 4:
//       d3.selectAll("#line-charts .line").classed("dull", false);
//       d3.selectAll("#line-charts")
//         .selectAll(".annotation")
//         .transition(1500)
//         .delay(250)
//         .attr("r", 20);
//       break;
//     case 5:
//       d3.selectAll("#line-charts .line").classed("dull", false);

loadData();
