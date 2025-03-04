document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const isHomePage = document.body.classList.contains('home');

    if (!navbar) return; // Prevents errors if navbar doesn't exist

    if (isHomePage) {
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
});