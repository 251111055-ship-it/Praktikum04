// bayangan tipis di navbar setelah halaman digulir
const nav = document.getElementById("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("bergeser", window.scrollY > 10);
});

// hitung karakter di kolom catatan
const kolomPesan = document.getElementById("pesan");
const angka = document.getElementById("hitung");
kolomPesan.addEventListener("input", function () {
  angka.textContent = kolomPesan.value.length;
});

// validasi form booking
const form = document.getElementById("formBooking");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  hasil.classList.add("d-none");

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const nama = document.getElementById("nama").value.trim();
  const perlu = document.getElementById("keperluan").value;
  hasil.textContent = "Terima kasih, " + nama + ". Permintaan " + perlu.toLowerCase() + " sudah kami terima.";
  hasil.classList.remove("d-none");
  form.reset();
  angka.textContent = "0";
  form.classList.remove("was-validated");
});

// tutup menu hamburger setelah memilih menu
document.querySelectorAll("#menu .nav-link, #menu .btn").forEach(function (a) {
  a.addEventListener("click", function () {
    const menu = bootstrap.Collapse.getInstance(document.getElementById("menu"));
    if (menu) menu.hide();
  });
});