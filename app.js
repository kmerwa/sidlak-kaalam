const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sideNav = document.getElementById('sideNav');
        const hamburger = document.getElementById('hamburger');
        const overlay = document.getElementById('overlay');
        const lessonsDropdown = document.getElementById('lessonsDropdown');

        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            sideNav.classList.toggle('open');
            hamburger.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', function() {
            sideNav.classList.remove('open');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Handle dropdown in side navigation
        lessonsDropdown.addEventListener('click', function(e) {
            // Only toggle if clicking the main lessons link, not the sub-items
            if (e.target.textContent === 'Lessons') {
                e.preventDefault();
                lessonsDropdown.classList.toggle('active');
            }
        });

        // Close menu when clicking a navigation link (except dropdown parent)
        const sideNavLinks = sideNav.querySelectorAll('a');
        sideNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't close if it's the lessons dropdown parent
                if (this.textContent !== 'Lessons') {
                    sideNav.classList.remove('open');
                    hamburger.classList.remove('active');
                    overlay.classList.remove('active');
                }
            });
        });

        // Close menu on window resize if screen becomes large
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                sideNav.classList.remove('open');
                hamburger.classList.remove('active');
                overlay.classList.remove('active');
            }
        });

        // Header color change on scroll (keeping your existing functionality)
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('header-colored');
            } else {
                header.classList.remove('header-colored');
            }
        });

// document.addEventListener("DOMContentLoaded", function () {
//   const headerContainer = document.getElementById("header-container");

//   if (headerContainer) {
//     fetch("header.html")
//       .then(res => res.text())
//       .then(html => {
//         headerContainer.innerHTML = html;

//         const header = document.getElementById('header');
//         const isHomepage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

//         function toggleHeaderBackground() {
//           const scrollTop = window.scrollY;
//           if (!isHomepage || scrollTop > 50) {
//             header.classList.add('header-colored');
//           } else {
//             header.classList.remove('header-colored');
//           }
//         }

//         window.addEventListener('scroll', toggleHeaderBackground);
//         toggleHeaderBackground();
//       })
//       .catch(err => console.error("Failed to load header:", err));
//   }
// });

// function animateOnScroll() {
//   const elements = document.querySelectorAll('.animate-on-scroll');
//   const windowHeight = window.innerHeight;

//   elements.forEach(el => {
//     const elementTop = el.getBoundingClientRect().top;
//     const revealPoint = 150;

//     if (elementTop < windowHeight - revealPoint) {
//       el.classList.add('active');
//     } else {
//       el.classList.remove('active');
//     }
//   });
// }

// window.addEventListener('scroll', animateOnScroll);
// animateOnScroll();

// document.getElementById("seeMoreBtn").addEventListener("click", function () {
//     const more = document.querySelector(".more-references");
//     if (more.classList.contains("hidden")) {
//       more.classList.remove("hidden");
//       this.textContent = "View less";
//     } else {
//       more.classList.add("hidden");
//       this.textContent = "View more";
//     }
//   });