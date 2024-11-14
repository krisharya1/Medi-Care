// Toggle navigation menu for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    // Toggle display of navigation links
    navLinks.classList.toggle('show');
    // Toggle active class for menu button animation
    menuToggle.classList.toggle('active');
});

// Form validation and submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const formMessage = document.getElementById('formMessage');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      formMessage.textContent = "Passwords do not match. Please try again.";
      formMessage.style.color = "#dc3545"; // Error color
    } else {
      formMessage.textContent = "Successfully registered! Welcome to MediCare.";
      formMessage.style.color = "#28a745"; // Success color
      this.reset(); // Reset the form
    }
  });
  