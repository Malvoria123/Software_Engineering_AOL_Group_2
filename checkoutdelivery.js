// Ambil data pelanggan dan pesanan dari LocalStorage
const customerName = localStorage.getItem('customerName');
const customerPhone = localStorage.getItem('customerPhone');
const customerAddress = localStorage.getItem('customerAddress');
const orderList = JSON.parse(localStorage.getItem('cart')) || [];

// Periksa apakah data pelanggan tersedia
if (!customerName || !customerPhone || !customerAddress) {
    alert('Data pengiriman tidak ditemukan. Mohon kembali ke halaman Delivery.');
    window.location.href = 'delivery.html';
} else {
    // Tampilkan data pelanggan di halaman checkout
    document.getElementById('customer-name').textContent = customerName;
    document.getElementById('customer-phone').textContent = customerPhone;
    document.getElementById('customer-address').textContent = customerAddress;

    // Tampilkan daftar pesanan
    const orderListElement = document.getElementById('order-list');
    if (orderList.length > 0) {
        orderList.forEach(order => {
            const li = document.createElement('li');
            li.textContent = `${order.quantity}x ${order.name} - Rp ${order.totalPrice}`;
            orderListElement.appendChild(li);
        });
    } else {
        orderListElement.innerHTML = '<li>Pesanan kosong</li>';
    }
}

// Tambahkan total harga
const totalPriceElement = document.getElementById('checkout_total');
let total = 0;
orderList.forEach(item => {
    total += item.totalPrice;
});
totalPriceElement.textContent = `Rp ${total}`;

// Fungsi untuk tombol checkout
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', proceedToDelivery);

function proceedToDelivery() {
    alert('Terima kasih telah melakukan pemesanan!');

    // Simpan data tambahan untuk animasi delivery
    localStorage.setItem('deliveryStartTime', new Date().toISOString());
    localStorage.setItem('totalPrice', total); // Simpan total harga ke LocalStorage

    // Redirect ke halaman animasi delivery (jangan hapus datanya di sini)
    window.location.href = 'animasidelivery.html';
}
