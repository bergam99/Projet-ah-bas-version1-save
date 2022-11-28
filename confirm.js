// Menu Burger

const burger = document.querySelector(".menuBurger");
const navHeader = document.querySelector(".navLink");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navHeader.classList.toggle("active");
})
