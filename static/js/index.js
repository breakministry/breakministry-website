function onload() {
    // if (window.innerWidth > 1000) {
    d3.select("#main-img").append("img").
    attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth).
    attr("class", "jesus shadow-lg")

    d3.select("#scd-img").append("img").
    attr("src", "static/images/breakchristmas.jpg").
    attr("width", window.innerWidth).
    attr("class", "break shadow-lg")
}

onload()



function handleResize() {
    console.log("This works?")
    // if (window.innerWidth > 1000) {
        d3.select(".jesus").
        // attr("src", "static/images/adoration copy.jpg").
        attr("width", window.innerWidth)//.

    
        d3.select(".break").
        // attr("src", "static/images/breakchristmas.jpg").
        attr("width", window.innerWidth)//.
 
}

d3.select(window).on("resize", handleResize);