let cart = [];

function showCategory(category) {
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => {
        cat.style.display = (cat.id === category) ? 'block' : 'none';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showCategory('ramen');
});

function toggleCart() {
    const cart = document.querySelector('.shopping-cart');
    if (cart.style.display === 'none' || cart.style.display === '') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
}

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += itemPrice;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1, totalPrice: itemPrice });
    }
    updateCart();
    
    const existingItem_v2 = cart.find(item => item.name === itemName);
    counter_id = itemName.replace(/\s+/g, "");
    counter_id = document.getElementById(counter_id);
    counter_id.textContent = existingItem_v2.quantity;
}

function removeFromCart(itemName) {
    const existingItem = cart.find(item => item.name === itemName);
    counter_id = itemName.replace(/\s+/g, "");
    counter_id = document.getElementById(counter_id);
    if (existingItem) {
        if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
            existingItem.totalPrice -= existingItem.price;

            counter_id.textContent = existingItem.quantity;
        } else {
            cart = cart.filter(item => item.name !== itemName);
            
            counter_id.textContent = 0;
        }
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity}x ${item.name} - Rp ${item.totalPrice}`;
        cartItems.appendChild(li);
        total += item.totalPrice;
    });

    cartTotal.textContent = total;
}

function checkout() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'paymentdelivery.html';
}