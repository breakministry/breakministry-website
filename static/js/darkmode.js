//
// THIS IS USED FOR DARK MODE ACROSS THE WEBSITE
//

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
        d3.selectAll("hr").style('border-bottom','1px solid #1f1209')
        d3.selectAll(".nav-link").classed("text-white",false);
        d3.selectAll("#nav").classed("notasdarkswitch",false);
        d3.selectAll("#nav").classed("bg-light", true);
        d3.selectAll("#footer").classed("notasdarkswitch", false);
        d3.selectAll("#footer").classed("bg-light", true);
        
    } else {
       document.getElementById('lightimage').src = 'static/images/darkswitch.png'; 
       document.getElementById('breaklogo').src = 'static/images/White Logo and one line.png'
       document.getElementById('breaklogo2').src = 'static/images/White Logo and one line.png'
       d3.selectAll("hr").style('border-bottom','1px solid #fff')
       d3.selectAll(".nav-link").classed("text-white",true);
       d3.selectAll("#nav").classed("bg-light", false);
       d3.selectAll("#nav").classed("notasdarkswitch",true);
       d3.selectAll("#footer").classed("bg-light", false);
       d3.selectAll("#footer").classed("notasdarkswitch", true);
    }
    
}