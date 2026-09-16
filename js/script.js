/* =========================================================
   SHATABDI DATTA SRISTY - PORTFOLIO
   Main JavaScript
   ========================================================= */


/* ==================== MOBILE NAVIGATION ==================== */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("open");

    navLinks.classList.toggle("open");

});


/*
   Close mobile navigation after
   clicking a navigation link.
*/

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("open");

        navLinks.classList.remove("open");

    });

});



/* ==================== NAVBAR SCROLL EFFECT ==================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ==================== ACTIVE NAVIGATION ==================== */

const sections = document.querySelectorAll("section");


const updateActiveNavigation = () => {

    let currentSection = "home";


    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveNavigation
);



/* ==================== TYPING ANIMATION ==================== */

const typingText = document.getElementById("typing-text");


const words = [

    "digital experiences.",

    "practical projects.",

    "creative solutions.",

    "software ideas."

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex === currentWord.length
        ) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }


    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);

}


typeEffect();



/* ==================== SCROLL REVEAL ==================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* ==================== CONTACT FORM ==================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /*
       This portfolio is currently a static website.

       Instead of pretending to send the form to
       a backend server, we create a mailto link
       that opens the user's email application.
    */

    if (!name || !email || !message) {

        formMessage.textContent =
            "Please complete all fields.";

        return;

    }


    const subject =
        encodeURIComponent(
            `Portfolio Contact from ${name}`
        );


    const body =
        encodeURIComponent(

            `Name: ${name}\n\n` +

            `Email: ${email}\n\n` +

            `Message:\n${message}`

        );


    const mailtoLink =
        `mailto:shatabdisds007@gmail.com` +
        `?subject=${subject}` +
        `&body=${body}`;


    window.location.href = mailtoLink;


    formMessage.textContent =
        "Opening your email application...";

});



/* ==================== MOUSE GLOW EFFECT ==================== */

/*
   A subtle mouse-following effect is added
   to interactive cards.
*/

const cards =
    document.querySelectorAll(
        ".skill-card, .info-card"
    );


cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );


        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});



/* ==================== INITIAL PAGE SETUP ==================== */

updateActiveNavigation();