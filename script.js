if (window.location.pathname.endsWith("index.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("index.html", ""));
}

// Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const closeBtn = document.querySelector(".close-btn");
    const navItems = document.querySelector(".navItem");

    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)){
            navLinks.classList.remove("active");
        }
    });
});

// Model data
const realModels = [
    // Men
    {
        id: 1,
        name: 'Isaac A',
        gender: 'Male',
        height: "6'3",
        stats: '39-32-40',
        location: 'Dublin, Ireland',
        portfolio_images: ['ISAAC/ISAAC HEADSHOT.jpeg'],
    },

    {
        id: 2,
        name: 'Murphy A',
        gender: 'Male',
        height: "6'3",
        stats: '39-32-40',
        location: 'Dublin, Ireland',
        portfolio_images: ['MURPHY/MURPHY 1.jpeg'],
    },

    {
        id: 5,
        name:'Duke M',
        gener: 'Male',
        height: "5'9",
        stats: '35-29-39',
        location: 'Dublin, Ireland',
        portfolio_images: ['DUKE/DUKE 5.jpg'],
    },

    // Women
    {
        id: 3,
        name: 'Nicola P',
        gender: 'Female',
        portfolio_images: ['NICOLA/NICOLA 6.jpg'],
    },

    {
        id: 4,
        name: 'Leilani K',
        gender: 'Female',
        portfolio_images: ['LEILANI/LEILANI 1.jpg'],
    },
];

// Display models
function displayModels() {
    const womenModelsContainer = document.getElementById('women-models');
    const menModelsContainer = document.getElementById('men-models');

    realModels.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        modelCard.innerHTML = `
            <img src="${model.portfolio_images[0]}" alt="${model.name}">
            <div class="name">${model.name}</div>
            `;

            modelCard.addEventListener('click', () => {
                let modelName = model.name.toLowerCase().replace(/[^a-z0-9-]/g, "-");
                window.location.href = `/${modelName}.html`; //Redirect to personal page
            });

            if (model.gender === 'Female'){
                womenModelsContainer.appendChild(modelCard);
            } else {
                menModelsContainer.appendChild(modelCard);
            }
    });
}

document.addEventListener("DOMContentLoaded", displayModels);
