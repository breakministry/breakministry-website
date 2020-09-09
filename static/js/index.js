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

    // if (window.innerWidth > 1000) {
    d3.select(".jesus").
    // attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth)//.


    d3.select(".break").
    // attr("src", "static/images/breakchristmas.jpg").
    attr("width", window.innerWidth)//.
 
}

d3.select(window).on("resize", handleResize);


var imagetoggle = false;
function colorSwitch() {
    console.log("This works?")
    imagetoggle = !imagetoggle; 
    // var nav = document.getElementById("nav");
    // nav.classList.toggle("bg-dark")

    var lightbody = document.body;
    lightbody.classList.toggle("darkswitch");

    // var lightfoot = document.getElementById("footer");
    // lightfoot.classList.toggle("darkswitch");

    // var navlight = d3.selectAll("#nav");
    

    if (imagetoggle === false) {
        document.getElementById('lightimage').src  = 'static/images/switch.png';
        document.getElementById('breaklogo').src = 'static/images/Logo and one line.png'
        document.getElementById('breaklogo2').src = 'static/images/Logo and one line.png'
        d3.selectAll("#nav").classed("darkswitch",false);
        d3.selectAll("#nav").classed("bg-light", true);
        d3.selectAll("#footer").classed("darkswitch", false);
        d3.selectAll("#footer").classed("bg-light", true);
        
    } else {
       document.getElementById('lightimage').src = 'static/images/darkswitch.png'; 
       document.getElementById('breaklogo').src = 'static/images/White Logo and one line.png'
       document.getElementById('breaklogo2').src = 'static/images/White Logo and one line.png'
       d3.selectAll("#nav").classed("bg-light", false);
       d3.selectAll("#nav").classed("darkswitch",true);
       d3.selectAll("#footer").classed("bg-light", false);
       d3.selectAll("#footer").classed("darkswitch", true);
    }
    
}