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
                            <a class="nav-link" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/portfolio/">PORTFOLIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about/">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact/">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.facebook.com/share/14yiyNvAqq/?mibextid=wwXIfr" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.instagram.com/luke_petzer?igsh=b3ZibWlzZDU3ZHli&utm_source=qr" target="_blank"><i class="fab fa-instagram"></i></a>
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
                    <h3>About Me</h3>
                    <p>Luke Petzer is a passionate web developer dedicated to creating beautiful, functional websites for businesses and individuals.</p>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: contact@lukepetzer.com</p>
                    <p>Phone: (067) 385-2286</p>
                    <p>Address: Cape Town, Western Cape, South Africa</p>
                </div>
                <div class="footer-section">
                function createFooter() {
                    // ...
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <p><a href="/">Home</a></p>
                        <p><a href="/portfolio/">Portfolio</a></p>
                        <p><a href="/about/">About Us</a></p>
                        <p><a href="/contact/">Contact</a></p>
                    </div>
                    // ...
                }
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/share/14yiyNvAqq/?mibextid=wwXIfr" aria-label="Facebook"><i class="fab fa-facebook-f"  target="_blank"></i></a>
                        <a href="https://www.instagram.com/luke_petzer?igsh=b3ZibWlzZDU3ZHli&utm_source=qr" aria-label="Instagram"><i class="fab fa-instagram"  target="_blank"></i></a>
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" aria-label="LinkedIn"  target="_blank"><i class="fab fa-linkedin-in"></i></a>
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