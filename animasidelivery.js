// Ambil data pelanggan dan pesanan dari LocalStorage
const customerName = localStorage.getItem('customerName');
const customerAddress = localStorage.getItem('customerAddress');
const orderList = JSON.parse(localStorage.getItem('cart')) || [];
const totalPrice = localStorage.getItem('totalPrice');

// Tampilkan data pelanggan di halaman delivery
document.getElementById('customer-name').textContent = customerName || 'N/A';
document.getElementById('customer-address').textContent = customerAddress || 'N/A';

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

// Tampilkan total harga
document.getElementById('total-price').textContent = `Rp ${totalPrice || 0}`;

// Simulasi animasi delivery
const statusText = document.getElementById('status-text');
const statusProgress = document.getElementById('status-progress');

let progress = 0;
const statusUpdates = [
    'Pesanan sedang diproses...',
    'Pesanan sedang dikemas...',
    'Pesanan sedang diantar...',
    'Pesanan telah tiba!'
];

const deliveryInterval = setInterval(() => {
    statusProgress.value = progress;
    statusText.textContent = statusUpdates[progress];

    progress++;
    if (progress > statusUpdates.length - 1) {
        clearInterval(deliveryInterval);
        alert('Pesanan Anda telah tiba!');
    }
}, 2000);

// Tombol toggle feedback
const feedbackToggle = document.getElementById('feedback-toggle');
const feedbackSection = document.getElementById('feedback-section');

feedbackToggle.addEventListener('click', () => {
    if (feedbackSection.style.display === 'none' || feedbackSection.style.display === '') {
        feedbackSection.style.display = 'block';
        feedbackToggle.textContent = 'v'; // Ubah tombol ke simbol 'v'
    } else {
        feedbackSection.style.display = 'none';
        feedbackToggle.textContent = '^'; // Kembalikan tombol ke simbol '^'
    }
});


// Fungsi untuk membuat rating interaktif
function createRatingSystem(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Kosongkan elemen default

    // Tambahkan 5 bintang ke dalam elemen rating
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.dataset.value = i; // Simpan nilai bintang
        star.textContent = '★';
        container.appendChild(star);
    }

    const stars = container.querySelectorAll('.star');
    let selectedRating = 0;

    // Event: Hover untuk memberikan indikasi rating sementara
    stars.forEach((star) => {
        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(star.dataset.value, 'hovered');
        });

        star.addEventListener('mouseleave', () => {
            resetStars();
            highlightStars(selectedRating, 'selected');
        });

        // Event: Klik untuk menetapkan rating
        star.addEventListener('click', () => {
            selectedRating = star.dataset.value;
            resetStars();
            highlightStars(selectedRating, 'selected');
        });
    });

    // Fungsi untuk menghapus semua status bintang
    function resetStars() {
        stars.forEach((s) => s.classList.remove('hovered', 'selected'));
    }

    // Fungsi untuk menyoroti bintang berdasarkan nilai
    function highlightStars(value, className) {
        stars.forEach((s) => {
            if (s.dataset.value <= value) {
                s.classList.add(className);
            }
        });
    }

    return () => selectedRating; // Fungsi untuk mendapatkan nilai rating
}

// Inisialisasi rating untuk makanan dan driver
const getFoodRating = createRatingSystem('food-rating');
const getDriverRating = createRatingSystem('driver-rating');

// Menangani pengiriman feedback
document.getElementById('submit-feedback').addEventListener('click', () => {
    const foodRating = getFoodRating();
    const driverRating = getDriverRating();
    const comment = document.getElementById('comment-box').value;

    // Validasi input
    if (foodRating === 0 || driverRating === 0) {
        alert('Please provide ratings for both food and driver.');
        return;
    }

    if (!comment.trim()) {
        alert('Please provide a comment.');
        return;
    }

    // Simpan atau tampilkan feedback
    console.log('Food Rating:', foodRating);
    console.log('Driver Rating:', driverRating);
    console.log('Comment:', comment);

    alert('Thank you for your feedback!');

    // Kosongkan komentar setelah dikirim
    document.getElementById('comment-box').value = '';
});
