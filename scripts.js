document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleButton = item.querySelector('.faq-toggle');

        toggleButton.addEventListener('click', () => {
            // Toggle the active class on the parent .faq-item
            item.classList.toggle('active');
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
