var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

var image = document.querySelector("#image")


main.addEventListener("mousemove", function (dets) {
    // console.log(dets.x) // OBJECT HAI YE 
    // console.log(dets.y) // OBJECT HAI YE 
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y, // EK NUMBER 
        ease: "back.out"

    })
})

image.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: "3",
        backgroundColor: "white",
        color: "black",
    })
})
image.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: "2",
        backgroundColor: "blue",
        color: "white"
    })
})