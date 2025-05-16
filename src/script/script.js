import { menuArray } from "/src/script/data.js";

const [{ name,
    ingredients,
    id,
    price,
    emoji }] = menuArray

const container = document.querySelector('.items-listed-container')
const cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container');
document.body.appendChild(cartContainer); // Add it to the body or somewhere specific

const cartItems = [];
document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        handleAddBtn(e.target.dataset.id);
    } else if (e.target.id === 'buy-btn') {
        handleBuy();
    }
});


function handleAddBtn(itemId) {
    const itemTargetObj = menuArray.filter(function (item) {
        return item.id === itemId
    })[0]
    console.log(itemId)


    
}


const renderItems = () => {
    let htmlOutput = '<p> choose which one you want? '

   
    menuArray.forEach((item) => {


        htmlOutput +=

            `
        <div id="items-listed">    
        <span class="emoji"> ${item.emoji} </span>
        <h3> ${item.name}</h3>
        <p> this item contains ${item.ingredients.join(', ')}</p>
        <span class="price"> $${item.price}</span>
        <button class="add-item-btn" data-add="add-btn" data-id="${item.id}" type="submit"> + </button>
        </div>
        <hr>

        `})


    container.innerHTML = htmlOutput

}


function renderCart() {
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '';
        return;
    }

    let cartHtml = '<h3>Your Order</h3>';
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        cartHtml += `
            <div class="cart-item">
                <span>${item.name} - $${item.price}</span>
            </div>
        `;
        totalPrice += item.price;
    });

    cartHtml += `<h4>Total: $${totalPrice}</h4>`;
    cartHtml += `<button id="buy-btn">Buy Items</button>`;

    cartContainer.innerHTML = cartHtml;
}

function handleBuy() {
    alert("Thanks for your purchase!");
    cartItems.length = 0; // Clear the cart
    renderCart(); // Re-render to clear UI
}

renderItems();