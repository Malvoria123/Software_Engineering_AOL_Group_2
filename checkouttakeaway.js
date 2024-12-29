// Ambil data takeaway dari Local Storage
const name = localStorage.getItem('takeawayName');
const phone = localStorage.getItem('takeawayPhone');
const pickupTime = localStorage.getItem('takeawayTime');

// Periksa apakah data tersedia
if (!name || !phone || !pickupTime) {
    alert('Data takeaway tidak ditemukan. Mohon kembali ke halaman Takeaway.');
    window.location.href = 'takeaway.html';
} else {
    // Tampilkan data di halaman checkout
    document.getElementById('customer-name').textContent = name;
    document.getElementById('customer-phone').textContent = phone;
    document.getElementById('pickup-time').textContent = pickupTime;
}

// Tambahkan event listener untuk tombol selesai
document.getElementById('finish-takeaway').addEventListener('click', () => {
    alert('Pesanan takeaway Anda selesai!');

    // Hapus data dari Local Storage
    localStorage.removeItem('takeawayName');
    localStorage.removeItem('takeawayPhone');
    localStorage.removeItem('takeawayTime');

    // Redirect ke halaman utama atau terima kasih
    window.location.href = 'thankyou.html';
});
