// Add animations to the features section
document.addEventListener('DOMContentLoaded', () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.addEventListener('click', () => {
            const featureItems = featuresSection.querySelectorAll('.feature-item');
            featureItems.forEach((item, index) => {
                // Add a slight delay for a cascading effect
                setTimeout(() => {
                    animateCSS(item, 'bounce');
                }, index * 200);
            });
        });
    }

    // Add animations to the hero banner
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner) {
        animateCSS(heroBanner, 'fadeInDown');
    }

    // Add animations to the course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        setTimeout(() => {
            animateCSS(card, 'zoomIn');
        }, index * 150);
    });

    // Add animations to the instructor cards
    const instructorCards = document.querySelectorAll('.instructor-card');
    instructorCards.forEach((card, index) => {
        setTimeout(() => {
            animateCSS(card, 'flipInY');
        }, index * 200);
    });

    // Add animations to the FAQ section
    const faqDetails = document.querySelectorAll('#faq details');
    faqDetails.forEach((detail, index) => {
        detail.addEventListener('click', () => {
            animateCSS(detail, 'pulse');
        });
    });
});

// Helper function to add animations using Animate.css
function animateCSS(element, animationName, callback) {
    const node = element;
    node.classList.add('animate__animated', `animate__${animationName}`);

    function handleAnimationEnd() {
        node.classList.remove('animate__animated', `animate__${animationName}`);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback();
    }

    node.addEventListener('animationend', handleAnimationEnd);
}
