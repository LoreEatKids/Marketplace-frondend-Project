import { landingProducts } from "./config.js";
"use strict";

const shirtsContainer = document.querySelector(".shirts-container");
const shoesContainer = document.querySelector(".shoes-container");

function displayProducts(products, selectedCurrency, container) {
    products.forEach(product => {
        const html = 
        `
        <li>
            <a href="item.html" target="_blank">
                <img src="${product[0]}">
            </a>
            <div class="price-container d-flex jc-sb">
                <h1 class="product-name">${product[2]}</h1>
                <p class="product-prezzo">${product[1]}${selectedCurrency}</p>
            </div>
            <p class="product-desc">${product[3]} - <b>${product[4]}</b></p>
        </li>
        `
        container.insertAdjacentHTML("beforeend", html);
    });
};
displayProducts(landingProducts.tShirts, landingProducts.preferredCurrency, shirtsContainer);
displayProducts(landingProducts.shoes, landingProducts.preferredCurrency, shoesContainer);

const productsContainer = [...document.querySelectorAll("#container")];
const nxtBtn = [...document.querySelectorAll(".swiper-button-next")];
const prvBtn = [...document.querySelectorAll(".swiper-button-prev")];

productsContainer.forEach((item, i) => {
    console.log(nxtBtn[i])
    nxtBtn[i].addEventListener("click", ()=> item.scrollLeft += 300);
    prvBtn[i].addEventListener("click", ()=> item.scrollLeft -= 300);

    item.addEventListener("scroll", ()=> {
        if(item.scrollLeft === 0) prvBtn[i].classList.add("disabled");
        if(item.scrollLeft === 1110) nxtBtn[i].classList.add("disabled");

        if(item.scrollLeft != 0) prvBtn[i].classList.remove("disabled");
        if(item.scrollLeft != 1110) nxtBtn[i].classList.remove("disabled");
    })
})
