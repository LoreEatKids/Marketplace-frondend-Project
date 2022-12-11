import { preferredCurrency } from "./config.js";
import { allItems as items} from "./config.js";

console.log(items["NikeSuit"])

const cartItems = JSON.parse(localStorage.getItem('cart'));
const messageEl = document.querySelector(".message");
const itemsContainerEl = document.querySelector(".items-container");
const footerEl = document.querySelector("footer");

function italianTextCorrection() { return `${cartItems.length === 1 ? "C'è" : "Ci sono"} ${cartItems.length} ${cartItems.length === 1 ? "articolo" : "articoli"} nel tuo carrello`;}
function isCartEmpty() { return cartItems === null || cartItems.length === 0 || totalPrice === 0; }

function cartIsEmpty() {
    messageEl.textContent = "Il Carrello è vuoto";
    window.localStorage.clear();
    itemsContainerEl.style.display = "none";
    footerEl.style.bottom = 0;
}

if (cartItems != null) {

    messageEl.textContent = italianTextCorrection();
    let totalPrice = 0;

    cartItems.forEach((item , x) => {
        console.log(items[item[0]][item[2]])
        const container = document.querySelector(".items-container");

        const itemPrice = items[item[0]]["Prezzo"];
        const html = 
        `
        <div class="items-wrapper">
            <p class="count">${x + 1}</p>
            <img src="${items[item[0]][item[2]]}" alt=${items[item[0]]["Prezzo"]}>
            <div class="item-dettails">
                <h1>NikeSuit</h1>
                <p>Taglia: ${item[1]}</p>
                <p>Colore: ${item[2]}</p>
                <p>Prezzo: ${itemPrice + preferredCurrency}</p>
                <button class="delete-button">Elimina dal Carrello</button>
            </div>
        </div>
        `
        container.insertAdjacentHTML("beforeend", html)
        totalPrice += +itemPrice.replace(",",".");

        document.querySelector(".total-price").innerHTML =  `Prezzo totale: <b>${totalPrice.toFixed(2)}${preferredCurrency}</b>`;
    });
} else if (isCartEmpty()) cartIsEmpty();

document.querySelector(".clear").addEventListener("click", ()=> {
    window.localStorage.clear();
    location.reload();
})

const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((btn, x) => {
    btn.addEventListener("click", () => {        
        const index = cartItems.indexOf(cartItems[x]);

        cartItems.splice(index, 1);
        window.localStorage.setItem("cart", JSON.stringify(cartItems));

        const cartNumberItems = localStorage.getItem("cart-items-number") || 0;
        window.localStorage.setItem("cart-items-number", cartNumberItems - 1);
        
        if (isCartEmpty()) cartIsEmpty();
        location.reload();
    })
})