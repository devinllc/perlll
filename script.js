// Toggle the mobile menu (open/close)
// function toggleMenu() {
//   const navLinks = document.querySelector(".nav-links");
//   const closeButton = document.querySelector(".close-menu");
//   const hamburger = document.querySelector(".hamburger");

//   if (!navLinks.classList.contains("show")) {
//     navLinks.classList.remove("hide");
//     navLinks.classList.add("show");
//     closeButton.classList.add("show");
//     hamburger.style.display = "none"; // Hide hamburger
//   } else {
//     navLinks.classList.remove("show");
//     navLinks.classList.add("hide");
//     closeButton.classList.remove("show");
//     hamburger.style.display = "block"; // Show hamburger
//   }
// }

// Close the mobile menu (on close button click)
// function closeMenu() {
//   const navLinks = document.querySelector(".nav-links");
//   const closeButton = document.querySelector(".close-menu");
//   const hamburger = document.querySelector(".hamburger");

//   navLinks.classList.remove("show");
//   navLinks.classList.add("hide");
//   closeButton.classList.remove("show");
//   hamburger.style.display = "none"; // Show hamburger
// }

// Add 'active' class to the selected navigation item
// const navItems = document.querySelectorAll(".nav-item");

// navItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     // Close the menu on item click in mobile view
//     if (window.innerWidth <= 768) {
//       closeMenu();
//     }

//     // Remove 'active' from all nav items
//     navItems.forEach((nav) => nav.classList.remove("active"));
//     // Add 'active' to the clicked item
//     this.classList.add("active");
//   });
// });

// // Detect screen resize and close menu if switching to desktop view
// window.addEventListener("resize", function () {
//   if (window.innerWidth > 768) {
//     closeMenu(); // Close the menu if switching to desktop view
//   }
// });


// kgjhkggkhgjk

// // Function to toggle the menu open and close
// function toggleMenu() {
//   const navLinks = document.querySelector(".nav-links");
//   const closeButton = document.querySelector(".close-menu");
//   const hamburger = document.querySelector(".hamburger");

//   // Show the nav menu and close button when the hamburger is clicked
//   navLinks.classList.toggle("show");
//   closeButton.classList.toggle("show");
   
//   hamburger.style.display = "none";
// }

// // Function to close the menu
// function closeMenu() {
//   const navLinks = document.querySelector(".nav-links");
//   const closeButton = document.querySelector(".close-menu");
//   const hamburger = document.querySelector(".hamburger");

//   // Hide the nav menu and close button
//   navLinks.classList.remove("show");
//   closeButton.classList.remove("show");
//   navLinks.classList.remove("hide");
//     hamburger.style.display = "block";
//     window.addEventListener("resize", function () {
//       if (window.innerWidth > 768) {
//         closeMenu(); // Close the menu if switching to desktop view
//         const hamburger = document.querySelector(".hamburger");
//         hamburger.style.display = "none";
//       }
//     });
// }

// // Add 'active' class to the selected navigation item
// const navItems = document.querySelectorAll('.nav-item');

// navItems.forEach(item => {
//     item.addEventListener('click', function() {
//         // Remove 'active' from all nav items
//         navItems.forEach(nav => nav.classList.remove('active'));
//         // Add 'active' to the clicked item
//         this.classList.add('active');
//     });
// });



// Function to toggle the menu open and close
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const closeButton = document.querySelector(".close-menu");
  const hamburger = document.querySelector(".hamburger");

  // Show the nav menu and close button when the hamburger is clicked
  navLinks.classList.toggle("show");
  closeButton.classList.toggle("show");
  hamburger.style.display = "none"; // Hide the hamburger when menu is opened
}

// Function to close the menu
function closeMenu() {
  const navLinks = document.querySelector(".nav-links");
  const closeButton = document.querySelector(".close-menu");
  const hamburger = document.querySelector(".hamburger");

  // Hide the nav menu and close button
  navLinks.classList.remove("show");
  closeButton.classList.remove("show");
  hamburger.style.display = "block"; // Show the hamburger when menu is closed
}

// Add 'active' class to the selected navigation item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));
    // Add 'active' to the clicked item
    this.classList.add('active');

    // Close the menu on item click in mobile view
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  });
});

// Detect screen resize and handle menu visibility
window.addEventListener("resize", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (window.innerWidth > 768) {
    // If in desktop view, hide hamburger and ensure navLinks is shown
    hamburger.style.display = "none";
    navLinks.classList.remove("show"); // Ensure the nav menu is always shown on desktop
  } else {
    // If in mobile view, show hamburger
    hamburger.style.display = "block";
  }
});

// Initial check on page load for screen size
window.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");

  // Hide the hamburger if on desktop view
  if (window.innerWidth > 768) {
    hamburger.style.display = "none";
  }
});







// let carouselCurrentIndex = 0;
// const carouselSlides = document.querySelectorAll(".carousel-slide");
// const bottomSections = document.querySelector(".carousel-bottom-sections");

// function isMobileView() {
//   return window.innerWidth <= 480;
// }

// function updateBottomSectionVisibility() {
//   if (isMobileView()) {
//     bottomSections.style.display = "none";
//   } else {
//     bottomSections.style.display = "flex";
//   }
// }

// function showCarouselSlide(index) {
//   const carouselSlideWidth = carouselSlides[0].clientWidth;
//   const carousel = document.querySelector(".carousel-slides");
//   carousel.style.transform = `translateX(-${carouselSlideWidth * index}px)`;

//   const currentSlideText =
//     carouselSlides[index].querySelector(".carousel-text");
//   currentSlideText.style.animation = "none";
//   setTimeout(() => {
//     currentSlideText.style.animation = "";
//   }, 10);

//   updateBottomSectionVisibility();
// }

// function nextCarouselSlide() {
//   carouselCurrentIndex = (carouselCurrentIndex + 1) % carouselSlides.length;
//   showCarouselSlide(carouselCurrentIndex);
// }

// window.addEventListener("load", updateBottomSectionVisibility);
// window.addEventListener("resize", updateBottomSectionVisibility);

// setInterval(nextCarouselSlide, 5000);

let carouselCurrentIndex = 0;
const carouselSlides = document.querySelectorAll(".carousel-slide");
const carouselContainer = document.querySelector(".carousel-slides");
const bottomSections = document.querySelector(".carousel-bottom-sections");

function isMobileView() {
  return window.innerWidth <= 480;
}

function updateBottomSectionVisibility() {
  if (isMobileView()) {
    bottomSections.style.display = "none";
  } else {
    bottomSections.style.display = "flex";
  }
}

function showCarouselSlide(index) {
  const carouselSlideWidth = carouselSlides[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${carouselSlideWidth * index}px)`;

  const currentSlideText =
    carouselSlides[index].querySelector(".carousel-text");
  currentSlideText.style.animation = "none";
  setTimeout(() => {
    currentSlideText.style.animation = "";
  }, 10);

  updateBottomSectionVisibility();
}

function nextCarouselSlide() {
  carouselCurrentIndex = (carouselCurrentIndex + 1) % carouselSlides.length;
  showCarouselSlide(carouselCurrentIndex);
}

window.addEventListener("load", () => {
  showCarouselSlide(carouselCurrentIndex); /* Ensure correct initial slide */
  updateBottomSectionVisibility();
});
window.addEventListener("resize", () => {
  showCarouselSlide(carouselCurrentIndex); /* Adjust to window size changes */
  updateBottomSectionVisibility();
});

setInterval(nextCarouselSlide, 5000);







// page 2 js 
document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelectorAll(".service");

  const handleScroll = () => {
    services.forEach((service) => {
      const servicePosition = service.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (servicePosition < screenPosition) {
        service.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load in case it's already in the view
});


