// Toggle navigation menu for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    // Toggle display of navigation links
    navLinks.classList.toggle('show');
    // Toggle active class for menu button animation
    menuToggle.classList.toggle('active');
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});
