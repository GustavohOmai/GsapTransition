gsap.fromTo('.layer-1', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: .8
});

gsap.fromTo('.layer-2', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 1
});

gsap.fromTo('.layer-3', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 1.2
});

gsap.fromTo('.layer-4', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 1.3
});

gsap.to(".layer-5", {
    x: 100000
});
gsap.to(".layer-6", {
    x: 100000
});
gsap.to(".layer-7", {
    x: 100000
});


const bgLime = 'linear-gradient(254.85deg, #627431 -10.53%, #E1F3AF 130.97%)';
const bgGinger = 'linear-gradient(254.85deg, #D59A3F -10.53%, #FFDFAE 130.97%)';
const bgPine = 'linear-gradient(254.85deg, #D3A929 -10.53%, #FFEBAD 130.97%)';
const bgGrape = 'linear-gradient(254.85deg, #C47493 -10.53%, #FDEBF3 130.97%)';

const nextArrow = document.querySelector('#next-arrow');

let contador = 1;

nextArrow.addEventListener('click', () => {

    contador++;

    switch (contador) {

        case 1:
            gsap.to(".main", {
                duration: 2,
                background: bgGinger,
            });

            gsap.to(".layer-7", {
                x: -10000,
                display: "none",
            });
            gsap.fromTo('.layer-4', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .5,
                position: "relative",
                display: "block"

            });

            // more animation code for case 2

            gsap.fromTo('.layer-1', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .8
            });

            gsap.fromTo('.layer-2', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1
            });

            gsap.fromTo('.layer-3', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1.2
            });

            break;
        case 2:

            gsap.to(".main", {
                duration: 2,
                background: bgLime,
            });

            gsap.fromTo('.layer-1', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .8
            });

            gsap.fromTo('.layer-2', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1
            });

            gsap.fromTo('.layer-3', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1.2
            });

            gsap.to(".layer-4", {
                x: -10000,
                display: "none",
            });
            gsap.fromTo('.layer-5', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .5,
                position: "relative",
                display: "block"
            });
            break;

       

        case 3:
            gsap.to(".main", {
                duration: 2,
                background: bgPine,
            });


            gsap.to(".layer-5", {
                x: -10000,
                display: "none",
            });
            gsap.fromTo('.layer-6', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .5,
                position: "relative",
                display: "block"
            });

            // more animation code for case 3

            gsap.fromTo('.layer-1', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .8
            });

            gsap.fromTo('.layer-2', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1
            });

            gsap.fromTo('.layer-3', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1.2
            });

            break;

        case 4:
            gsap.to(".main", {
                duration: 2,
                background: bgGrape,
            });

            gsap.to(".layer-6", {
                x: -10000,
                display: "none",
            });
            gsap.fromTo('.layer-7', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .5,
                position: "relative",
                display: "block"
            });

            // more animation code for case 4
            gsap.fromTo('.layer-1', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .8
            });

            gsap.fromTo('.layer-2', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1
            });

            gsap.fromTo('.layer-3', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1.2
            });
             contador = 0;
            break;

        default:
            console.log("Invalid contador value");
            break;
    }

});