function barsMenu() {
    const menu = document.querySelector(".toggleMenu");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const navigationMenu = ["#nav", "#about", "#experience", "#projects", "#contact"];
const navigator = document.getElementById('navigator');
const icon = document.querySelector("#navigator");
let currentIndex = 0;

navigator.addEventListener('click', function () {
    icon.style.transform = `rotate(0deg)`;
    if (currentIndex < navigationMenu.length - 1) {
        currentIndex++;
    } else {
        icon.style.transform = `rotate(180deg)`;
        currentIndex = 0;
    }
    document.querySelector(navigationMenu[currentIndex]).scrollIntoView({ behavior: 'smooth' });
});