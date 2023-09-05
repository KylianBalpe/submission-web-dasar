const menu = document.getElementById("menu");
const navbarMenu = document.querySelector(".navbar-menu");

menu.onclick = function () {
    if (navbarMenu.style.display == "flex") {
        navbarMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "flex";
    }
};
