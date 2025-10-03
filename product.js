// product.js

// Get product id from URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Find product
const product = productsData.find(p => p.id === productId);

// Render
// Render
document.addEventListener("DOMContentLoaded", () => {
    if (!product) {
        document.getElementById("product-detail").innerHTML =
            "<p class='text-center text-red-600'>Product not found</p>";
        return;
    }

    // Build benefits list if available
    let benefitsHTML = "";
    if (product.benefits && product.benefits.length > 0) {
        benefitsHTML = `
            <div class="mt-4 text-gray-700">
                <h3 class="font-semibold text-lg text-green-700 mb-2">Benefits</h3>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                    ${product.benefits.map(b => `<li>${b}</li>`).join("")}
                </ul>
            </div>
        `;
    }

    // Build application_methods list if available
    let applicationMethodsHTML = "";
    if (product.application_methods && product.application_methods.length > 0) {
        applicationMethodsHTML = `
            <div class="mt-4 text-gray-700">
                <h3 class="font-semibold text-lg text-green-700 mb-2">Application Methods</h3>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                    ${product.application_methods.map(b => `<li>${b}</li>`).join("")}
                </ul>
            </div>
        `;
    }

    document.getElementById("product-detail").innerHTML = `
        <div class="grid lg:grid-cols-2 gap-12">
            <!-- Left: Image -->
            <div>
                <img src="${product.image}" alt="${product.name}" class="rounded-xl shadow-md w-full">
            </div>

            <!-- Right: Info -->
            <div>
                <h1 class="text-3xl font-bold text-green-800">${product.name}</h1>
                <p class="text-gray-600 mt-2">${product.description}</p>
                
                ${benefitsHTML}
                
                ${applicationMethodsHTML}



                <!-- CTA -->
                <div class="mt-6 flex space-x-4">
                    <a href="contact-us.html" class="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">Enquire Now</a>
                </div>
            </div>
        </div>
    `;
});

