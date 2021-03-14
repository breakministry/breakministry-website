function onLoad(){
    d3.select("#main-img").append("img").
    attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth).
    attr("class", "jesus shadow-lg")
   
}

onLoad()
// d3.select("iframe").select(".freebirdFormviewerViewCenteredContent").
// attr("max-width","100%").
// attr("width", "auto")

function handleResize() {
    d3.select(".jesus").
    // attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth)

}

d3.select(window).on("resize", handleResize);


var option = d3.selectAll("#servicearea");
option.on("change", updateInterface);

function updateInterface() {

    var picked = d3.selectAll("#servicearea").node().value()

    if (picked == 'musicminister') {

    }
}
