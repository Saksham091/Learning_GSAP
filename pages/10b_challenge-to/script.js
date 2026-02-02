import gsap from "gsap";

const showToast = () => {
    gsap.to('.one', {
        y: -120,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "ease.out",
        onComplete: () => {
            gsap.to('.one', {
                delay: 2.5,
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 2.5,
                ease: "ease.in",
                onComplete: () => {
                    gsap.to('.two', {
                        y: -120,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "ease.out",
                        onComplete: () => {
                            gsap.to('.two', {
                                delay: 2.5,
                                y: 0,
                                opacity: 0,
                                scale: 0.95,
                                duration: 2.5,
                                ease: "ease.in",
                                onComplete: () => {
                                    setTimeout(showToast, 2500)
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

showToast();