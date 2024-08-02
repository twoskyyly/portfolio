
// anime({
//     targets: '.red,.yell,.gre,.orn ',
//     translateX: 550,
//     // easing: 'easeInOutBounce', 
//     loop: true, //계속 애니메이션 반복되도록
//     duration: 1000, //몇초동안 애니메이션을 실행 할 건지
//     direction: 'alternate'
// });

// anime({
//     targets:"ul li",
//     translateX: 550,
//     translatey: 550,
//     easing: 'easeOutBounce', 
//     loop: true,
//     direction: 'alternate',
//     // delay:1000
// })
// anime({
//     targets:".orn",
//     translateX: 550,
//     translateY: 650,
//     easing: 'easeOutBounce', 
//     loop: true,
//     // direction: 'alternate'
//     duration:1000,
//     delay:1000,
//     direction: 'alternate',
//     borderRadius:'100%' 
// })
// anime({
//     targets:".gre",
//     translateX: {
//         direction: 'alternate',
//         value:1000,
//         duration:5000,
//         delay:3000
//     },
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeOutBounce', 
// })

// 연속 애니메이션
let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
});

// Add children
    tl
    .add({
    targets: '.red',
    translateX: 250,
    })
    .add({
    targets: '.orn',
    translateX: 250,
    })
    .add({
    targets: '.yell',
    translateX: 500,
    })
    .add({
    targets: '.yell',
    translateY: 500,
    })
    .add({
    targets: '.yell',
    translateX: 0,
    })
    .add({
    targets: '.yell',
    translateY: 0,
    })

    
    .add({
    targets: '.gre',
    scale:1.5,
    rotate:360
    });

    anime({
        targets: '.ss path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
        });