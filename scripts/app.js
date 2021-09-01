window.onload = function() {
    let bars = document.querySelector('.bars');
    let menu = document.querySelector('.menu');
    let navBefore = document.querySelector('.navBefore');
    let navSecondary = document.querySelector('.nav-secondary');
    let navigation = document.querySelector('.navigation');



    bars.addEventListener("click", function (e) {

        this.classList.toggle("active");

        if (this.classList.contains("active")) {

            gsap.to(".menu", {
                duration: 0.1,
                display: "block",
                ease: "expo.in"
            });

            gsap.to(".navBefore", {
                duration: 0.5,
                delay: 0.3,
                marginLeft: "0",
                ease: "expo.in"
            });

            gsap.to(".navSecondary", {
                duration: 0.5,
                delay: 0.5,
                ease: "expo.in",
                marginLeft: "0"
            });

            gsap.to(".navigation", {
                duration: 1,
                delay: 0.8,
                opacity: "1",
                ease: "expo.in",
            });

        } else {

            gsap.to(".navigation", {
                duration: 0.4,
                opacity: "0",
                ease: "expo.in",
            });

            gsap.to(".navSecondary", {
                duration: .5,
                delay: 0.5,
                marginLeft: "100%",
                ease: "expo.in",
            });

            gsap.to(".navBefore", {
                duration: .5,
                delay: .2,
                marginLeft: "100%",
                ease: "expo.in",
            });

            gsap.to(".menu", {
                duration: 0.1,
                delay: .2,
                display: "none",
                ease: "expo.in",
            });
        }
    });
};