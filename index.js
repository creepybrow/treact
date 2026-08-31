const menuButton = document.querySelector(".menu__button");
const navLinks = document.querySelector(".nav__links--wrapper");
const menuIcon = document.querySelector(".menu__button i");

menuButton.addEventListener("click", function(){
    navLinks.classList.toggle("menu__open");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle(fa-xmark);

})