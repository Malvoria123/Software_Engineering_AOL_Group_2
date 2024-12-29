// Ambil data reservasi terakhir dari localStorage
const reservations = JSON.parse(localStorage.getItem("reservations")) || {};
const lastReservation = Object.entries(reservations).pop();

const reservationTimeElement = document.getElementById("reservation-time");
const customerNameElement = document.getElementById("customer-name");
const seatTypeElement = document.getElementById("seat-type");

if (lastReservation) {
    const [time, details] = lastReservation;
    reservationTimeElement.textContent = `Waktu Reservasi: ${time}`;
    customerNameElement.textContent = `Nama: ${details.name}`;
    seatTypeElement.textContent = `Tipe Tempat: ${details.seatType === "vip" ? "VIP" : "Tempat Biasa"}`;
} else {
    document.getElementById("reservation-details").textContent = "Tidak ada reservasi yang ditemukan.";
}
