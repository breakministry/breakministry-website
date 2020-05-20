function onload() {
    if (window.innerWidth > 1000) {
    d3.select("#main-img").append("img").
    attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth).
    attr("height", window.innerHeight).
    attr("class", "shadow-lg")

    d3.select("#scd-img").append("img").
    attr("src", "static/images/breakchristmas.jpg").
    attr("width", window.innerWidth).
    attr("height", auto).
    attr("class", "shadow-lg")
    }
    if (window.innerWidth < 1000) {
    d3.select("#main-img").append("img").
    attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth)

    d3.select("#scd-img").append("img").
    attr("src", "static/images/breakchristmas.jpg").
    attr("width", window.innerWidth).
    attr("height", window.innerHeight).
    attr("class", "shadow-lg")
    }
}

onload()

d3.select(window).on("resize", handleResize);

function handleResize() {

}