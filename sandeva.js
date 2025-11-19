// ==============================
//   KONFIGURASI NOMOR PENJUAL
// ==============================

// GANTI nomor di bawah dengan nomor WhatsApp penjual
// Format: "62xxxxxxxxxxx" (tanpa + dan tanpa 0 di depan)
const WHATSAPP_NUMBER = "6281342074706";

// Pesan default ketika tombol di klik
const DEFAULT_MESSAGE =
  "Halo kak, saya tertarik beli nomor virtual server. Boleh info stok dan harganya?";

// ==============================
//        LOGIC TOMBOL WA
// ==============================

/**
 * Membuka WhatsApp dengan nomor dan pesan tertentu
 * @param {string} message - Pesan custom (optional)
 */
function openWhatsApp(message) {
  const text = encodeURIComponent(message || DEFAULT_MESSAGE);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank");
}

/**
 * Scroll lembut ke elemen target
 * @param {string} selector
 */
function smoothScrollTo(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  window.scrollTo({
    top: target.offsetTop - 80,
    behavior: "smooth",
  });
}

// Daftarkan event setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  // Tahun di footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Tombol-tombol WhatsApp
  const heroBtn = document.getElementById("heroWhatsAppBtn");
  const navBtn = document.getElementById("navWhatsAppBtn");
  const cardBtn = document.getElementById("cardWhatsAppBtn");
  const planButtons = document.querySelectorAll(".btn-card");
  const scrollPricingBtn = document.getElementById("scrollPricing");

  if (heroBtn) {
    heroBtn.addEventListener("click", () => openWhatsApp());
  }

  if (navBtn) {
    navBtn.addEventListener("click", () => openWhatsApp());
  }

  if (cardBtn) {
    cardBtn.addEventListener("click", () => openWhatsApp());
  }

  if (scrollPricingBtn) {
    scrollPricingBtn.addEventListener("click", () => {
      smoothScrollTo("#pricing");
    });
  }

  // Tombol pada kartu harga dengan pesan custom
  planButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const planName = btn.getAttribute("data-plan") || "Paket Nomor Virtual";
      const customMessage = `Halo kak, saya mau tanya tentang *${planName}*. Masih tersedia?`;
      openWhatsApp(customMessage);
    });
  });
});
