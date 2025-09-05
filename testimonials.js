// testimonials.js

const testimonialsData = [
    {
        name: "Ramesh Kumar",
        location: "Farmer, Punjab",
        avatar: "https://i.pravatar.cc/80?img=5",
        rating: 4,
        feedback: "Jaykay Agri’s smart solutions improved my yield by 40%. Highly recommend their products."
    },
    {
        name: "Anita Devi",
        location: "Farmer, Haryana",
        avatar: "https://i.pravatar.cc/80?img=12",
        rating: 5,
        feedback: "Their technology made irrigation much easier. The team is very supportive too."
    },
    {
        name: "Mohammed Ali",
        location: "Farmer, UP",
        avatar: "https://i.pravatar.cc/80?img=20",
        rating: 5,
        feedback: "I can now track my crop health easily. It feels like farming in the future!"
    },
    {
        name: "Suman Sharma",
        location: "Farmer, Rajasthan",
        avatar: "https://i.pravatar.cc/80?img=30",
        rating: 4,
        feedback: "The crop monitoring tools saved me time and reduced costs significantly."
    },
    {
        name: "Suman Sharma",
        location: "Farmer, Rajasthan",
        avatar: "https://i.pravatar.cc/80?img=30",
        rating: 4,
        feedback: "The crop monitoring tools saved me time and reduced costs significantly."
    }
];

// Generate star rating
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? "★" : "☆";
    }
    return `<div class="flex mb-3 text-yellow-400 text-lg">${stars}</div>`;
}

// Render Testimonials
function renderTestimonials() {
    const container = document.getElementById("testimonial-container");
    container.innerHTML = "";

    testimonialsData.forEach(t => {
        const card = document.createElement("div");
        card.className = "testimonial-card min-w-[300px] max-w-sm bg-white rounded-2xl shadow-lg p-6 flex-shrink-0";

        card.innerHTML = `
      <div class="flex items-center mb-4">
        <img src="${t.avatar}" class="w-12 h-12 rounded-full mr-3" alt="${t.name}" />
        <div>
          <h3 class="font-semibold text-gray-900">${t.name}</h3>
          <p class="text-sm text-gray-500">${t.location}</p>
        </div>
      </div>
      ${generateStars(t.rating)}
      <p class="text-gray-600">“${t.feedback}”</p>
    `;

        container.appendChild(card);
    });
}

// Auto-scroll function
function startAutoScroll() {
    const container = document.getElementById("testimonial-container");
    let scrollAmount = 0;
    const cardWidth = 320; // card width + margin

    setInterval(() => {
        scrollAmount += cardWidth;
        if (scrollAmount >= container.scrollWidth / 2) {
            scrollAmount = 0; // reset to loop
        }
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }, 3000); // every 3 seconds
}

// Init
document.addEventListener("DOMContentLoaded", () => {
    renderTestimonials();
    startAutoScroll();
});
