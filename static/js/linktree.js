function onload() {
    
    if (window.innerHeight > 900) {
        let height = window.innerHeight*.2
        let bottom = window.innerHeight*.2
        d3.select("#content").style("padding-top", height.toString()+"px").
        style("padding-bottom", bottom.toString() + "px")
    }

    else if (window.innerHeight > 700) {
        let height = window.innerHeight*.1
        let bottom = window.innerHeight*.1
        d3.select("#content").style("padding-top", height.toString()+"px").
        style("padding-bottom", bottom.toString() + "px")
    }

    else if (window.innerHeight > 600) {
        let height = window.innerHeight*.05
        let bottom = window.innerHeight*.05
        d3.select("#content").style("padding-top", height.toString()+"px").
        style("padding-bottom", bottom.toString() + "px")
    }

    else if (window.innerHeight > 500) {
        let height = window.innerHeight*.025
        let bottom = 0
        d3.select("#content").style("padding-top", height.toString()+"px").
        style("padding-bottom", bottom.toString() + "px")
    }
}

onload()