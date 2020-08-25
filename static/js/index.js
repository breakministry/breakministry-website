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
    
    var nav = document.getElementById("nav");
    nav.classList.toggle("bg-dark")

    var lightbody = document.body;
    lightbody.classList.toggle("darkswitch");

    if (imagetoggle === true) {
        document.getElementById('lightimage').src  = 'static/images/switch.png';
    } else {
       document.getElementById('lightimage').src = 'static/images/darkswitch.png'; 
    }
    imagetoggle = !imagetoggle; 
}