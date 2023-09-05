document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const navbarMenu = document.querySelector(".navbar-menu");

    menuButton.addEventListener("click", function () {
        navbarMenu.style.display = (navbarMenu.style.display === "flex") ? "none" : "flex";
    });
});
