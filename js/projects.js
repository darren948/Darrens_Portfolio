// ============= PROJECTS SECTION ============= //
// === Isotope Initialization and Filtering === //
document.addEventListener("DOMContentLoaded", function() {
    var $galleryContainer = $('.gallery').isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });
  
    $('.button-group').on('click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
  
      // Add/remove 'active' class from buttons
      $('.button-group .button').removeClass('active');
      $(this).addClass('active');
  
      // Filter items
      $galleryContainer.isotope({ filter: filterValue });
    });
  });
  
  // ========= POP IMAGE AND VIDEO IN PROJECTS SECTION ======== //
  document.addEventListener("DOMContentLoaded", function() {
    // Get the image icon and video icon elements
    const mediaIcons = document.querySelectorAll('.popup-image-icon');
  
    // Get the popup image viewer element
    const popupViewer = document.querySelector('.popup-image-viewer');
  
    // Get the media container element inside the popup viewer
    const mediaContainer = document.querySelector('.media-container');
  
    // Get the close button element
    const closeButton = document.querySelector('.close-btn');
  
    // Variable to track if the image is zoomed
    let isZoomed = false;
  
    // Variables for drag functionality
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let translateX = 0;
    let translateY = 0;
  
    // Add click event listener to each media icon
    mediaIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        // Get the media source and type from the clicked icon
        const mediaSrc = this.getAttribute('data-media-src');
        const mediaType = this.getAttribute('data-media-type');
  
        // Clear any previous media content
        mediaContainer.innerHTML = '';
  
        // Set the media content in the popup viewer
        if (mediaType === 'image') {
          // Create an image element
          const image = document.createElement('img');
          image.src = mediaSrc;
          image.alt = 'Popup Image';
          // Append the image to the media container
          mediaContainer.appendChild(image);
  
          // Add event listener for double tap to zoom
          image.addEventListener('dblclick', function(event) {
            if (!isZoomed) {
              // Get the coordinates of the double tap
              const rect = image.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;
              // Calculate the zoom center point based on double tap coordinates
              const zoomCenterX = x / rect.width * 100;
              const zoomCenterY = y / rect.height * 100;
              // Zoom in
              image.style.transformOrigin = `${zoomCenterX}% ${zoomCenterY}%`;
              image.style.transform = 'scale(2)';
              isZoomed = true;
            } else {
              // Zoom out
              image.style.transform = 'scale(1)';
              isZoomed = false;
            }
          });
  
          // Add event listener for dragging
          image.addEventListener('mousedown', dragStart);
          image.addEventListener('mouseup', dragEnd);
          image.addEventListener('mousemove', drag);
          image.addEventListener('mouseleave', dragEnd);
          image.addEventListener('touchstart', dragStart);
          image.addEventListener('touchend', dragEnd);
          image.addEventListener('touchmove', drag);
        } else if (mediaType === 'video') {
          mediaContainer.innerHTML = `<video controls><source src="${mediaSrc}" type="video/mp4">Your browser does not support the video tag.</video>`;
        }
  
        // Show the popup viewer
        popupViewer.style.display = "flex";
      });
    });
  
    // Close the popup viewer when the close button is clicked
    closeButton.addEventListener('click', function() {
      // Pause any playing video
      const video = mediaContainer.querySelector('video');
      if (video) {
        video.pause();
      }
      // Hide the popup viewer
      popupViewer.style.display = "none";
    });
  
    // Close the popup viewer when clicking outside the popup content
    window.addEventListener('click', function(event) {
      if (event.target == popupViewer) {
        // Pause any playing video
        const video = mediaContainer.querySelector('video');
        if (video) {
          video.pause();
        }
        // Hide the popup viewer
        popupViewer.style.display = "none";
      }
    });
  
    // DRAG FUNCTIONS TO THE IMAGE IN PROJECTS SECTION
    function dragStart(e) {
      isDragging = true;
      if (e.type === 'touchstart') {
        dragStartX = e.touches[0].clientX - translateX;
        dragStartY = e.touches[0].clientY - translateY;
      } else {
        dragStartX = e.clientX - translateX;
        dragStartY = e.clientY - translateY;
      }
    }
  
    function dragEnd() {
      isDragging = false;
    }
  
    function drag(e) {
      if (!isDragging) return;
      e.preventDefault();
      if (e.type === 'touchmove') {
        translateX = e.touches[0].clientX - dragStartX;
        translateY = e.touches[0].clientY - dragStartY;
      } else {
        translateX = e.clientX - dragStartX;
        translateY = e.clientY - dragStartY;
      }
      setTranslate(translateX, translateY, e.target);
    }
  
    function setTranslate(xPos, yPos, el) {
      el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
  });
