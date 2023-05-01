const menuBtn = document.querySelector(".menu-btn");
const navMenus = document.querySelector(".nav-menus");
const dropDown = document.querySelector(".dropdown")
const dropDownMenu = document.querySelector(".dropdown-menu")
let menuOpen = false;

//Hamburger menu button animation and Nav Menus show
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        navMenus.classList.add("show");
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        navMenus.classList.remove("show");
    }
});


//Nav Menus Drop Down Menus Show
dropDown.addEventListener("click", () => {
    if (dropDownMenu.classList.contains("show")) {
        dropDownMenu.classList.remove("show")
    }
    else {
        dropDownMenu.classList.add("show")
    }
})