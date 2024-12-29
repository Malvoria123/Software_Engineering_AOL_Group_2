document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const orderItems = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');
    const totalQuantityElement = document.getElementById('total-quantity');

    let total = 0;
    let totalQuantity = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>Rp ${item.totalPrice}</td>
        `;
        orderItems.appendChild(row);
        total += item.totalPrice;
        totalQuantity += item.quantity;
    });

    totalPriceElement.textContent = `Rp ${total}`;
    totalQuantityElement.textContent = totalQuantity;
});

function applyDiscount() {
    const discountCode = document.getElementById('discount-code').value;
    alert(`Discount code ${discountCode} applied!`);
}

function confirmPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }
    window.location.href = 'checkouttakeaway.html';

    

}
