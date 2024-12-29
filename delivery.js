// Ambil elemen input dan tombol
const nameInput = document.getElementById('customer-name');
const phoneInput = document.getElementById('phone-number');
const addressInput = document.getElementById('address');
const submitButton = document.getElementById('submit-delivery');

// Tambahkan event listener ke tombol submit
submitButton.addEventListener('click', () => {
    // Ambil nilai input dari form
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();

    // Validasi input
    if (!name || !phone || !address) {
        alert('Semua kolom harus diisi!');
        return;
    }

    // Validasi nomor telepon (hanya angka dan minimal 8 digit)
    if (!/^\d{8,}$/.test(phone)) {
        alert('Nomor telepon harus berupa angka dan minimal 8 digit!');
        return;
    }

    // Simpan data ke LocalStorage
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerPhone', phone);
    localStorage.setItem('customerAddress', address);

    // Notifikasi
    alert(`Terima kasih, ${name}. Pesanan Anda akan diteruskan.`);

    // Redirect ke halaman menu
    window.location.href = 'menudelivery.html';
});
