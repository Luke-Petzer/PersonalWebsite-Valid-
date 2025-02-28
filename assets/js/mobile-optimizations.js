document.addEventListener('DOMContentLoaded', function() {
    // Disable animations on mobile devices
    if (window.innerWidth < 768) {
        document.querySelector('.hero-section').style.animation = 'none';
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapse navbar on link click (for mobile)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.hide(); });
    });
});