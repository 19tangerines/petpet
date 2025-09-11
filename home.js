const menuBtn = document.getElementById("menu");
const submenus = document.querySelectorAll(".subicons");
const quack = document.getElementById("duckyou")
var guy = document.getElementById("guy");

menuBtn.addEventListener("click", () => {
  submenus.forEach(submenu => {
    submenu.classList.toggle("active"); // toggle on each one
  });
});

const { ipcRenderer } = require('electron');

const closeBtn = document.getElementById('close');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        console.log('click registered');
        ipcRenderer.send('close-window');
    });
}


guy.addEventListener("click", () => {
    const currimage = document.getElementById("guyimage");
    // let randomNumber = Math.floor(Math.random() * 3) + 1;
    // const quackSound = document.getElementById("quack" + randomNumber);
    const quackSound = document.getElementById("quack1");
    quackSound.play();
    
    if (currimage && currimage.src.endsWith("regL.png")) {
        currimage.src="angryL.png";
    } else if (currimage && currimage.src.endsWith("regR.png")) {
        currimage.src="angryR.png";
    } 
    quack.classList.toggle("angry");

    setTimeout(() => {
        if (currimage && currimage.src.endsWith("angryL.png")) {
            currimage.src="regL.png"
        } else if (currimage && currimage.src.endsWith("angryR.png")) {
            currimage.src="regR.png"
        }
        quack.classList.toggle("angry");
 }, 1000);
});


var holdingcell = document.getElementById('holdingcell');
var dir = 1;
var dist = 0.2;
console.log(holdingcell.offsetWidth);

function draw() {
    var posX = parseFloat(guy.style.left.replace(/px$/, '')) || 0;
    
    posX += dir * dist;

    const currimage = document.getElementById("guyimage");

    if (dir == 1 && posX + guy.offsetWidth > holdingcell.offsetWidth) {
        posX -= posX + guy.offsetWidth - holdingcell.offsetWidth;
        dir *= -1;
        currimage.src="regL.png";
    } else if (dir == -1 && posX < 0) {
        posX = 0;
        dir *= -1;
        currimage.src="regR.png";
    }

    guy.style.left = posX + 'px';

    window.requestAnimationFrame(draw);

}

window.requestAnimationFrame(draw);