/* =========================================================
   PORTFOLIO JAVASCRIPT
   Shatabdi Datta Sristy
   ========================================================= */


/* ==================== THEME TOGGLE ==================== */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");


// Check previously selected theme
const savedTheme = localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.textContent = "☀";

}


/* Change theme when button is clicked */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        themeIcon.textContent = "☀";

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    } else {

        themeIcon.textContent = "☾";

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    }

});



/* ==================== MOBILE MENU ==================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



/* Close mobile menu after clicking a link */

const navigationLinks =
    document.querySelectorAll(".nav-link");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* ==================== SCROLL ANIMATION ==================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    observer.observe(element);

});



/* ==================== ACTIVE NAVIGATION ==================== */

const sections =
    document.querySelectorAll("section");


const navItems =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});