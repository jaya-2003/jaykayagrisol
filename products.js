// Render products page: vertical categories with products in grid
function renderProductsPage() {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous content
    container.className = "flex flex-col gap-5";

    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category_id");

    const displayCategory = (category, products) => {
        // Category heading
        const heading = document.createElement("div");
        heading.textContent = category.name;
        heading.className = "flex text-2xl sm:text-3xl font-bold text-green-800 mb-6 mt-10 text-center";
        container.appendChild(heading);

        // Products grid
        const grid = document.createElement("div");
        grid.className = "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

        products.forEach(p => {
            const card = document.createElement("div");
            card.className = `
                bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300
                flex flex-col
            `;

            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover rounded-t-xl">
                <div class="p-5 flex flex-col flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">${p.name}</h3>
                    <p class="text-sm text-gray-600 mb-4 flex-1">${p.description}</p>
                    <div class="flex justify-end w-full mt-auto">
                        <button onclick="viewProduct(${p.id})"
                           class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            `;

            grid.appendChild(card);
        });

        container.appendChild(grid);
    };

    if (categoryId) {
        // Only show this category
        const category = categoriesData.find(c => c.id == categoryId);
        if (!category) return;
        const filteredProducts = productsData.filter(p => p.category_id == categoryId);
        displayCategory(category, filteredProducts);
    } else {
        // Show all categories
        categoriesData.forEach(cat => {
            const products = productsData.filter(p => p.category_id === cat.id);
            if (products.length > 0) displayCategory(cat, products);
        });
    }
}

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

// Initialize
document.addEventListener("DOMContentLoaded", renderProductsPage);
