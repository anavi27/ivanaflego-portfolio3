
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

/*Sjena na menu*/
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("izbornik");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = " 0px 4px 6px rgba(66, 122, 93, 0.1)";
        navHeader.style.transition = "all 0.3s ease"
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.hackgroundColor = "transparent"
    }
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.gallery-item', { interval: 200 })


const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.project-col-1', { delay: 100 })

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.project-col-2', { delay: 100 })