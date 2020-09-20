const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 0.40, stagger: 0.25 });
// black transtion
tl.to(".slider", { y: "-100%", duration: 0.25, delay: 0.5 });
// effect to main page
tl.to(".intro", { y: "-100%", duration: 1 }, "-=0.25");


// main page effect
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
