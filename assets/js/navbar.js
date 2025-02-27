document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const isHomePage = document.body.classList.contains('home');

    if (isHomePage) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});
