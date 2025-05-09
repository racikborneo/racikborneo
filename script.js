// Fitur pencarian produk
const input = document.getElementById('cariInput');
const produkList = document.getElementById('produkList');
const cards = produkList.getElementsByClassName('card');

// Menangani modal untuk zoom gambar
const modal = document.getElementById("gambarModal");
const modalImg = document.getElementById("gambarBesar");
const closeBtn = document.getElementsByClassName("close")[0];

// Menambahkan event listener ke semua gambar produk untuk menampilkan modal
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block"; // Menampilkan modal
    modalImg.src = img.src; // Mengatur gambar besar
    modalImg.alt = img.alt;  // Menambahkan alt text
  });
});

// Menutup modal saat tombol close diklik
closeBtn.onclick = function () {
  modal.style.display = "none"; // Menyembunyikan modal
};

// Menutup modal saat klik area luar modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Menyembunyikan modal
  }
};

// Fitur pencarian produk berdasarkan judul
input.addEventListener('keyup', () => {
  const keyword = input.value.toLowerCase(); // Menyaring input pencarian
  Array.from(cards).forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase(); // Mengambil judul produk
    if (title.startsWith(keyword)) {
      card.style.display = 'block'; // Menampilkan kartu produk jika cocok
    } else {
      card.style.display = 'none'; // Menyembunyikan kartu produk jika tidak cocok
    }
  });
});