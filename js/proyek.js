document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.galeri_item');
  const techTags = new Set();

  projectCards.forEach(card => {
    const tags = card.querySelectorAll('.tech-stack span');
    tags.forEach(tag => {
      techTags.add(tag.textContent.trim());
    });
  });

  if (techTags.size > 0) {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';
    filterContainer.innerHTML = `
      <button class="filter-btn active" data-filter="all">Semua</button>
      ${Array.from(techTags).map(tag => 
        `<button class="filter-btn" data-filter="${tag}">${tag}</button>`
      ).join('')}
    `;

    const gridContainer = document.querySelector('.grid_galeri');
    if (gridContainer && gridContainer.parentElement) {
      gridContainer.parentElement.insertBefore(filterContainer, gridContainer);
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
          const tags = Array.from(card.querySelectorAll('.tech-stack span')).map(t => t.textContent.trim());
          
          if (filter === 'all' || tags.includes(filter)) {
            card.style.display = 'block';
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease';
              card.style.opacity = '1';
            }, 10);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  projectCards.forEach(card => {
    const icon = card.querySelector('.project-icon');
    if (icon) {
      card.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      });
      card.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
      });
    }
  });

  projectCards.forEach(card => {
    if (!card.classList.contains('project-card')) {
      card.classList.add('project-card');
    }
  });
});