const hamburger = document.querySelector(".hamburger");
const asideNav = document.querySelector(".nav-aside");
const closeBtn = document.querySelector(".nav-aside-close");
const wrapper = document.querySelector(".wrapper");

const menuIsActive = () => {
    hamburger.classList.toggle("active");
    asideNav.classList.toggle("active");
    wrapper.classList.toggle("active");
}

closeBtn.addEventListener("click", menuIsActive);
hamburger.addEventListener("click", menuIsActive);
wrapper.addEventListener("click", menuIsActive);

window.addEventListener("load", ()=> {
    if (localStorage.getItem("cart-items-number") != null) document.querySelector(".carrello").dataset.itemsNumber = localStorage.getItem("cart-items-number");
    else document.querySelector(".carrello").dataset.itemsNumber = 0;
})