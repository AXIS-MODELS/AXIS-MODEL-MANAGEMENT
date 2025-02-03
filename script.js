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
        portfolio_images: ['IMAGES/ISAAC HEADSHOT.jpeg', 'IMAGES/ISAAC 1.jpeg', 'IMAGES/ISAAC 2.jpeg', 'IMAGES/ISAAC 3.jpeg'],
    },

    {
        id: 2,
        name: 'Murphy A',
        gender: 'Male',
        height: "6'3",
        stats: '39-32-40',
        location: 'Dublin, Ireland',
        portfolio_images: ['IMAGES/MURPHY 1.jpeg', 'IMAGES/MURPHY 5.jpg', 'IMAGES/MURPHY 3.jpeg', 'IMAGES/MURPHY 4.jpg'],
    },

    {
        id: 5,
        name:'Duke M',
        gener: 'Male',
        height: "5'9",
        stats: '35-29-39',
        location: 'Dublin, Ireland',
        portfolio_images: ['IMAGES/DUKE HEADSHOT.jpg', 'IMAGES/DUKE 1.JPG', 'IMAGES/DUKE 2.JPG', 'IMAGES/DUKE 3.JPG', 'IMAGES/DUKE 4.JPG'],
    },

    // Women
    {
        id: 3,
        name: 'Nicola P',
        gender: 'Female',
        height: "5'11",
        stats: '80-34-100', //change to inches
        location: 'Athlone, Ireland',
        portfolio_images: ['IMAGES/NICOLA 6.jpg', 'IMAGES/NICOLA 5.jpg', 'IMAGES/NICOLA 3.jpg', 'IMAGES/NICOLA 1.jpg', 'IMAGES/NICOLA 2.jpg']
    },

    {
        id: 4,
        name: 'Leilani K',
        gender: 'Female',
        height: "5'3",
        stats: '85-69-75', //change to inches
        location: 'Clare, Ireland',
        portfolio_images: ['IMAGES/LEILANI 1.jpg', 'IMAGES/LEILANI 2.jpg', 'IMAGES/LEILANI 3.jpg', 'IMAGES/LEILANI 4.jpg', 'IMAGES/LEILANI 5.jpg']
    },

    {
        id: 6,
        name: 'Michaela P',
        gender: 'Female',
        height: "5'8",
        stats: '33-23-35',
        location: 'Limerick, Ireland',
        portfolio_images: ['IMAGES/MICHAELA HEADSHOT.jpeg', 'IMAGES/MICHAELA 1.jpeg', 'IMAGES/MICHAELA 2.jpeg', 'IMAGES/MICHAELA 3.jpg', 'IMAGES/MICHAELA 4.jpg']
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