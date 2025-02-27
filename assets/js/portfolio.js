const portfolioData = {
    websites: [
        {
            title: "E-commerce Website",
            description: "A fully responsive e-commerce website built with modern web technologies.",
            learned: "Improved my skills in React and Redux while implementing complex state management.",
            image: "/assets/images/ecommerce-website.jpg"
        },
        // Add more website projects here
    ],
    mobileApps: [
        {
            title: "Fitness Tracker App",
            description: "A mobile application for tracking workouts and nutrition.",
            learned: "Gained experience in mobile app development using React Native and integrating with health APIs.",
            image: "/assets/images/fitness-app.jpg"
        },
        // Add more mobile app projects here
    ],
    projects: [
        {
            title: "Machine Learning Project",
            description: "A project exploring natural language processing techniques.",
            learned: "Deepened my understanding of NLP and machine learning algorithms.",
            image: "/assets/images/ml-project.jpg"
        },
        // Add more projects here
    ]
};

function displayPortfolioItems(category) {
    const portfolioItems = document.getElementById('portfolio-items');
    portfolioItems.innerHTML = '';

    portfolioData[category].forEach((item, index) => {
        const itemHtml = `
            <div class="portfolio-item">
                <div class="portfolio-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="portfolio-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <h3>What I Learned:</h3>
                    <p>${item.learned}</p>
                </div>
            </div>
        `;
        portfolioItems.innerHTML += itemHtml;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-filter');
            displayPortfolioItems(category === 'mobile-apps' ? 'mobileApps' : category);
        });
    });

    // Display websites by default
    displayPortfolioItems('websites');
});
