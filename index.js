document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('rifan_header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  const heroTitle = document.querySelector('.rifan_hero h2');
  if (heroTitle && heroTitle.dataset.text) {
    const fullText = heroTitle.dataset.text;
    heroTitle.textContent = ''; 
    let i = 0;
    const typeSpeed = 40; 
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        heroTitle.textContent += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, typeSpeed);
  }

  const buttons = document.querySelectorAll('.rifan_btn');
  buttons.forEach(btn => {

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
    });

    btn.addEventListener('focus', () => {
      btn.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('blur', () => {
      btn.style.transform = 'translateY(0)';
    });
  });

  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
    const initParticles = () => {
      if (typeof particlesJS === 'function') {
        particlesJS('particles-js', {
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#00e5ff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.15,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.05,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false
              }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#8a2be2",
              opacity: 0.12,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.7,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 80
              },
              push: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      } else {
        console.warn('[NexaChain] particles.js tidak ditemukan. Efek partikel dinonaktifkan.');
      }
    };

    if (typeof particlesJS !== 'undefined') {
      initParticles();
    } else {
      let retryCount = 0;
      const retryInterval = setInterval(() => {
        if (typeof particlesJS !== 'undefined') {
          clearInterval(retryInterval);
          initParticles();
        } else if (retryCount > 10) {
          clearInterval(retryInterval);
          console.warn('[NexaChain] Gagal memuat particles.js setelah 10 percobaan.');
        }
        retryCount++;
      }, 300);
    }
  }
});

function generateRandomHash() {
  const chars = '0123456789abcdef';
  let hash = '0x';
  for (let i = 0; i < 4; i++) {
    hash += chars[Math.floor(Math.random() * 16)];
  }
  hash += '…';
  for (let i = 0; i < 4; i++) {
    hash += chars[Math.floor(Math.random() * 16)];
  }
  return hash;
}

function animateNewBlock(blockElement) {

  blockElement.classList.add('blockchain-block-new');
  
  setTimeout(() => {
    blockElement.classList.remove('blockchain-block-new');
  }, 800);
}

document.addEventListener('DOMContentLoaded', () => {
  const hashElements = document.querySelectorAll('.blockchain-block .block-hash');
  const blockElements = document.querySelectorAll('.blockchain-block');

  if (hashElements.length === 0) return; 

  setInterval(() => {
    hashElements.forEach((hashEl, index) => {

      hashEl.textContent = generateRandomHash();
      

      if (index === hashElements.length - 1) {
        animateNewBlock(blockElements[index]);
      }
    });
  }, 3000); 
});

document.addEventListener('DOMContentLoaded', function () {

    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Smooth Scrolling untuk Anchor Link (misalnya #section)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.onscroll = function() {
        // Tampilkan tombol jika digulir ke bawah
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animasi pada elemen saat masuk ke viewport (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Contoh: tambahkan class 'animated' ke elemen yang ingin di-animasi
    document.querySelectorAll('.info_box, .blockchain-block, .rifan_btn').forEach(el => {
        observer.observe(el);
    });

    // Optional: Tambahkan efek fade-in untuk testimonial
    document.querySelectorAll('.testimonial-card, .blog-card, .journey-step').forEach(card => {
        card.style.opacity = 0;
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger animasi saat scroll
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.testimonial-card, .blog-card, .journey-step').forEach(card => {
        card.style.transform = 'translateY(20px)';
        fadeInObserver.observe(card);
    });

});