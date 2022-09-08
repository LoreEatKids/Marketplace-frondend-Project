const cartItems = JSON.parse(localStorage.getItem('cart'));
const messageEl = document.querySelector(".message");
const itemsContainerEl = document.querySelector(".items-container");

const currentCurrency = "$";

const items = {
    NikeSuit: {
        Pink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/239f10fa-e64b-4c19-87d1-18f08e23f417/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        Black: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1ab3e62a-8612-40b8-bfae-298f25c51312/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        Prezzo: "10,99",
        Nome: "NikeSuit",
    }
}


if (cartItems != null) {

    messageEl.textContent = `${cartItems.length === 1 ? "C'è" : "Ci sono"} ${cartItems.length} ${cartItems.length === 1 ? "articolo" : "articoli"} nel tuo carrello`;
    let totalPrice = 0;

    cartItems.forEach((item , x) => {
        const container = document.querySelector(".items-container");

        const itemPrice = items[item[0]]["Prezzo"];
        const html = 
        `
        <div class="items-wrapper">
            <p class="count">${x + 1}</p>
            <img src="${items[item[0]][item[2]]}">
            <div class="item-dettails">
                <h1>NikeSuit</h1>
                <p>Taglia: ${item[1]}</p>
                <p>Colore: ${item[2]}</p>
                <p>Prezzo: ${itemPrice + currentCurrency}</p>
                <button class="delete-button">Elimina dal Carrello</button>
            </div>
        </div>
        `
        container.insertAdjacentHTML("beforeend", html)
        totalPrice += Number(itemPrice.replace(",","."));

        document.querySelector(".total-price").innerHTML =  `Prezzo totale: <b>${totalPrice.toFixed(2)}${currentCurrency}</b>`;
    });
}

if (cartItems.length === 0) {
    messageEl.textContent = "Il Carrello è vuoto";
    itemsContainerEl.style.display = "none";
}

document.querySelector(".clear").addEventListener("click", ()=> {
    window.localStorage.clear();
    location.reload()
})

const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((btn, x) => {
    btn.addEventListener("click", () => {        
        const index = cartItems.indexOf(cartItems[x]);
        if (index > -1) {
            cartItems.splice(index, 1);
            window.localStorage.setItem("cart", JSON.stringify(cartItems));

            const cartNumberItems = localStorage.getItem("cart-items-number") || 0;
            window.localStorage.setItem("cart-items-number", cartNumberItems - 1)
            location.reload();
        }
    })
})