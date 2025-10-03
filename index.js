document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-list a');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle the icon between bars and close
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-xmark'); 
    });
  // Close menu when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                // Reset icon
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-xmark'); 
            }
        });
    });
 // 2. Scroll-Based Animation (Intersection Observer)
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
 }, observerOptions);

    fadeInElements.forEach(el => {
        // Elements in the hero section should be immediately visible (without scroll)
        if (el.closest('.hero-section')) {
            el.classList.add('is-visible');
        } else {
            observer.observe(el);
        }
    });
});