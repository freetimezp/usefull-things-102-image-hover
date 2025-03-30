
let btn = document.querySelector("button");

let clipPathAnimation = gsap.to(".hovered-img", 1, {
    paused: true,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
    stagger: {
        from: "random",
        amount: 0.75
    }
});

btn.addEventListener("mouseenter", () => {
    clipPathAnimation.play();
});

btn.addEventListener("mouseleave", () => {
    clipPathAnimation.reverse();
});

























