artemisia


<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
      rel="stylesheet"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="favicon_io/favicon-16x16.png"
    />
    <script src="https://d3js.org/d3.v5.min.js"></script>

    <script src="https://unpkg.com/topojson@3"></script>
    <title>Artemisia</title>
  </head>
  <body>
    <div class="container">
      <div class="intro">
        <div>
          <h1 class="title">The Heroine and the Male Gaze</h1>
          <h2>A Visual Dissection of Artimisia Gentileschi's Paintings</h2>
        </div>
      </div>
      <section id="background-section">
        <div id="background-section-chart">
          <div class="chart">
            <!--  charts go here -->
          </div>
        </div>
        <div id="background">
          <div class="scroll-para">
            <p>
              Artimisia Gentileschi [1593-ca.- 1656] is widely known as one of
              the first successful professional female painters.
            </p>
          </div>
          <div class="scroll-para">
            <p>
              She was born in Florence during a time when Italy was seeing a
              boom in Baroque art.
            </p>
          </div>

          <div class="scroll-para">
            <p>
              Her paintings often portrayed courageous & powerful women found in
              mythology and biblical stories
            </p>
          </div>
          <div class="scroll-para">
            <p>In this visualization, we'll be looking at 29 works of art.</p>
          </div>
          <div class="scroll-para">
            <p style="opacity: 0">.</p>
          </div>
        </div>
      </section>

      <div class="grid">
        <img src="images/1.jpg" />
        <img src="images/2.jpg" />
        <img src="images/3.jpg" />
        <img src="images/4.jpg" />
        <img src="images/5.jpg" />
        <img src="images/6.jpg" />
        <img src="images/7.jpg" />
        <img src="images/8.jpg" />
        <img src="images/9.jpg" />
        <img src="images/10.jpg" />
        <img src="images/11.jpg" />
        <img src="images/12.jpg" />
        <img src="images/13.jpg" />
        <img src="images/14.jpg" />
        <img src="images/15.jpg" />
        <img src="images/16.jpg" />
        <img src="images/17.jpg" />
        <img src="images/18.jpg" />
        <img src="images/19.jpg" />
        <img src="images/20.jpg" />
        <img src="images/21.jpg" />
        <img src="images/22.jpg" />
        <img src="images/23.jpg" />
        <img src="images/24.jpg" />
        <img src="images/25.jpg" />
        <img src="images/26.jpg" />
        <img src="images/27.jpg" />
        <img src="images/28.jpg" />
        <img src="images/29.jpg" />
      </div>
      <div class="analysis"></div>
      <div class="generator"></div>
      <footer>
        <div class="methodology"><h3>Sources & Methodology</h3></div>
        <div>
          <a
            href="https://github.com/simone-betito/artemisia/blob/master/imagesources.md"
            target="_blank"
            >Image Sources</a
          >
        </div>
        <div>
          <a
            href="https://github.com/simone-betito/artemisia/blob/master/sources.md"
            target="_blank"
            >Other Sources</a
          >
        </div>
        <div>
          By Simone Betito, check out her other work
          <a href="https://www.simonebetito.com" target="_blank">here</a>
        </div>
      </footer>
    </div>
    <div class="tooltip"></div>
    <script src="/graphScroll.js"></script>
    <script src="/main.js"></script>
  </body>
</html>


html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h3 {
  font-family: "Playfair Display", serif;
}
a {
  color: #af3832;
}

.container {
  width: 95vw;
  margin: 0 auto;
}

.intro {
  height: 100vh;
  width: 100vw;
  display: grid;
  justify-items: center;
  align-items: center;
}

.title {
  text-align: center;
}

#background-section {
  position: relative;
}

#background {
  width: 30vw;
  margin: 0 auto;
}

#background > div {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 500px;
  opacity: 0.3;
  font-size: 1.25rem;
}

.scroll-para p {
  margin: 0;
}
#background > div:last-of-type {
  margin-bottom: 50px;
  background-color: transparent;
}

#background div.graph-scroll-active {
  opacity: 1;
}

#background-section-chart {
  /* margin-left: 40px; */
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 50px;
  z-index: -1;
}

#background-section-chart svg {
  margin-bottom: 40px;
}

.chart {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 50 auto;
  width: 80vw;
}

.group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px;
}

.block {
  width: 12px;
  height: 5px;
  background-color: #d8880a;
  margin: 1px;
}

.group.italian .block {
  background-color: #af3832;
}

.grid {
  display: grid;
  margin: 20px auto;
  width: 100%;
  gap: 5px;
}

.grid > img {
  grid-row: 1;
  width: 100%;
  height: 50px;
  object-fit: cover;
  object-position: 0 0;
  transition: 0.3s ease-in-out all;
}

.grid:hover > img {
  opacity: 0.25;
}

.grid > img:hover {
  opacity: 1;
  width: unset;
  transform: scale(3.5);
  z-index: 2;
}

footer {
  font-size: 15px;
  width: 400px;
  text-align: center;
  border-top: 1px solid #ccc;
  margin: 50px auto;
  width: fit-content;
  opacity: 0.75;
  padding: 1rem;
}
