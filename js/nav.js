function openNav() {
    hamburger.classList.add("is-active");
    document.getElementById("popUpNav").style.height = "100%";
    console.log("openNav was called");
}

function closeNav() {
    hamburger.classList.remove("is-active");
    document.getElementById("popUpNav").style.height = "0";
    console.log("closeNav was called");
}

// Hamburger Menu Spin
var hamburger = document.querySelector(".hamburger");



hamburger.addEventListener('click', () => hamburger.classList.contains('is-active') ? closeNav() : openNav());

closeNav();