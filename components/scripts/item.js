"use strict";

const container = document.querySelector(".img-section");

const color1El = document.querySelector("#color-pink");
const color2El = document.querySelector("#color-black");

const imgs = {
    linksLight:[
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/239f10fa-e64b-4c19-87d1-18f08e23f417/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bd44f790-ae1b-4e97-8f13-c4f49d44492e/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ecaea942-fea8-495d-9ab9-db678f08ca28/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0c905471-8a44-4c31-9d14-5ecdf813dde9/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
    ],
    linksDark: [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1ab3e62a-8612-40b8-bfae-298f25c51312/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d7ab7716-6575-40cc-befe-c427386d180a/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ada71c5d-4e45-4a76-99d6-97be1c8e0b8e/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/87bc0e1a-8b39-413e-b86a-1b90976168c0/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
    ]
}

function displayItemsLight(arr) {
    const productClass = arr === imgs.linksLight ? "light" : "dark";
    arr.forEach(el => {
        const html = `<img src="${el}" alt="Maglietta" class="product-${productClass}" id="product" draggable="false">` 
        container.insertAdjacentHTML("beforeend", html);
    });
}

displayItemsLight(imgs.linksLight)

color1El.addEventListener("click", ()=> {
    const products = document.querySelectorAll("#product");
    let count = 0;
    products.forEach(product => {
        product.src = imgs.linksLight[count];
        count++;
    })
})

color2El.addEventListener("click", ()=> {
    const products = document.querySelectorAll("#product");
    let count = 0;
    products.forEach(product => {
        product.src = imgs.linksDark[count];
        count++;
    })

    const inputs = document.querySelectorAll("input[name='NikeSuit']");

})

const cartItems = [];

document.querySelector(".confirm-btn").addEventListener("click", ()=> {
    const inputs = document.querySelectorAll("input[name='NikeSuitTaglia']");
    const inputsColor = document.querySelectorAll("input[name='NikeSuit']");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked && inputsColor[i].checked) {
            const value = inputs[i].value;
            const valueName = value.split(":")[0];
            const valueTaglia = value.split(":")[1];
            
            document.querySelector(".carrello").dataset.itemsNumber++;

            for (let x = 0; x < inputsColor.length; x++) { 
                const valueColor = inputsColor[x].value.split(":")[2];
                cartItems.push([valueName, valueTaglia, valueColor]);
            }
        } 
    }

    console.log(cartItems) 
})