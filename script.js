


var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-120+"px"
    blur.style.top = dets.y-120+"px"
})




gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"75px",
    scrollTrigger:{
         trigger:"#nav",
         scroller:"body",
         markers:true,
         start:"top -10%",
         end:"top -11%",
         scrub:1
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -20v%",
        end:"top -100%",
        scrub:2
    }
})