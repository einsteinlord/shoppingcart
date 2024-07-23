// main.js

let shop = document.getElementById('shop');

// Sample data for the items in the cart
let items = [
    { id: 1, name: "Casual Shirt", price: 45, quantity: 0, liked: false },
    { id: 2, name: "Casual Shirt", price: 45, quantity: 0, liked: false },
    { id: 3, name: "Casual Shirt", price: 45, quantity: 0, liked: false },
    { id: 4, name: "Casual Shirt", price: 45, quantity: 0, liked: false }
];

function updateCart() {
    shop.innerHTML = items.map(item => `
        <div class="item" id="item-${item.id}">
            <img width="220" src="/images/img-1.jpg" alt="">
            <div class="details">
                <h3>${item.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                <div class="price-quantity">
                    <h2>$ ${item.price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg" onclick="decreaseQuantity(${item.id})"></i>
                        <div class="quantity">${item.quantity}</div>
                        <i class="bi bi-plus-lg" onclick="increaseQuantity(${item.id})"></i>
                        <i class="bi bi-heart${item.liked ? '-fill' : ''}" onclick="toggleLike(${item.id})" style="color: ${item.liked ? 'red' : 'black'}"></i>
                        <i class="bi bi-trash" onclick="deleteItem(${item.id})"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    updateCartAmount();
}

function increaseQuantity(id) {
    let item = items.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(id) {
    let item = items.find(item => item.id === id);
    if (item && item.quantity > 0) {
        item.quantity -= 1;
        updateCart();
    }
}

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    updateCart();
}

function toggleLike(id) {
    let item = items.find(item => item.id === id);
    if (item) {
        item.liked = !item.liked;
        updateCart();
    }
}

function updateCartAmount() {
    let totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cartAmount').innerText = totalQuantity;
}

updateCart();
