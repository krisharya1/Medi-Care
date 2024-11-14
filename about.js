// Toggle navigation menu for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    // Toggle display of navigation links
    navLinks.classList.toggle('show');
    // Toggle active class for menu button animation
    menuToggle.classList.toggle('active');
});

// Smooth scroll functionality for internal links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  