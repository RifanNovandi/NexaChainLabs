function copyToClipboard() {
  const addressElement = document.getElementById('wallet-address');
  const copyButton = document.querySelector('.copy-btn');

  const address = addressElement.textContent || addressElement.innerText;

  navigator.clipboard.writeText(address)
    .then(() => {
      copyButton.classList.add('copied');
      setTimeout(() => {
        copyButton.classList.remove('copied');
      }, 1200); 
    })
    .catch(err => {
      console.error('Gagal menyalin: ', err);
      alert('Gagal menyalin alamat. Silakan coba lagi.');
    });
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('kontakForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = form.nama.value.trim();
    const email = form.email.value.trim();
    const pesan = form.pesan.value.trim();

    if (!nama || !pesan) {
      showFeedback('Mohon isi nama dan pesan.', 'error');
      return;
    }

    if (email && !isValidEmail(email) && !isValidWallet(email)) {
      showFeedback('Masukkan email yang valid atau alamat wallet Ethereum/Polygon.', 'warn');
      return;
    }

    submitForm({ nama, email, pesan });
  });

  function isValidEmail(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
  }

  function isValidWallet(str) {
    const walletRegex = /^0x[a-fA-F0-9]{40}$/;
    return walletRegex.test(str);
  }

  function submitForm(data) {
    showFeedback('Mengirim pesan ke tim kami...', 'info');

 
    setTimeout(() => {
      showFeedback(`✅ Terima kasih, ${data.nama}! Pesan Anda telah diterima oleh tim NexaChain Labs.`, 'success');
      form.reset();
    }, 1000);
  }


  function showFeedback(message, type = 'info') {
    let feedbackEl = form.querySelector('.form-feedback');
    if (!feedbackEl) {
      feedbackEl = document.createElement('div');
      feedbackEl.className = 'form-feedback';
      form.appendChild(feedbackEl);
    }

    feedbackEl.textContent = message;
    feedbackEl.className = `form-feedback form-feedback--${type}`;

    const styles = {
      success: { color: '#00e5ff', fontWeight: '600', marginTop: '15px' },
      error: { color: '#ff4081', fontWeight: '500', marginTop: '15px' },
      warn: { color: '#ffea00', fontStyle: 'italic', marginTop: '15px' },
      info: { color: '#8a2be2', fontStyle: 'italic', marginTop: '15px' }
    };

    Object.assign(feedbackEl.style, styles[type] || styles.info);
  }

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = 'var(--accent-cyan)';
      input.style.boxShadow = '0 0 0 2px rgba(0, 229, 255, 0.2)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    });
  });
});

