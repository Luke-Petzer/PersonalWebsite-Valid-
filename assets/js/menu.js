document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burger-menu-btn');
    const fullScreenMenu = document.getElementById('full-screen-menu');

    if (!burgerBtn || !fullScreenMenu) {
        console.error('Burger menu button or full-screen menu not found');
        return;
    }

    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        fullScreenMenu.classList.toggle('show');
        document.body.style.overflow = fullScreenMenu.classList.contains('show') ? 'hidden' : 'auto';
    });

    // Close menu when clicking on a link
    fullScreenMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            fullScreenMenu.classList.remove('show');
            burgerBtn.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});