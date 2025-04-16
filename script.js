




function menuAnimation(){
    const hamburger = document.getElementById('hamburger');
  const [topLine, middleLine, bottomLine] = hamburger.querySelectorAll('span');
  let isOpen = false;
  
  var menu =document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    if (!isOpen) {
      // Animate to X
      gsap.to(topLine, {
        rotation: 45,
        y: 7,
        transformOrigin: "center center",
        duration: 0.3
      });
      gsap.to(middleLine, {
        opacity: 0,
        duration: 0.2
      });
      gsap.to(bottomLine, {
        rotation: -45,
        y: -7,
        transformOrigin: "center center",
        duration: 0.3
      });
      gsap.to(menu,{
        height:"100vh",
        duration: 1,
        ease: "circ.out",
      })
    } else {
      // Animate back to hamburger
      gsap.to(topLine, {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      gsap.to(middleLine, {
        opacity: 1,
        duration: 0.2
      });
      gsap.to(bottomLine, {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      gsap.to(menu,{
        height:"0vh",
         duration: 0.8,
         ease: "power2.in"
      })
    }
  

    isOpen = !isOpen;




    
  });
}
function homePageAni(){
  
  let spans =document.querySelectorAll( 'span');
   let hm =gsap.timeline()
   hm.to('nav',{
    y:0,
    duration:1,
    opacity:1,
    ease: 'power1.out'
  })
  hm.to(spans,{
    y:0,
    duration:1,
    opacity:1,
    ease: 'power1.out'
  })


  hm.to('.png2',{
    opacity:1,
    scale:1.4,
    duration:1,
    ease: 'power1.in',

  })
  hm.to('.cursor',{
    opacity:1,
   });

if (window.innerWidth > 768) {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.png1', {
    left: "-20vw",
    rotation:-38,
    duration: 3,
    scrollTrigger: {
      trigger: ".hero-heading",
      start: "0% 30%",
      end: "bottom 0%",
 
      scrub: true
    }
  });

  gsap.fromTo(
   ".png2",
   {
     bottom: "65%",
    left: "8%",
     scale: 1.5,
   },
   {
     bottom: "-40%",  // or change if you want vertical motion
     left: "55%",
     scale: 0.8,
     scrollTrigger: {
       trigger: ".hero-heading",
    
       start: "top 40%",
       end: "bottom 50%",
       scrub: true
     }
   });



}


  
  
   
   


}
function Cursorani(){
  let cursor =document.querySelector('.cursor');
  window.addEventListener('mousemove',function(e){
    gsap.to(cursor,{
      y: e.clientY,
      x:e.clientX,
       duration: 0.1,
    ease: "power2.out"
    });
  });
}
function navAni(){
  let touchStartY = 0; // Stores touch start position

  // ✅ Desktop Scroll (Mouse Wheel)
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      hideNav();
    } else {
      showNav();
    }
  });
}
function hideNav() {
  gsap.to('nav', { y: "-100%", duration: .3, ease: "none", overwrite: true });
  
}
function showNav() {
  gsap.to("nav", { y: "0%", duration: .3, ease: "none", overwrite: true });
 
}
function detailsPge(){
  gsap.to('.details', {
    backgroundColor: "rgb(255, 255, 255)",
    ease: "power1.inOut", // smooth easing
    scrollTrigger: {
      trigger: '.details',
      scroller: 'body',
      start: 'top 90%',
      end: 'top 40%',
      scrub: 1.5,
    }
  });
  
  
  gsap.to('.para span',{
     color:" rgb(237, 205, 1)",
    stagger:.1,
    scrollTrigger:{
      trigger:'.details-para .para',
      scroller:'body',
      start:'top 50%',
      end:"top 15%",
      scrub:2
    }
  })
}
function marquee(){
  gsap.to('.innerdiv',{
    x:'-50%',
    duration:25,
    ease:'linear',
    repeat:-1,
  })
  
}

function reelAnim(){
  var slides=document.querySelectorAll(".reel");
var counter =0;

slides.forEach((slide,index)=>{
 slide.style.left=`${index *30}%`;
})

gsap.to('.reelContainer .reel',{
  x:'-700%',
  rotation:0,
  ease:'linear',
  scrollTrigger:{
    trigger:".reelShow",
    start:'top top',
    end:"bottom top",
    scrub:2,
    pin:true
  }
})


const videos = document.querySelectorAll(".reel video");
const sounds = document.querySelectorAll(".reel .sound");

videos.forEach((video, index) => {
  // Play on hover
  video.addEventListener("mouseenter", () => {
    video.play();
    video.loop = true;
  });

  // Pause on mouse leave
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  // Handle sound toggle
  const soundbtn = sounds[index]; // Get the matching sound button
  let isMuted = true; // default

  soundbtn.addEventListener("click", () => {
    isMuted = !isMuted;
    video.muted = isMuted;

    soundbtn.innerHTML = isMuted
      ? `<i class="ri-volume-mute-fill"></i>`
      : `<i class="ri-volume-up-fill"></i>`;
  });
});

}



function locoMotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}













navAni();
homePageAni();
marquee();
menuAnimation();



if (window.innerWidth > 468) {
  Cursorani();
  detailsPge();
  reelAnim();



}

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth <= 468) {
  document.querySelectorAll(".reel").forEach((reel) => {
    gsap.from(reel, {
      scrollTrigger: {
        trigger: reel,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 100,
      duration: 1,
      ease: "power2.out",
    });
  });



  const videos = document.querySelectorAll(".reel video");
const sounds = document.querySelectorAll(".reel .sound");

videos.forEach((video, index) => {

  let isPlaying =false;
  let ismuted =true;
  video.addEventListener("click", () => {
    
    if(isPlaying){
      video.pause();
      isPlaying=false
    }
    else{
      video.play();
      video.loop=true;
      isPlaying:true
    }



  });

  // Handle sound toggle

  const soundbtn = sounds[index]; // Get the matching sound button


  soundbtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent tap event on video
    ismuted = !ismuted;
    video.muted = ismuted;

    soundbtn.innerHTML = ismuted
      ? `<i class="ri-volume-mute-fill"></i>`
      : `<i class="ri-volume-up-fill"></i>`;
  });
});





}








