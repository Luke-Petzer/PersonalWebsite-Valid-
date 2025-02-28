document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burger-menu-btn');
    const fullScreenMenu = document.getElementById('full-screen-menu');

    burgerBtn.addEventListener('click', function() {
        if (fullScreenMenu.style.display === 'block') {
            fullScreenMenu.style.display = 'none';
        } else {
            fullScreenMenu.style.display = 'block';
        }
    });

    // Close menu when clicking on a link
    const menuLinks = fullScreenMenu.getElementsByTagName('a');
    for (let link of menuLinks) {
        link.addEventListener('click', function() {
            fullScreenMenu.style.display = 'none';
        });
    }
});