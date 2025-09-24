document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optional: Stop observing once animated to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'animated' class if it scrolls out of view
                // entry.target.classList.remove('animated');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
        observer.observe(el);
    });

    // Special handling for hero animations (they should be visible on load)
    document.querySelector('.hero-content h2').classList.add('animated');
    document.querySelector('.hero-content p').classList.add('animated');
    document.querySelector('.hero-content .btn').classList.add('animated');
});
