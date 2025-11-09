document.addEventListener('DOMContentLoaded', () => {
  const layananCards = document.querySelectorAll('.rifan_kartu');
  
  layananCards.forEach(card => {
    let hoverTimeout;

    card.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        card.style.transform = 'translateY(-6px)';
        card.style.boxShadow = '0 10px 25px rgba(0, 229, 255, 0.3)';
      }, 100);
    });

    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '';
    });
  });


  const deskripsi = document.querySelector('.deskripsi');
  if (deskripsi) {

    deskripsi.setAttribute('role', 'doc-subtitle');
    deskripsi.setAttribute('aria-live', 'polite');
  }


  const ikonElements = document.querySelectorAll('.kartu_ikon');
  if (ikonElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY * 0.05; 
      ikonElements.forEach(ikon => {
        ikon.style.transform = `translateY(${scrollY}px)`;
      });
    });
  }

  layananCards.forEach(card => {
    if (!card.classList.contains('service-card')) {
      card.classList.add('service-card');
    }
  });
});