import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {

  gsap.from(card, {
    rotateY: 0,
    duration: 1,
    ease: "sine.inOut"
  });

  gsap.to(card, {
    rotateY: 180,
    duration: 1,
    ease: "sine.inOut"
  });
  
});

card.addEventListener("mouseleave", () => {

  gsap.from(card, {
    rotateY: 180,
    duration: 1,
    ease: "sine.inOut"
  });
  
  gsap.to(card, {
    rotateY: 0,
    duration: 1,
    ease: "sine.inOut"
  });

});
