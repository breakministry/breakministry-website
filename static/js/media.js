function onload() {

    d3.select("#main-img").append("img").
    attr("src", "static/images/breakperform.jpg").
    attr("width", window.innerWidth).
    attr("class", "break shadow-lg")

}

onload()


function handleResize() { 
    d3.select(".break").
    attr("width", window.innerWidth)//.
 
}

d3.select(window).on("resize", handleResize);