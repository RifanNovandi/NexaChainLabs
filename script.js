function rifanKirimPesan() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const notif = document.getElementById("notif");

  if (nama && email && pesan) {
    notif.textContent = `Terima kasih, ${nama}! Pesanmu telah terkirim.`;
    notif.style.color = "#00ffb3";
    document.getElementById("rifan_form_bukutamu").reset();
  } else {
    notif.textContent = "Mohon isi semua kolom sebelum mengirim!";
    notif.style.color = "red";
  }
  return false; 
}

    window.addEventListener('load', function() {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 300);
    });

    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
      } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
      }
    });
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
