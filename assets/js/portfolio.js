const portfolioData = {
    websites: [
        {
            title: "Loruki Website",
            description: "A base website populated with base information showcasing my skills in layouts and basic CSS animations.",
            learned: [
                "Improved my my understanding of layouts and responsive design",
                "How to create a contact form linked to a google sheet",
                "Using external fonts and icons"
            ],
            image: "/assets/images/website-project-1.jpg"
        },
        // Add more website projects here
    ],
    mobileApps: [
        {
            title: "Fitness Tracker App",
            description: "A mobile application for tracking workouts and nutrition.",
            learned: [
                "Gained experience in mobile app development using React Native",
                "Integrated with health APIs for comprehensive tracking",
                "Implemented real-time data synchronization"
            ],
            image: "coming-soon"
        },
        // Add more mobile app projects here
    ],
    projects: [
        {
            title: "Machine Learning Project",
            description: "A project exploring natural language processing techniques.",
            learned: [
                "Deepened my understanding of NLP algorithms",
                "Implemented and fine-tuned various machine learning models",
                "Worked with large datasets and improved data preprocessing skills"
            ],
            image: "coming-soon"
        },
        // Add more projects here
    ]
};

function displayPortfolioItems(category) {
    const portfolioItems = document.getElementById('portfolio-items');
    portfolioItems.innerHTML = '';

    portfolioData[category].forEach((item, index) => {
        const imageHtml = item.image === "coming-soon" 
            ? '<div class="coming-soon">Coming Soon</div>'
            : `<img src="${item.image}" alt="${item.title}">`;
        const itemHtml = `
            <div class="portfolio-item" style="opacity: 0; transform: translateY(20px);">
                <div class="portfolio-image">
                    ${imageHtml}
                </div>
                <div class="portfolio-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <h3>What I Learned:</h3>
                    <ul>
                        ${item.learned.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        portfolioItems.innerHTML += itemHtml;
    });

    // Animate items
    setTimeout(() => {
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
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
