import gsap from "gsap";

const ball = document.querySelector(".ball");
const bounceInBtn = document.getElementById("bounceIn");
const bounceOutBtn = document.getElementById("bounceOut");
const bounceInOutBtn = document.getElementById("bounceInOut");

bounceInBtn.addEventListener("click", () => {
    gsap.to(ball, { x: 0, duration: 0 });
    gsap.to(ball, {
        x: 1100,
        duration: 5,
        ease: "bounce.in"
    });
});

bounceOutBtn.addEventListener("click", () => {
    gsap.to(ball, { x: 0, duration: 0 });
    gsap.to(ball, {
        x: 1100,
        duration: 5,
        ease: "bounce.out"
    });
});

bounceInOutBtn.addEventListener("click", () => {
    gsap.to(ball, { x: 0, duration: 0 });
    gsap.to(ball, {
        x: 1100,
        duration: 5,
        ease: "bounce.inOut"
    });
});