function smoothScroll(){

    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
};
smoothScroll();


var crsr = document.querySelector(".cursor");
var icon = document.querySelectorAll(".pg-1 .icons a");
var wrapr = document.querySelector(".wrapper")
var bicon = document.querySelectorAll(".pg-1 .icons i::before")

icon.forEach(function(ico){
    ico.addEventListener("mouseenter",function(){
        crsr.style.opacity = 0;
        icon.style.color = "white";
    });
    
    ico.addEventListener("mouseleave",function(){
        crsr.style.opacity = 1;
        icon.style.color = "black";
    });
})

wrapr.addEventListener("mouseleave",function(){
    crsr.style.opacity = 0;
});

wrapr.addEventListener("mouseenter",function(){
    crsr.style.opacity = 1;
});

window.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left: dets.x-10,
        top: dets.y-10
    });
});

gsap.to(".pg-1 .circle",{
    scrollTrigger:{
        trigger:".pg-1",
        scroller:".wrapper",
        // markers:true,
        start: "top 0",
        end: "top -2%",
        scrub: 1,
        pin: true 
    },
    transform: "scale(1.8)"
});

var fh1 = document.querySelector(".pg-2 h1:nth-child(1)");
var sh1 = document.querySelector(".pg-2 h1:nth-child(2)");

gsap.to(fh1,{
    scrollTrigger:{
        trigger: fh1,
        scroller: ".wrapper",
        start: "top 50%",
        end: "top top",
        // markers: true,
        scrub: true
    },
    x: "-8vw",
})

gsap.to(sh1,{
    scrollTrigger:{
        trigger: sh1,
        scroller: ".wrapper",
        start: "-100% 50%",
        end: "-100% top",
        // markers: true,
        scrub: true
    },
    x: "8vw",
})

var fh1 = document.querySelector(".pg-3 h1:nth-child(1)");
var sh1 = document.querySelector(".pg-3 h1:nth-child(2)");

gsap.to(fh1,{
    scrollTrigger:{
        trigger: fh1,
        scroller: ".wrapper",
        start: "top 50%",
        end: "top top",
        // markers: true,
        scrub: true
    },
    x: "-8vw",
})

gsap.to(sh1,{
    scrollTrigger:{
        trigger: sh1,
        scroller: ".wrapper",
        start: "-100% 50%",
        end: "-100% top",
        // markers: true,
        scrub: true
    },
    x: "8vw",
})