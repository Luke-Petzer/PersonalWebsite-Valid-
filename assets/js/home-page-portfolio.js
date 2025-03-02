const featuredProjects = [
    {
        title: "Loruki Website",
        description: "A fully responsive e-commerce website built with modern web technologies.",
        image: "/assets/images/website-project-1.png",
        link: "#",
        category: "web-design"
    },
    // Add more featured projects here
];

function loadFeaturedProjects() {
    const portfolioGrid = document.querySelector(".portfolio-grid");
    portfolioGrid.innerHTML = '';

    featuredProjects.forEach((project) => {
        const projectHTML = `
            <div class="portfolio-item" data-category="${project.category}">
                <img src="${project.image}" alt="${project.title}" class="portfolio-image">
                <div class="portfolio-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn btn-primary view-project">View Project</a>
                </div>
            </div>
        `;
        portfolioGrid.innerHTML += projectHTML;
    });
}

function filterProjects(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadFeaturedProjects();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.filter);
        });
    });
});