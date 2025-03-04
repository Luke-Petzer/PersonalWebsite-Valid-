function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">LUKE PETZER</a>
                <button class="navbar-toggler" type="button" id="burger-menu-btn" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between" id="navbarContent">
                    <ul class="navbar-nav flex-grow-1 justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="portfolio.html">PORTFOLIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.body.prepend(header);
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>Luke Petzer is a passionate web developer dedicated to creating beautiful, functional websites for businesses and individuals.</p>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: contact@lukepetzer.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Web Dev St, Internet City, 12345</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <p><a href="index.html">Home</a></p>
                    <p><a href="portfolio.html">Portfolio</a></p>
                    <p><a href="about.html">About Us</a></p>
                    <p><a href="contact.html">Contact</a></p>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Luke Petzer. All rights reserved.</p>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
    createHeader();
    createFooter()
});