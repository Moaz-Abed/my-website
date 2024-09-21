// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// Close navigation menu when a link is clicked (optional)
const navItems = document.querySelectorAll('.nav-links li a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});

// Update footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();
