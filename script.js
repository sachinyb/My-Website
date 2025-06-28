// Sidebar collapse/expand
const sidebar = document.getElementById('sidebar');
const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');

if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}

// Submenu open/close
const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.closest('.has-submenu');
    parent.classList.toggle('open');
    // Close other submenus
    document.querySelectorAll('.has-submenu').forEach(item => {
      if (item !== parent) item.classList.remove('open');
    });
  });
});

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.sidebar-links a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Highlight active link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      // Close sidebar on mobile after click
      if (window.innerWidth <= 700) {
        sidebar.classList.remove('open');
      }
    }
  });
});

// Responsive: close sidebar on click outside (desktop), or handle bottom nav (mobile)
function handleSidebarResponsive() {
  if (window.innerWidth <= 700) {
    sidebar.classList.remove('collapsed');
  }
}
window.addEventListener('resize', handleSidebarResponsive);
document.addEventListener('DOMContentLoaded', handleSidebarResponsive);

// Contact form handler (no backend, just show a message)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = 'Thank you for reaching out! I will get back to you soon.';
  this.reset();
}); 