//Required for Popovers for Leadership Bios
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
//     trigger: 'focus'
//   })

function onload() {

    d3.select("#scd-img").append("img").
    attr("src", "static/images/breakgroup.jpg").
    attr("width", window.innerWidth).
    attr("class", "break shadow-lg")

}

onload()

function handleResize() {

    d3.select(".break").
    // attr("src", "static/images/breakchristmas.jpg").
    attr("width", window.innerWidth)//.
 
}

d3.select(window).on("resize", handleResize);