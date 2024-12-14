var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-sadrzaj");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

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


/*Tipkanje teksta*/

var typingEffect = new Typed(".typedText", {
    strings: ["Ivana", "a Designer", "a FrontEnd<br>Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

//Otkrivanje elemenata

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.header-text', { interval: 200 })
sr.reveal('.project', { interval: 200 })
sr.reveal('.services-list', { interval: 200 })
sr.reveal('.gallery', { interval: 200 })



const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.vertical-text', { delay: 100 })
srLeft.reveal('.project-col-1', { delay: 100 })

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.about-col-2', { delay: 100 })
srRight.reveal('.project-col-2', { delay: 100 })

/*D3.js dio*/

const data = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 80 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 20 },
    { name: "Figma", value: 90 },
    { name: "Photoshop", value: 80 },
    { name: "Canva", value: 80 },
    { name: "Flutter", value: 60 },
    { name: "Python", value: 30 },
];

const container = document.getElementById("skills-chart");
const width = container.clientWidth;
const height = container.clientHeight;

const sizeScale = d3.scaleSqrt()
    .domain([0, 200])
    .range([40, Math.min(width, height) / 9]);

const svg = d3.select("#skills-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

const simulation = d3.forceSimulation(data)
    .force("charge", d3.forceManyBody().strength(1)) 
    .force("x", d3.forceX(width / 3.5)) 
    .force("y", d3.forceY(height / 2)) 
    .force("collision", d3.forceCollide().radius(d => sizeScale(d.value * 1.5) + 10)) 
    .on("tick", ticked);


// Dodavanje krugova
const nodes = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", d => sizeScale(d.value * 1.5)) 
    .attr("fill", (d, i) => d3.schemeCategory10[i % 10]) 
    .attr("stroke", "#fff")
    .attr("stroke-width", 3)
    .style("cursor", "pointer")
    .on("mouseover", function (d) {  
        d3.select(this).attr("stroke", "#000");

    })
    .on("mouseout", function () {
        d3.select(this).attr("stroke", "#fff");
    });

const labels = svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .attr("fill", "#fff")
    .attr("font-size", "15px")
    .attr("pointer-events", "none")
    .text(d => d.name);

function ticked() {
    nodes
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    labels
        .attr("x", d => d.x)
        .attr("y", d => d.y + 4);
}

window.addEventListener("resize", () => {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    sizeScale.range([20, Math.min(newWidth, newHeight) / 10]);

    svg.attr("viewBox", `0 0 ${newWidth} ${newHeight}`);
    simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
    simulation.alpha(1).restart();
});
