// SCROLL ANIMATIONS

//// ABOUT /////
// Set up a flag to track if the animation has been triggered
let aboutAnimated = false;

// Initialize ScrollReveal for the main ABOUT SECTION
ScrollReveal().reveal('.h2about', {
    duration: 700,
    delay: 900,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'bottom',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        if (!aboutAnimated) {
            aboutAnimated = true; // Set the flag to true so the animation doesn't repeat
        } else {
            domEl.style.opacity = 1; // If already animated, set opacity to 1 (to prevent the fade-in effect)
        }
    }
});

// Initialize ScrollReveal for the text
ScrollReveal().reveal('.about-text', {
    duration: 700,
    delay: 900, // Delay for the text animation
    easing: 'ease-in-out',
    origin: 'left', // Move from left side
    distance: '50px', // Distance to move
    reset: false // Don't reset reveal when element is not in view
});

// Initialize ScrollReveal for the icons
ScrollReveal().reveal('.icon-div div', {
    duration: 700,
    delay: 900, // Delay for the icons animation
    easing: 'ease-in-out',
    origin: 'left', // Move from left side
    distance: '50px', // Distance to move
    reset: false // Don't reset reveal when element is not in view
});

// Initialize ScrollReveal for the image
ScrollReveal().reveal('.about-image', {
    duration: 700,
    delay: 900, // Delay for the image animation
    easing: 'ease-in-out',
    origin: 'right', // Move from right side
    distance: '50px', // Distance to move
    reset: false // Don't reset reveal when element is not in view
});

///// RESUME /////
// Set up a flag to track if the animation has been triggered
let resumeAnimated = false;

// Initialize ScrollReveal for the RESUME SECTION
ScrollReveal().reveal('.resume-intro, .resume-text, .accordion', {
    duration: 700,
    delay: 900,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'left',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        if (!resumeAnimated) {
            resumeAnimated = true; // Set the flag to true so the animation doesn't repeat
        } else {
            domEl.style.opacity = 1; // If already animated, set opacity to 1 (to prevent the fade-in effect)
        }
    }
});

// Initialize ScrollReveal for the resume body
ScrollReveal().reveal('.resume-body', {
    duration: 700,
    delay: 900, // Delay for the resume body animation
    easing: 'ease-in-out',
    origin: 'right', // Move from right side
    distance: '50px', // Distance to move
    reset: false // Don't reset reveal when element is not in view
});

///// SERVICES //////
let servicesAnimated = false;

// Initialize ScrollReveal for the SERVICES SECTION
ScrollReveal().reveal('.portfolio-container', {
    duration: 700,
    delay: 900,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'bottom',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        if (!servicesAnimated) {
            servicesAnimated = true; // Set the flag to true so the animation doesn't repeat
        } else {
            domEl.style.opacity = 1; // If already animated, set opacity to 1 (to prevent the fade-in effect)
        }
    }
});

// Initialize ScrollReveal for the service cards
ScrollReveal().reveal('.service-card', {
    duration: 400,
    delay: 70, // Delay for the animation
    easing: 'ease-in-out',
    origin: 'bottom',
    distance: '50px',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        // Add the hover effect back after the ScrollReveal animation
        domEl.classList.add('hover-effect');
    }
});

// Add hover effect using JavaScript after the ScrollReveal animation
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

///// HOBBIES //////
let hobbiesAnimated = false;

// Initialize ScrollReveal for the hobby items
ScrollReveal().reveal('.portfolio-container h2, .portfolio-item', {
    duration: 1000,
    delay: 900, // Delay for the animation
    easing: 'ease-in-out', // Change the easing to ease-in-out
    origin: 'left',
    distance: '50px',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        // Add the hover effect back after the ScrollReveal animation
        domEl.classList.add('hover-effect');
    }
});

// Add hover effect using JavaScript after the ScrollReveal animation
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.querySelector('.portfolio-item-content').style.opacity = '1';
        this.querySelector('.product-title').style.bottom = '30%';
    });
    item.addEventListener('mouseout', function() {
        this.querySelector('.portfolio-item-content').style.opacity = '0';
        this.querySelector('.product-title').style.bottom = '-45px';
    });
});

///// PROJECTS //////
let projectsAnimated = false;

// Initialize ScrollReveal for the PROJECTS SECTION
ScrollReveal().reveal('.portfolio h2, .button-group', {
    duration: 700,
    delay: 900,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'bottom',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        if (!servicesAnimated) {
            servicesAnimated = true; // Set the flag to true so the animation doesn't repeat
        } else {
            domEl.style.opacity = 1; // If already animated, set opacity to 1 (to prevent the fade-in effect)
        }
    }
});
// Initialize ScrollReveal for the pictures of projects
ScrollReveal().reveal('.gallery', {
    duration: 1200,
    delay: 700,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'bottom',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        if (!servicesAnimated) {
            servicesAnimated = true; // Set the flag to true so the animation doesn't repeat
        } else {
            domEl.style.opacity = 1; // If already animated, set opacity to 1 (to prevent the fade-in effect)
        }
    }
});

///// CONTACTS //////
let contactAnimated = false;

// Initialize ScrollReveal for the CONTACTS SECTION
ScrollReveal().reveal('.contact_data', {
    duration: 700,
    delay: 900,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'right',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        if (!servicesAnimated) {
            servicesAnimated = true; // Set the flag to true so the animation doesn't repeat
        } else {
            domEl.style.opacity = 1; // If already animated, set opacity to 1 (to prevent the fade-in effect)
        }
    }
});
// Initialize ScrollReveal for map
ScrollReveal().reveal('.contact_data2 , .map', {
    duration: 1000,
    delay: 800,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'left',
    reset: false, // Don't reset reveal when element is not in view
    beforeReveal: function (domEl) {
        if (!servicesAnimated) {
            servicesAnimated = true; // Set the flag to true so the animation doesn't repeat
        } else {
            domEl.style.opacity = 1; // If already animated, set opacity to 1 (to prevent the fade-in effect)
        }
    }
});