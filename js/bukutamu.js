
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rifan_form_bukutamu');
  const notif = document.getElementById('notif');

  if (!form || !notif) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const pesan = document.getElementById('pesan')?.value?.trim();

    if (!nama || !pesan) {
      showNotification('Mohon isi nama dan pesan.', 'error');
      return;
    }

    simulateSubmit({ nama, email, pesan });
  });

  function simulateSubmit(data) {
    showNotification('Mengirim pesan ke blockchain...', 'info');
    setTimeout(() => {
      saveToLocalStorage(data);
      showNotification(`✅ Terima kasih, ${data.nama}! Pesan Anda telah tercatat di ledger kami.`, 'success');
      form.reset();
    }, 1200);
  }
  function saveToLocalStorage(entry) {
    const entries = JSON.parse(localStorage.getItem('bukutamu_nexachain')) || [];
    const newEntry = {
      id: Date.now(),
      ...entry,
      timestamp: new Date().toLocaleString('id-ID')
    };
    entries.unshift(newEntry);
    localStorage.setItem('bukutamu_nexachain', JSON.stringify(entries.slice(0, 50)));
  }

  function showNotification(message, type = 'info') {
    notif.textContent = message;

    notif.className = 'notif';

    notif.classList.add(`notif--${type}`);

    const styles = {
      success: { color: '#00e5ff', fontWeight: '600' },
      error: { color: '#ff4081', fontWeight: '500' },
      info: { color: '#8a2be2', fontStyle: 'italic' }
    };

    Object.assign(notif.style, styles[type] || styles.info);
  }

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#00e5ff';
      input.style.boxShadow = '0 0 0 2px rgba(0, 229, 255, 0.2)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    });
  });
});