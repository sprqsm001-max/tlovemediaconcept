/* tlovemediaconcept/assets/js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
