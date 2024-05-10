///// ABOUT ME SECTION TYPE H2 SPAN IN SHOP /////
var typed = new Typed(".animate", {
    strings: ["Student.", "Developer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  
  // Tab Interface For Resume //
  
  const resumeHeading = document.querySelector(".resume-heading");
  const resumeTabs = document.querySelectorAll(".resume-tab");
  
  resumeHeading.onclick = (event) => {
    event.preventDefault();
    const clickedItemId = event.target.dataset.id;
    if (clickedItemId) {
      resumeHeading.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
  
      resumeTabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      const correspondingTab = document.getElementById(clickedItemId);
      correspondingTab.classList.add("active");
    }
  };
  
  // ACCORDION dropdown ABOUT SECTION //
  const accItems = document.querySelectorAll(".accordion-item");
  
  accItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });