if (window.location.pathname.endsWith("index.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("index.html", ""));
}

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('active');
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
        portfolio_images: ['ISAAC/ISAAC HEADSHOT.jpeg', 'ISAAC/ISAAC 1.jpeg', 'ISAAC/ISAAC 2.jpeg', 'ISAAC/ISAAC 3.jpeg'],
    },

    {
        id: 2,
        name: 'Murphy A',
        gender: 'Male',
        height: "6'3",
        stats: '39-32-40',
        location: 'Dublin, Ireland',
        portfolio_images: ['MURPHY/MURPHY 1.jpeg', 'MURPHY/MURPHY 5.jpg', 'MURPHY/MURPHY 3.jpeg', 'MURPHY/MURPHY 4.jpg'],
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
        height: "5'11",
        stats: '80-34-100', //change to inches
        location: 'Athlone, Ireland',
        portfolio_images: ['NICOLA/NICOLA 6.jpg', 'NICOLA/NICOLA 5.jpg', 'NICOLA/NICOLA 3.jpg', 'NICOLA/NICOLA 1.jpg', 'NICOLA/NICOLA 2.jpg']
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
