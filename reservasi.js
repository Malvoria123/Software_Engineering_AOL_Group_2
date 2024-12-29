// Inisialisasi dropdown jam dan menit
const hourDropdown = document.getElementById("reservation-hour");
const minuteDropdown = document.getElementById("reservation-minute");
const reservationMessage = document.getElementById("reservation-message");

for (let i = 1; i <= 24; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    hourDropdown.appendChild(option);
}

for (let i = 0; i < 60; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i.toString().padStart(2, "0"); // Format 2 digit
    minuteDropdown.appendChild(option);
}

// Tangkap elemen form
const submitButton = document.getElementById("submit-reservation");

// Data reservasi disimpan di localStorage
let reservations = JSON.parse(localStorage.getItem("reservations")) || {};

// Event submit reservasi
submitButton.addEventListener("click", () => {
    const hour = hourDropdown.value;
    const minute = minuteDropdown.value;
    const name = document.getElementById("customer-name").value.trim();
    const seatType = document.getElementById("seat-type").value;

    // Validasi input
    if (!name) {
        alert("Nama tidak boleh kosong!");
        return;
    }

    const reservationTime = `${hour}:${minute}`;
    
    // Cek apakah waktu sudah direservasi
    if (reservations[reservationTime]) {
        reservationMessage.textContent = `Maaf, reservasi untuk jam ${reservationTime} sudah penuh.`;
        reservationMessage.style.color = "red";
    } else {
        // Simpan reservasi
        reservations[reservationTime] = { name, seatType };
        localStorage.setItem("reservations", JSON.stringify(reservations));

        reservationMessage.textContent = `Reservasi berhasil untuk jam ${reservationTime}. Kami menunggu kedatangan Anda, ${name}.`;
        reservationMessage.style.color = "green";

        // Redirect ke halaman detail reservasi
        setTimeout(() => {
            window.location.href = 'reservasi-detail.html';
        }, 2000);
    }
});
