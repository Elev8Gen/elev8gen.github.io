// Navbar scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    '.value-card, .ind-box, .service-detail, .process-step, .result-card, ' +
    '.industry-card, .testimonial, .about-card, .metric-card, .outcome-card, .explainer-card, ' +
    '.principle, .approach-card, .tech-detail-card, .cost-card, .industry-deep-card, .info-card'
).forEach(el => {
    el.classList.add('animate-in');
    observer.observe(el);
});
