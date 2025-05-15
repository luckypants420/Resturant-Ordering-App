import { menuArray } from "/src/script/data.js";

const [{ name,
    ingredients,
    id,
    price,
    emoji }] = menuArray

const container = document.querySelector('.items-listed-container')


document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
       handleAddBtn(e.target.dataset.id)
    }
})


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
        
        `
    })
    container.innerHTML = htmlOutput

}


renderItems()