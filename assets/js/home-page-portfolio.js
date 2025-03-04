const featuredProjects = [
    {
        title: "Loruki Website",
        description: "A fully responsive e-commerce website built with modern web technologies.",
        image: "assets/images/website-project-1.jpg",
        link: "portfolio.html#loruki"
    },
    {
        title: "Task Manager App",
        description: "A mobile application for managing daily tasks and improving productivity.",
        image: "assets/images/mobile-app-1.jpg",
        link: "portfolio.html#task-manager"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects and skills.",
        image: "assets/images/website-project-2.jpg",
        link: "portfolio.html#portfolio-site"
    }
    // Add one more project if you want to display 4
];

function loadFeaturedProjects() {
    const portfolioGrid = document.getElementById("featured-projects");
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    featuredProjects.forEach((project) => {
        const projectHTML = `
            <div class="portfolio-item">
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

document.addEventListener("DOMContentLoaded", loadFeaturedProjects);