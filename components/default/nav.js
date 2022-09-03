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