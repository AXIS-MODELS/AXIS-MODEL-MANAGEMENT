if (window.location.pathname.endsWith("index.html")) {
    window.history.replaceState(null, "", window.location.pathname.replace("index.html", ""));
}

// Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const closeBtn = document.querySelector(".close-btn");
    const modelsToggle = document.querySelector(".models-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const menuLinks = document.querySelectorAll(".nav-links li a:not(.models-toggle");

    //open menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
        dropdownMenu.classList.remove("active");
    });

    //toggle models dropdown
    modelsToggle.addEventListener("click", (event) => {
        event.preventDefault();
        dropdownMenu.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)){
            navLinks.classList.remove("active");
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            dropdownMenu.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".portfolio-images img");
    const overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");

    const fullscreenImg = document.createElement("img");
    overlay.appendChild(fullscreenImg);

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times;";
    overlay.appendChild(closeBtn);

    const prevBtn = document.createElement("div");
    prevBtn.classList.add("nav-btn", "prev-btn");
    prevBtn.innerHTML = "&#10094;";
    overlay.appendChild(prevBtn);

    const nextBtn = document.createElement("div");
    nextBtn.classList.add("nav-btn", "next-btn");
    nextBtn.innerHTML = "&#10095;";
    overlay.appendChild(nextBtn);

    document.body.appendChild(overlay);

    let currentIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            currentIndex = index;
            fullscreenImg.src = this.src;
            overlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function(event) {
        if (event.target !== fullscreenImg && !event.target.classList.contains("nav-btn")) {

            overlay.style.display = "none";
        }
    });

    function updateImage(index) {
        if (index >= 0 && index < images.length) {
            fullscreenImg.src = images[index].src;
            currentIndex = index;
        }
    }

    nextBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        updateImage((currentIndex + 1) % images.length);
    });

    prevBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        updateImage((currentIndex - 1 + images.length) % images.length);
    });

    images.forEach(image => {
        image.addEventListener("click", function () {
            fullscreenImg.src = this.src;
            overlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function (event) {
        if (event.target !== fullscreenImg) {
            overlay.style.display = "none";
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

    // Women
    {
        id: 3,
        name: 'Nicola P',
        gender: 'Female',
        portfolio_images: ['NICOLA/NICOLA 6.jpg'],
    },
];

// Display models
function displayModels() {
    const womenModelsContainer = document.getElementById('women-models');
    const menModelsContainer = document.getElementById('men-models');

    if (!womenModelsContainer && !menModelsContainer) {
        console.error("Error: Models container(s) not found!");
        return;
    }

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

            if (model.gender === 'Female' && womenModelsContainer){
                womenModelsContainer.appendChild(modelCard);
            } else if (model.gender === 'Male' && menModelsContainer){
                menModelsContainer.appendChild(modelCard);
            }
    });
}

document.addEventListener("DOMContentLoaded", displayModels);
