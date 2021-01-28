function onload() {
    // if (window.innerWidth > 1000) {
    d3.select("#main-img").append("img").
    attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth).
    attr("class", "jesus shadow-lg")
    // d3.select(".jesus").style("filter","blur(4px)")
    // d3.select(".jesus").style("-webkit-filter","blur(4px)")
    // d3.select(".jesus").style("filter","grayscale(50%)")

// If testing to ensure functionality, open the console in your browser and enter localStorage.removeItem("noFirstVisit")
    if (! localStorage.noFirstVisit) {
      // Displays the box if it is there first visit
      document.getElementById("myModal").style.display = 'initial';
      // Sets variable so on refresh or next visit it won't show
      localStorage.noFirstVisit = "1";
    }
}

onload()

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function handleResize() {

    // if (window.innerWidth > 1000) {
    d3.select(".jesus").
    // attr("src", "static/images/adoration copy.jpg").
    attr("width", window.innerWidth)//.
 
}

d3.select(window).on("resize", handleResize);
