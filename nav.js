// nav.js
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('close');

    if (menuBtn && mobileMenu) { // ✅ prevents errors on pages without nav
        // Toggle menu
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            hamburger.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.classList.contains('hidden') &&
                !mobileMenu.contains(e.target) &&
                !menuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                hamburger.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });

        // Close when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburger.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
    }
});
