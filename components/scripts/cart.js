const cartItems = JSON.parse(localStorage.getItem('cart'));

const items = {
    NikeSuit: {
        Pink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/239f10fa-e64b-4c19-87d1-18f08e23f417/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png",
        Black: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1ab3e62a-8612-40b8-bfae-298f25c51312/top-da-running-a-manica-lunga-dri-fit-CdmbB0.png"
    }
}


cartItems.forEach(item => {
    const container = document.querySelector(".items-container");
    `
    <div class="items-wrapper">
        <p class="count">1</p>
        <img src="${items}">
        <div class="item-dettails">
            <h1>NikeSuit</h1>
            <p>Taglia: XS</p>
            <p>Colore: Pink</p>
        </div>
    </div>
    `
    const name = item[0]
    const color = item[2]
    
    console.log(items.name.color)
});