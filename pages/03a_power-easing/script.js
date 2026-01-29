import gsap from "gsap";

gsap.to('.btn', {
    opacity: 1,
    duration: 2,
    scale: 1.5,
    ease: 'power4.out'
})

gsap.to('.toast ', {
    opacity: 1,
    duration: 2,
    scale: 1.5,
    ease: 'power2.out'
})

gsap.to('.card', {
    opacity: 1,
    duration: 2,
    scale: 1.5,
    ease: 'power3.inOut'
})