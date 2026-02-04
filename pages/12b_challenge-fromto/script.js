import gsap from "gsap";

const reactions = document.querySelector(".reactions");

reactions.addEventListener('click', (e) => {

    if (!e.target.matches("button")) return;

    gsap.fromTo(e.target, {
        scale: 1,
        y: 0,
        opacity: 1,
        rotation: 0,
    }, {
        scale: 1.5,
        y: -40,
        rotation: 15,
        opacity: 0,
        duration: 1,
        ease: "sine.inout",
    })
});

