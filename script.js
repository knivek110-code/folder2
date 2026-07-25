

// LOADER

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.transition = "0.6s";

});

// NAVBAR SHADOW

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if (window.scrollY > 80) {

navbar.style.padding = "16px 9%";

navbar.style.boxShadow = "0 15px 35px rgba(0,0,0,.35)";

}

else {

navbar.style.padding = "22px 9%";

navbar.style.boxShadow = "none";

}

});

// SCROLL TO TOP BUTTON

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

scrollBtn.style.display = "block";

}

else {

scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// SMOOTH NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// SCROLL REVEAL

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(

".service-card, .skill-card, .project-card, .contact-card"

).forEach((card)=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition="0.8s ease";

observer.observe(card);

});

// ACTIVE NAVIGATION LINK

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

// HERO STATS COUNTER

const counters=document.querySelectorAll(".stat h2");

let started=false;

window.addEventListener("scroll",()=>{

const heroStats=document.querySelector(".hero-stats");

if(!started && window.scrollY>heroStats.offsetTop-500){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/60;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

});

// CURRENT YEAR

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} Kevin Ndegwa. All Rights Reserved.`;

}