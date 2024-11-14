// Handle form submission

// Toggle navigation menu for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    // Toggle display of navigation links
    navLinks.classList.toggle('show');
    // Toggle active class for menu button animation
    menuToggle.classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formMessage = document.getElementById('formMessage');
  
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      formMessage.textContent = 'Thank you for reaching out! We will get back to you shortly.';
      formMessage.style.color = '#28a745'; // Success message color
      this.reset(); // Clear the form
    } else {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = '#dc3545'; // Error message color
    }
  });
  