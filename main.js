const images = document.querySelectorAll(".grid > img");

async function loadData() {
  const painter = await d3.csv("baroque_painters.csv");
  // console.log(painter);
  // console.log(paintings);

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

  const paintings = await d3.csv("artemisia_data.csv");
  const nestedPaintings = d3
    .nest()
    .key((d) => d.theme)
    .entries(paintings);

  pictureGrid(nestedPaintings);
}

d3.graphScroll()
  .container(d3.select("#background-section"))
  .graph(d3.select("#background-section-chart"))
  .eventId("uniqueId1")
  .sections(d3.selectAll("#background-section > #background > div"))
  .offset(-100)
  .on("active", function (i) {
    console.log("chart", i);
    switch (i) {
      case 1:
        break;
    }
  });

function pictureGrid(data) {
  const grid = document.querySelector(".grid");
  data.forEach((section) => {
    const images = section.values
      .map((image, i) => {
        return `<img src="images/${image.path}" width="100%" class="${image.theme}" />`;
      })
      .join("");

    grid.innerHTML += `<div class="section ${section.key}">
    <h3>${section.key}</h3>
    ${images}
    </div>`;
  });

  const themes = document.querySelectorAll(".section");

  themes.forEach((thing) => {
    animateCSSGrid.wrapGrid(thing, {
      duration: 1000,
      stagger: 100,
      // onStart: (elements) =>
      //   console.log(`started animation for ${elements.length} elements`),
      // onEnd: (elements) =>
      //   console.log(`finished animation for ${elements.length} elements`),
    });
  });

  d3.graphScroll()
    .container(d3.select("#grid-section"))
    .graph(d3.select("#grid-chart"))
    .eventId("uniqueId2")
    .sections(d3.selectAll("#grid-section > #grid-text > div"))
    .offset(-100)
    .on("active", function (i) {
      console.log("grid", i);
      switch (i) {
        case 0:
          break;
        case 1:
          themes.forEach((e) => e.classList.toggle("grid-change"));
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
}

loadData();
