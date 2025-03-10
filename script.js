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



// Mobile menu functionality
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const closeButton = document.querySelector(".close-menu");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.remove("hide");
  navLinks.classList.add("show");
  closeButton.classList.add("show");
  hamburger.style.display = "none";
}

// Close the mobile menu
function closeMenu() {
  const navLinks = document.querySelector(".nav-links");
  const closeButton = document.querySelector(".close-menu");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.remove("show");
  navLinks.classList.add("hide");
  closeButton.classList.remove("show");
  hamburger.style.display = "block";
}

// Add 'active' class to the selected navigation item
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', function () {
      // Close the menu on item click in mobile view
      if (window.innerWidth <= 768) {
        closeMenu();
      }

      // Remove 'active' from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add 'active' to the clicked item
      this.classList.add('active');
    });
  });

  // Detect screen resize and adjust menu accordingly
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      const navLinks = document.querySelector(".nav-links");
      const hamburger = document.querySelector(".hamburger");

      navLinks.classList.remove("show");
      navLinks.classList.remove("hide");
      hamburger.style.display = "none";
    } else {
      const hamburger = document.querySelector(".hamburger");
      hamburger.style.display = "block";
    }
  });

  // Initialize carousel
  initCarousel();

  // Lazy load images
  lazyLoadImages();
});

// Carousel functionality
function initCarousel() {
  const slides = document.querySelector('.carousel-slides');
  const slideCount = document.querySelectorAll('.carousel-slide').length;
  let currentSlide = 0;

  // Auto-advance carousel
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  }, 5000);

  // Update carousel position
  function updateCarousel() {
    slides.style.transform = `translateX(-${currentSlide * 25}%)`;
  }
}

// Lazy loading images for better performance
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }

          observer.unobserve(img);
        }
      });
    });

    // Target all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imgObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add structured data for SEO
function addStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UFDev.LLC",
    "url": "https://ufdev.llc",
    "logo": "assets/ufdev.llc.png",
    "description": "Founded by IIT Patna alumni, UFDev.LLC is a dynamic software development company delivering scalable, innovative, and affordable digital solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "rameshnda09@gmail.com"
    },
    "sameAs": [
      "https://in.linkedin.com/in/ramesh-vishwakarma-957355234"
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

// Call the function to add structured data
document.addEventListener('DOMContentLoaded', addStructuredData);

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





// projectssss

// // Function to filter projects
// function filterProjects(category) {
//   const projects = document.querySelectorAll('.project-card');
//   projects.forEach(project => {
//       if (category === 'all' || project.classList.contains('project-' + category)) {
//           project.style.display = 'block';
//       } else {
//           project.style.display = 'none';
//       }
//   });
// }

// // Function to open project detail page
// function openProjectDetail(pageUrl) {

//   window.location.href = pageUrl;
// }




// Function to filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach((project) => {
    if (category === "all" || project.classList.contains("project-" + category)) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

// Function to search projects by name
function searchProjects() {
  let searchInput = document.getElementById("project-search").value.toLowerCase();
  let projects = document.querySelectorAll(".project-card");

  projects.forEach((project) => {
    let title = project.querySelector(".project-title").innerText.toLowerCase();
    if (title.includes(searchInput)) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

// Function to open the modal with project details and preview link
function openModal(title, description, imageSrc, url) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal-image").src = imageSrc;
  document.getElementById("project-modal").style.display = "flex";

  // Update the live preview button with the provided URL
  document.getElementById("live-preview-btn").onclick = function () {
    openPreview(url);
  };
}

// Function to open the live preview in a new tab
function openPreview(url) {
  window.open(url, '_blank'); // Opens the link in a new tab
}
// Function to close the modal
function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}
