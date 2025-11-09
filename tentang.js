document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.rifan_tentang_konten, .rifan_tentang_visi, .rifan_tentang_misi, .event');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const line = document.createElement('div');
    line.classList.add('timeline-line');
    timeline.appendChild(line);

    window.addEventListener('scroll', () => {
      const rect = timeline.getBoundingClientRect();
      const scrollPercent = Math.min(1, Math.max(0, 1 - rect.top / window.innerHeight));
      line.style.height = `${scrollPercent * 100}%`;
    });
  }
});

function typeEffect(element, text, speed = 80) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

const headerTitle = document.querySelector('header h1');
if (headerTitle) {
  const originalText = headerTitle.textContent;
  headerTitle.textContent = '';
  typeEffect(headerTitle, originalText);
}


document.querySelectorAll('.event').forEach(event => {
  event.addEventListener('mouseenter', () => {
    event.style.transform = 'scale(1.05)';
    event.style.boxShadow = '0 0 20px #00e5ff';
  });

  event.addEventListener('mouseleave', () => {
    event.style.transform = 'scale(1)';
    event.style.boxShadow = 'none';
  });
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    accordion.classList.toggle('active');
    const span = header.querySelector('span');
    span.textContent = accordion.classList.contains('active') ? '−' : '+';
  });
});