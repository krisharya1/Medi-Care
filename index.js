// JavaScript to toggle mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  }
  
  // JavaScript function for CTA button click handling
function ctaClick() {
    alert("Redirecting to sign-up page...");
    // Add logic to redirect or open a modal for the sign-up page
    window.location.href = "#"; // Replace # with the URL to redirect
  }
  
  // JavaScript function to handle feature card click events
function showFeatureDetails(featureName) {
    alert("Learn more about " + featureName);
    // You can replace this alert with a modal or redirect to a feature-specific page
  }
  
  // JavaScript function to handle benefit card click events
function showBenefitDetails(benefitName) {
    alert("Learn more about " + benefitName);
    // You can replace this alert with a modal or redirect to a benefit-specific page
  }
  
  // JavaScript function to handle any future interactivity (e.g., rotating testimonials)
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
  testimonials.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}

function rotateTestimonials() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// Show the first testimonial by default
showTestimonial(currentIndex);
// Change testimonial every 5 seconds
setInterval(rotateTestimonials, 5000);
// JavaScript function to handle plan selection
function selectPlan(planName) {
    alert("You have selected the " + planName + " plan. Thank you!");
    // You can replace this alert with a redirect to the payment page or further steps
  }
  
  // JavaScript function to toggle the display of FAQ answers
function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    answerElement.style.display = answerElement.style.display === "block" ? "none" : "block";
  }
  

// JavaScript function to handle sign up button click
function signUp() {
    alert("Thank you for your interest! You will be redirected to the sign-up page.");
    // You can replace this alert with a redirect to the actual sign-up page
    // window.location.href = "sign-up.html"; // Uncomment this line for redirection
  }
  
  // JavaScript function to handle any footer-related functionality (e.g., social media interactions)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior for demonstration
      alert(`You clicked on ${icon.textContent}`);
    });
  });
  
