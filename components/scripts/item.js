import { productShowCase as imgs } from "./config.js";

const container = document.querySelector(".img-section");
const color1El = document.querySelector("#color-pink");
const color2El = document.querySelector("#color-black");
const inputs = document.querySelectorAll("input[name='NikeSuitTaglia']");
const inputsColor = document.querySelectorAll("input[name='NikeSuit']");

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function displayItemsLight(arr) {
    arr.forEach(el => {
        const html = `<img src="${el}" alt="Maglietta" id="product" draggable="false">` 
        container.insertAdjacentHTML("beforeend", html);
    });

    inputsColor.forEach(input => {
        if (input.checked) {
            input.closest(".details-type-color-1").querySelector("img").classList.add("selected");
        }
    })
}

displayItemsLight(imgs.linksLight)

color1El.addEventListener("click", ()=> {
    const products = document.querySelectorAll("#product");

    document.querySelector(".color1-img").style.border = "1px solid #000";
    document.querySelector(".color2-img").style.border = "0";

    products.forEach((product, x) => { product.src = imgs.linksLight[x]; })
})

color2El.addEventListener("click", ()=> {
    const products = document.querySelectorAll("#product");

    document.querySelector(".color1-img").style.border = "0";
    document.querySelector(".color2-img").style.border = "1px solid #000";


    products.forEach((product, x) => { product.src = imgs.linksDark[x]; })
})

document.querySelector("#confirm-btn").addEventListener("click", ()=> {
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checked || !inputsColor[i].checked) return;

        const value = inputs[i].value;
        const valueName = value.split(":")[0];
        const valueTaglia = value.split(":")[1];

        inputsColor.forEach(color => {
            if(!color.checked) return;

            const valueColor = color.value.split(":")[2];
                    
            cartItems.push([valueName, valueTaglia, valueColor])
            window.localStorage.setItem("cart", JSON.stringify(cartItems))
            window.localStorage.setItem("cart-items-number", Number(document.querySelector(".carrello").dataset.itemsNumber) + 1)
        })

        document.querySelector(".carrello").dataset.itemsNumber++;
    }
})