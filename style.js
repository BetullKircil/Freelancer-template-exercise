/***************navbar content************** */
var menu1 = document.getElementById("menu1");
menu1.addEventListener("mouseover", () => {
    menu1.style.color = "#1abc9c";
    menu1.style.transition = "0.3s";
})
menu1.addEventListener("mouseout", () => {
    menu1.style.color = "white";
})


/***********menu and menu items*********** */
var menu2 = document.getElementById("menu2");
menu2.addEventListener("mouseover", () => {
    menu2.style.color = "#1abc9c";
    menu2.style.transition = "0.3s";
})
menu2.addEventListener("mouseout", () => {
    menu2.style.color = "white";
})

var menu3 = document.getElementById("menu3");
menu3.addEventListener("mouseover", () => {
    menu3.style.color = "#1abc9c";
    menu3.style.transition = "0.3s";
})
menu3.addEventListener("mouseout", () => {
    menu3.style.color = "white";
})


/*************pictures/ hover************* */
let home = document.getElementById("img1");
home.addEventListener("mouseover", () => {
    home.src = "resimler/ev2.png";
})

home.addEventListener("mouseout", () => {
    home.src = "resimler/ev.png";
})

let cake = document.getElementById("img2");
cake.addEventListener("mouseover", () => {
    cake.src = "resimler/pasta2.png";
})

cake.addEventListener("mouseout", () => {
    cake.src = "resimler/pasta.png";
})

let tent = document.getElementById("img3");
tent.addEventListener("mouseover", () => {
    tent.src = "resimler/cadir2.png";
})

tent.addEventListener("mouseout", () => {
    tent.src = "resimler/cadir.png";
})

let controller = document.getElementById("img4");
controller.addEventListener("mouseover", () => {
    controller.src = "resimler/radio2.png";
})

controller.addEventListener("mouseout", () => {
    controller.src = "resimler/radio.png";
})

let fan = document.getElementById("img5");
fan.addEventListener("mouseover", () => {
    fan.src = "resimler/fan2.png";
})

fan.addEventListener("mouseout", () => {
    fan.src = "resimler/fan.png";
})

let submarine = document.getElementById("img6");
submarine.addEventListener("mouseover", () => {
    submarine.src = "resimler/submarine2.png";
})

submarine.addEventListener("mouseout", () => {
    submarine.src = "resimler/submarine.png";
})



/************Download button************ */
const button1 = document.getElementById("button");
const button1Text = document.getElementById("button1Text");
button1.addEventListener("mouseover", () => {
    button1.style.backgroundColor = "white";
    button1Text.style.color = "black";
})

button1.addEventListener("mouseout", () => {
    button1.style.backgroundColor = "#1abc9c";
    button1Text.style.color = "white";
    button1.style.transition = "0.3s";
})


/*************social media icons************** */
const facebookIcon = document.getElementById("facebook");
facebookIcon.addEventListener("mouseover", () => {
    facebookIcon.style.color = "#1a252f";
    facebookIcon.style.transition = "0.3s";
})

facebookIcon.addEventListener("mouseout", () => {
    facebookIcon.style.color = "white";
})

const twitterIcon = document.getElementById("twitter");
twitterIcon.addEventListener("mouseover", () => {
    twitterIcon.style.color = "#1a252f";
    twitterIcon.style.transition = "0.3s";
})

twitterIcon.addEventListener("mouseout", () => {
    twitterIcon.style.color = "white";
})

const linkedinIcon = document.getElementById("linkedin");
linkedinIcon.addEventListener("mouseover", () => {
    linkedinIcon.style.color = "#1a252f";
    linkedinIcon.style.transition = "0.3s";
})

linkedinIcon.addEventListener("mouseout", () => {
    linkedinIcon.style.color = "white";
})

const githubIcon = document.getElementById("github");
githubIcon.addEventListener("mouseover", () => {
    githubIcon.style.color = "#1a252f";
    githubIcon.style.transition = "0.3s";
})

githubIcon.addEventListener("mouseout", () => {
    githubIcon.style.color = "white";
})


/******about-freelancer text in the span tag***** */
const spanText = document.getElementById("span");
spanText.addEventListener("mouseover", () => {
    spanText.style.color = "#21856f";
    spanText.style.transition = "0.1s";
})
spanText.addEventListener("mouseout", () => {
    spanText.style.color = "#1abc9c";
})

