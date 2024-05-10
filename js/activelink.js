/// ========== ACTIVE LINK FOR NAVBAR ON PAGE SCROLL ======== ///
function highlightActiveLink() {
    const sections = document.querySelectorAll('section'); // Get all sections
    const navLinks = document.querySelectorAll('.nav-links a'); // Get all navbar links
  
    window.addEventListener('scroll', () => {
      let current = '';
  
      // Check which section is currently in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      // Add 'active' class to the corresponding link in navbar, remove from others
      navLinks.forEach(link => {
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
          if (document.body.classList.contains('dark')) {
            link.style.color = "var(--colorphover)";
          } else {
            link.style.color = "var(--colorahover)";
          }
        } else {
          link.classList.remove('active');
          link.style.color = ""; // Reset font color to default
        }
      });
    });
  }
  // Call the function to initialize the active link highlighting
  highlightActiveLink();

  // === SCROLL TO TOP WHEN THE ARROW BUTTON IS CLICKED === //
  document.querySelector('.arrow-up').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  });
  
  

  

