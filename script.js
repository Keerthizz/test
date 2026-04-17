function toggleNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Toggle display style
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.background = 'rgba(255,255,255,0.02)';
    nav.style.padding = '10px';
    nav.style.borderRadius = '10px';
  }
}

document.getElementById('year').textContent = new Date().getFullYear();