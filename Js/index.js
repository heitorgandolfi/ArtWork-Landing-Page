let menuBtn = document.querySelector("#btn-mobile");
let closeBtn = document.querySelector("#close-menu");

function toggleMenu(event) {
    // if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
}

menuBtn.addEventListener("click", toggleMenu);
// menuBtn.addEventListener("touchstart", toggleMenu);

function closeMenu() {
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}

closeBtn.addEventListener("click", closeMenu);