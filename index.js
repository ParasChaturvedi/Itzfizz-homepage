gsap.registerPlugin(ScrollTrigger);

//HOMEPAGESECTION 2

gsap.from(".herophoto", {
  scale: 2,
  scrollTrigger: {
    trigger: ".herophoto",
    // scrub:true,
  },
});
gsap.from(".video-heroSection", {
  scale: 2,
  scrollTrigger: {
    trigger: ".video-heroSection",
    // scrub:true,
  },
});

gsap.to(".vid", {
  width: "80%",
  scrollTrigger: {
    trigger: ".video-container",
    start: "top 90%",
    end: "bottom",
    scrub: true,
    // markers: true
  },
});
gsap.to(".page-2", {
  y: 0,
  x: 0,
  // marginTop:-100,
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    start: "top 10%",
    scrub: true,
    // pin:'.page-1',
    end: "+=1000px",
  },
});
gsap.to(".homepagesection2", {
  // marginTop:-100,
  scrollTrigger: {
    trigger: ".homepagesection2",
    scroller: "body",
    start: "top 0%",
    scrub: true,
    // pin:'.homepagesection2',
    end: "+=500px",
  },
});
gsap.to(".mobile-page-2", {
  y: 0,
  x: 0,
  // marginTop:-100,
  scrollTrigger: {
    trigger: ".mobile-page-2",
    scroller: "body",
    start: "top 10%",
    scrub: true,
    // pin:'.page-1',
    end: "+=100px",
  },
});

gsap.to(".page-2 .background-circle", {
  width: 700,
  height: 700,
  rotate: 360,
  // paddingTop:-300,
  scrollTrigger: {
    trigger: ".homepagesection2 ",
    scroller: "body",
    start: "top 0%",
    scrub: true,
    // pin:'.section',
    end: "+=2000px",
  },
});

gsap.to(".animation-cards", {
  x: -1000,

  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    start: "top 5%",
    scrub: true,
    pin: ".homepagesection2 ",
    end: "+=5000px",
  },
});
gsap.to(".mobile-animation-cards", {
  x: -600,

  scrollTrigger: {
    trigger: ".mobile-page-2",
    scroller: "body",
    start: "top 5%",
    scrub: true,
    pin: ".section-3 ",
    end: "+=1000px",
  },
});

//HOMEPAGESECTION 6

gsap.to(".pinned-content", {
  scale: 2.4,
  scrollTrigger: {
    trigger: ".homepagesection6",
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
});

// HOMEPAGESECTION 3

document.addEventListener("mousemove", function (e) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

document.querySelectorAll(".cursor-link").forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    document.querySelector(".cursor").classList.add("active");
  });
  link.addEventListener("mouseleave", function () {
    document.querySelector(".cursor").classList.remove("active");
  });
});



for (let i = 1; i <= 16; i++) {
  let tile = document.querySelector(`.tile${i}`);

  tile.addEventListener("mouseenter", function () {
    let cursor = document.querySelector(".cursor");
    cursor.classList.add(`activetile-${i}`);
    tile.classList.add("activetile");
  });

  tile.addEventListener("mouseleave", function () {
    let cursor = document.querySelector(".cursor");
    cursor.classList.remove(`activetile-${i}`);
    tile.classList.remove("activetile");
  });
}

/*;-------------------------------------------------
                    GSAP
-------------------------------------------------;*/

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".homepagesection1",
    start: "top 0%",
    // end:"bottom center",
    scrub: true,
    pin: false,
    //   markers:true,
    toggleActions: "restart none none reset",
  },
});
tl1.to(
  ".herobackdrop1",
  {
    yPercent: -50,
    ease: "none",
  },
  "section-1"
);
tl1.to(
  ".herobackdrop2-1",
  {
    yPercent: -50,
    ease: "none",
  },
  "section-1"
);
tl1.to(
  ".herophoto",
  {
    yPercent: 20,
    ease: "none",
  },
  "section-1"
);
// tl1.to(
//   ".video-heroSection",
//   {
//     yPercent: 15,
//     ease: "none",
//   },
//   "section-1"
// );

// ---------------------------------------------

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".homepagesection4",
    start: "top 0%",
    // end:"bottom center",
    // markers:true,
    scrub: true,
    pin: false,
    //   markers:true,
    toggleActions: "restart none none reset",
  },
});
tl2.to(
  ".experienceImg",
  {
    yPercent: 200,
    ease: "none",
  },
  "section-4"
);
tl2.to(
  ".section3backdrop1",
  {
    yPercent: 400,
    ease: "none",
  },
  "section-4"
);
tl2.to(
  ".section3backdrop2",
  {
    yPercent: 250,
    ease: "none",
  },
  "section-4"
);
tl2.to(
  ".web",
  {
    yPercent: -10,
    ease: "none",
  },
  "section-4"
);

// ----------------------------------
