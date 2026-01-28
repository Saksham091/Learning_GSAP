import gsap from "gsap";

gsap.to('.box', {
    opacity: 1,
    rotation: 360,
    background: '#765fbc',
    borderRadius: '50%',
    scale: 1.25,
    duration: 5,
    delay: 0.5,
    ease: 'bounce',
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
})