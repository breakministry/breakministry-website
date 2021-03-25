function onLoad(){
    d3.select("#main-img").append("img").
    attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth).
    attr("class", "jesus shadow-lg")
   
    d3.select("#ministry").style("display","none")
    d3.select("#creative").style("display","none")
    d3.select("#tech").style("display","none")
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
// Every time the window size changes, the picture width gets readjusted
d3.select(window).on("resize", handleResize);

// This is set up so that when a person selects which role they want to participate in, the appropriate questions show up
var option = d3.selectAll("#servicearea");
option.on("change", updateInterface);

function updateInterface() {

    //this is the value that is selected from the dropdown and gets updated every time the value is changed
    var picked = d3.selectAll("#servicearea").node().value

    if (picked == 'musicminister') {
//       console.log("YOU PICKED MUSIC MINISTER")
        d3.select("#music").style("display","block")
        d3.select("#ministry").style("display","none")
        d3.select("#creative").style("display","none")
        d3.select("#tech").style("display","none")
    }
    if (picked == 'ministryvolunteer') {
//       console.log("YOU PICKED MINISTRY VOLUNTEER")
        d3.select("#music").style("display","none")
        d3.select("#ministry").style("display","block")
        d3.select("#creative").style("display","none")
        d3.select("#tech").style("display","none")
    }
    if (picked == 'creativeintern') {
//        console.log("YOU PICKED CREATIVE INTERN")
        d3.select("#music").style("display","none")
        d3.select("#ministry").style("display","none")
        d3.select("#creative").style("display","block")
        d3.select("#tech").style("display","none")
    }
    if (picked == 'techintern') {
//        console.log("YOU PICKED TECH INTERN")
        d3.select("#music").style("display","none")
        d3.select("#ministry").style("display","none")
        d3.select("#creative").style("display","none")
        d3.select("#tech").style("display","block")
    }
}
