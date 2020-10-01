const images = document.querySelectorAll(".grid > img");

async function loadData() {
  const painter = await d3.csv("baroque_painters.csv");
  const paintings = await d3.csv("artemisia_data.csv");
  console.log(painter);
  console.log(paintings);

  const nest = d3
    .nest()
    .key((d) => d.Nationality)
    .entries(painter)
    .sort((a, b) => {
      return a.values.length - b.values.length;
    });

  const hist = d3.select(".chart");

  const group = hist
    .selectAll(".group")
    .data(nest)
    .enter()
    .append("div")
    .attr("class", (d) => {
      return `group ${d.key.toLowerCase()}`;
    });

  group
    .selectAll(".block")
    .data((d) => d.values)
    .enter()
    .append("div")
    .attr("class", "block");

  group.append("p").text((d) => d.key);
}
d3.graphScroll()
  .eventId("uniqueId1")
  .graph(d3.select("#background-section-chart"))
  .sections(d3.selectAll("#background-section > #background > div"))
  .container(d3.select("#background-section"))
  .offset(-100)
  .on("active", function (i) {
    console.log(i);
    switch (i) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
    }
  });
loadData();
