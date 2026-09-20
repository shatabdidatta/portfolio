/* ==================================================
   SHATABDI DATTA SRISTY
   PORTFOLIO JAVASCRIPT
   ================================================== */


/* ==================================================
   THEME TOGGLE
   ================================================== */

const themeToggle = document.getElementById("theme-toggle");


// Check previously saved theme
const savedTheme = localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


function updateThemeLabel() {

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

}


updateThemeLabel();


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    const isDark =
        document.body.classList.contains("dark-mode");


    localStorage.setItem(
        "portfolio-theme",
        isDark ? "dark" : "light"
    );


    updateThemeLabel();

});


/* ==================================================
   MOBILE NAVIGATION
   ================================================== */

const mobileMenuToggle =
    document.getElementById("mobile-menu-toggle");

const mobileNav =
    document.getElementById("mobile-nav");


mobileMenuToggle.addEventListener("click", function () {

    const isOpen =
        mobileNav.classList.toggle("active");


    mobileMenuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close mobile menu after clicking a link */

const mobileNavLinks =
    mobileNav.querySelectorAll("a");


mobileNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileNav.classList.remove("active");

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* ==================================================
   CONTACT FORM
   ================================================== */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    formMessage.textContent =
        "Thanks for reaching out! This form is currently a demo.";


    contactForm.reset();

});


/* ==================================================
   CURRENT YEAR
   ================================================== */

const currentYear =
    document.getElementById("current-year");


currentYear.textContent =
    new Date().getFullYear();