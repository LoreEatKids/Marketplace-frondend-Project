"use strict";

const hamburger = document.querySelector(".hamburger");
const asideNav = document.querySelector(".nav-aside");
const closeBtn = document.querySelector(".nav-aside-close");

const menuIsActive = () => {
    hamburger.classList.toggle("active");
    asideNav.classList.toggle("active");
}

closeBtn.addEventListener("click", menuIsActive);
hamburger.addEventListener("click", menuIsActive);

// const fadeout = ()=> {
//     const loaderWrapper = document.querySelector(".wrapper");
//     loaderWrapper.classList.add("fade");
// }

// window.addEventListener("load", fadeout)

// preloader

// shoes: [
//     "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/e777c881-5b62-4250-92a6-362967f54cca/scarpa-air-force-1-07-2PL28X.png",
//     "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/d9f1d9ee-a848-4a36-aab9-48b241078ebb/scarpa-air-force-1-le-7XSl5m.png",
//     "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/d1a8d781-2838-471d-b1c8-f72387dcf541/scarpa-dunk-low-G7jkkF.png",
//     "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/1a7f1845-6020-4660-8148-bd48e44f6ea3/scarpa-air-force-1-07-Hx43wp.png",
//     "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/0cd1a859-a4b8-420b-8d2c-6f6712dfbd15/scarpa-air-jordan-1-mid-se-9zbmsq.png"
// ]

const productsContainer = document.querySelector(".container");

const homePage = {
    selectedCurrency: "$",
    tShirts: [
        ["https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/9656e742-4dfe-41d3-b768-c07aa86f4151/maglia-da-calcio-a-manica-corta-dri-fit-academy-R1jkvD.png", "13.99", "Pro Fit", "Linea Pro Fit 2021", "Ragazzo"],
        ["https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/fc09cd72-c5b0-482b-8a53-65327638399a/canotta-da-training-dri-fit-one-CQTd7g.png", "32.10", "Pro Fit", "Linea Pro Fit 2022", "Ragazza"],
        ["https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/4d299343-ed08-443d-8178-3aa47dc03562/canotta-da-training-dri-fit-one-4fh7Ps.png", "9.99", "Dry Fit", "Nuova linea Dry Fit 2019", "Ragazza"],
        ["https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/791b1a7f-844f-4ebf-b84c-285206307df1/canotta-yoga-dri-fit-G5JvP6.png", "12.99", "Fit Accademy", "Restock linea Dry Fit 2020", "Ragazza"],
        ["https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/89d86198-f33c-46a2-b563-3aaf71326ee8/tuta-da-calcio-in-maglia-dri-fit-academy-vDf3kP.png", "43.15", "KO", "Restock line KO (2006)", "Ragazzo"]
    ],
};

function displayProducts(products, selectedCurrency) {
    products.forEach(product => {
        const html = 
        `
        <li>
            <img src="${product[0]}">
            <div class="price-container d-flex jc-sb">
                <h1 class="product-name">${product[2]}</h1>
                <p class="product-prezzo">${product[1]}${selectedCurrency}</p>
            </div>
            <p class="product-desc">${product[3]} - ${product[4]}</p>
        </li>
        `
        productsContainer.insertAdjacentHTML("beforeend", html);
    });
};

displayProducts(homePage.tShirts, homePage.selectedCurrency);