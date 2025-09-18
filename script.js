  /* === FUNGSI MUSIK === */
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  let isPlaying = true;

  function toggleMusic() {
    if (isPlaying) {
      music.pause();
      musicBtn.innerHTML = "⏸️"; 
    } else {
      music.play();
      musicBtn.innerHTML = "🎵"; 
    }
    isPlaying = !isPlaying;
  }

  /* === FUNGSI BUKA UNDANGAN === */
  function openInvitation() {
    document.getElementById("cover").style.display = "none";
    document.querySelector(".nav").style.display = "flex";
    music.play();

  // mainkan video setelah buka undangan
  const video = document.getElementById("bg-video");
  video.play();

    // langsung trigger cek reveal pertama kali
    revealObserver.observe(document.getElementById("opening"));
  }

   /* === SECTION UCAPAN & MAPS === */
  function kirimUcapan() {
    let ucapan = document.getElementById("ucapanText").value.trim();
    if (ucapan === "") {
      alert("Tulis ucapan terlebih dahulu 😊");
      return;
    }
    let nomor = "6282338804175"; // nomor WA (pakai kode negara 62)
    let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(ucapan);
    window.open(url, "_blank");
  }

  /* === COUNTDOWN === */
  const countdownEl = document.getElementById("countdown");
  const weddingDate = new Date("2025-12-25 09:00:00").getTime(); 
  setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    if (distance < 0) { countdownEl.innerHTML = "Acara sudah berlangsung"; return; }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.innerHTML = `
      <div>${days}<br>Hari</div>
      <div>${hours}<br>Jam</div>
      <div>${minutes}<br>Menit</div>
      <div>${seconds}<br>Detik</div>
    `;
  }, 1000);

/* === COPY TO CLIPBOARD === */
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    // sukses, tapi tidak perlu alert
    console.log("Teks berhasil disalin:", text); // opsional untuk debug
  }).catch(err => {
    console.error("Gagal menyalin teks: ", err);
  });
}

/* === SAVE TO CALENDAR === */
function saveToCalendar() {
  const title = "Pernikahan Arin & Yusuf ";
  const start = "20251225T020000Z"; // 25 Des 2025, 09:00 WIB
  const end   = "20251225T050000Z"; // 25 Des 2025, 12:00 WIB
  const details = "Undangan pernikahan Arin & Yusuf ";
  const location = "https://maps.app.goo.gl/SudKTfmu81KAoeNU7"; // link Google Maps

  const url = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  
  window.open(url, "_blank");
}

 /* === REVEAL ANIMATION BUNGA === */
  document.addEventListener("DOMContentLoaded", function () {
    const bunga = document.querySelector(".section-divider img");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bunga.classList.add("show");
        }
      });
    });

    observer.observe(bunga);
  });

  /* === REVEAL ANIMATION WITH INTERSECTION OBSERVER === */
  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // kalau mau sekali saja animasi, uncomment ini:
        // revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => {
    revealObserver.observe(el);
  });