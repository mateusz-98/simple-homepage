document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector("input[type='checkbox']");
    const logo = document.querySelector(".header-logo img");
    const slider = document.querySelector(".slider");
    const hamburger = document.querySelector(".mobile-hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-mobile-menu");

    slider.checked = true;
    
    const setMode = (modeType) => {
        localStorage.setItem("mode", modeType);
        document.documentElement.className = modeType;
    }
    
    const toggleMode = () => {
        if(localStorage.getItem("mode") === "dark-mode") {
            setMode("light-mode");
            logo.src = "img/alarado-icon-homepage.svg";
        } else {
            setMode("dark-mode");
            logo.src = "img/alarado-icon-homepage-dark.svg";
        }
    }
    
    const openMenu = (e) => {
        e.preventDefault();
        mobileMenu.classList.add("open-menu");
    }
    
    const closeMenu = (e) => {
        mobileMenu.classList.remove("open-menu");
    }
    
    input.addEventListener("change", toggleMode);
    hamburger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

});
