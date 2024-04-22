// ===== START OF NAVBAR ===== //
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}

// Dark Mode Toggle
const body = document.querySelector("body");
const darkmodeToggle = document.querySelector(".darkmode-toggle");

darkmodeToggle.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  body.classList.toggle("dark");

  // Select all carousel and thumbnail images
  const carouselImages = document.querySelectorAll(".carousel .item img");
  const thumbnailImages = document.querySelectorAll(".thumbnail .item img");

  // Change image src based on dark mode state
  carouselImages.forEach(img => {
    let src = img.src;
    let filename = src.split('/').pop();
    let extension = filename.split('.').pop();
    if (body.classList.contains("dark")) {
      filename = filename.replace("white", "black");
    } else {
      filename = filename.replace("black", "white");
    }
    img.src = src.replace(src.split('/').pop(), filename);
  });

  // Change thumbnail image src based on dark mode state
  thumbnailImages.forEach(img => {
    let src = img.src;
    let filename = src.split('/').pop();
    let extension = filename.split('.').pop();
    if (body.classList.contains("dark")) {
      filename = filename.replace("white", "black");
    } else {
      filename = filename.replace("black", "white");
    }
    img.src = src.replace(src.split('/').pop(), filename);
  });
});

// Navbar Header Transparent on Home Section
function transparentNav() {
  var homeSection = document.getElementById("home");
  var aboutSection = document.getElementById("about");
  var navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var homeSectionOffset = homeSection.offsetTop;
    var aboutSectionOffset = aboutSection.offsetTop;

    if (scrollPosition < aboutSectionOffset) {
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }
  });
}
transparentNav();

// ===== END OF NAVBAR ===== //

// ==== Home Section ==== //
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 500;
let timeAutoNext = 20000;

nextDom.onclick = function () {
  showSlider('next');
}

prevDom.onclick = function () {
  showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext)
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext)
}
// ==== End of Home ==== //

///// ABOUT ME SECTION TYPE H2 SPAN IN SHOP /////
var typed = new Typed(".animate", {
  strings: ["Student.", "Beginner.", "Developer."],
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


