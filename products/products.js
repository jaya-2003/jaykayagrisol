// products.js

// Product Data
const productsData = [
    {
        name: "Smart Irrigation System",
        image: "assets/product1.jpg",
        description: "Automate your irrigation with intelligent sensors that save water and increase yield.",
        price: "₹12,999"
    },
    {
        name: "Drone Crop Monitoring",
        image: "assets/product2.jpg",
        description: "Get aerial insights of your farm with precision drone technology for smarter decisions.",
        price: "₹45,000"
    },
    {
        name: "Soil Health Analyzer",
        image: "assets/product3.jpg",
        description: "Measure soil nutrients in real-time and optimize your crop input costs with AI-driven reports.",
        price: "₹7,499"
    },
    {
        name: "Weather Station Kit",
        image: "assets/product4.jpg",
        description: "Track local weather conditions on your farm and plan accordingly with smart alerts.",
        price: "₹15,000"
    }
];

// Render Product Cards
function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    productsData.forEach(p => {
        const card = document.createElement("div");
        card.className = "bg-white border rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden";

        card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="w-full h-56 object-cover">
      <div class="p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">${p.name}</h3>
        <p class="text-sm text-gray-600 mb-4">${p.description}</p>
        <div class="flex items-center justify-between">
          <span class="text-green-700 font-bold text-lg">${p.price}</span>
          <button class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    `;
        container.appendChild(card);
    });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", renderProducts);
