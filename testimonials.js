// testimonials.js

const testimonialsData = [
    {
        name: "Krishna",
        location: "Farmer, Sangareddy",
        avatar: "https://avatar.iran.liara.run/public/5",
        rating: 4,
        feedback: "Jaykay Agri’s smart solutions improved my yield by 40%. Highly recommend their products."
    },
    {
        name: "Venkata Rao.B",
        location: "Farmer, Andra Pradesh",
        avatar: "https://avatar.iran.liara.run/public/job/farmer/male",
        rating: 5,
        feedback: "Their technology made farming much easier. The team is very supportive too."
    },
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
    container.className = "flex flex-col sm:flex-row gap-4 p-2";

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
