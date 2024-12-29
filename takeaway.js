// Mengisi opsi dropdown jam dan menit
document.addEventListener('DOMContentLoaded', () => {
    const hoursSelect = document.getElementById('hours');
    const minutesSelect = document.getElementById('minutes');

    // Mengisi opsi jam (1-24)
    for (let i = 1; i <= 24; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i.toString().padStart(2, '0'); // Format dua digit (01, 02, ... 24)
        hoursSelect.appendChild(option);
    }

    // Mengisi opsi menit (0-59)
    for (let i = 0; i < 60; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i.toString().padStart(2, '0'); // Format dua digit (00, 01, ... 59)
        minutesSelect.appendChild(option);
    }
});

// Menyimpan data takeaway ke Local Storage
document.getElementById('submit-takeaway').addEventListener('click', () => {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('phone-number').value.trim();
    const hours = document.getElementById('hours').value;
    const minutes = document.getElementById('minutes').value;

    // Validasi input
    if (!name || !phone || !hours || !minutes) {
        alert('Semua kolom harus diisi!');
        return;
    }

    // Format waktu pengambilan
    const pickupTime = `${hours}:${minutes.padStart(2, '0')}`;

    // Simpan data ke Local Storage
    localStorage.setItem('takeawayName', name);
    localStorage.setItem('takeawayPhone', phone);
    localStorage.setItem('takeawayTime', pickupTime);

    alert(`Terima kasih, ${name}. Pesanan Anda akan siap diambil pada pukul ${pickupTime}.`);

    // Redirect ke halaman menu
    window.location.href = 'menutakeaway.html';
});
