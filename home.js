const menuBtn = document.getElementById("menu");
const submenus = document.querySelectorAll(".subicons");
const guy = document.getElementById("guy");
const quack = document.getElementById("duckyou")

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
    if (currimage && currimage.src.endsWith("regL.png")) {
        document.getElementById("guyimage").src="angryL.png";
    } else {
        document.getElementById("guyimage").src="regL.png";
    }
    quack.classList.toggle("angry");
});