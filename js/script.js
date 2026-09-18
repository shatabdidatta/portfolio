/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".page-loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 500);

});



/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});



/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.querySelector(".theme-icon");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.textContent = "☀";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "portfolio-theme",
        isDark ? "dark" : "light"
    );


    themeIcon.textContent =
        isDark ? "☀" : "☾";

});



/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText =
    document.getElementById("typingText");


const words = [

    "software development.",

    "artificial intelligence.",

    "problem solving.",

    "building practical projects."

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

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
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 75
    );

}


typeEffect();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

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


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-link");


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute(
                            "id"
                        );


                    navItems.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



/* =====================================================
   PROJECT HORIZONTAL DRAG
===================================================== */

const projectWrapper =
    document.querySelector(
        ".projects-wrapper"
    );


let isDown = false;

let startX;

let scrollLeft;


projectWrapper.addEventListener(
    "mousedown",
    event => {

        isDown = true;

        projectWrapper.style.cursor =
            "grabbing";

        startX =
            event.pageX -
            projectWrapper.offsetLeft;

        scrollLeft =
            projectWrapper.scrollLeft;

    }
);


projectWrapper.addEventListener(
    "mouseleave",
    () => {

        isDown = false;

        projectWrapper.style.cursor =
            "grab";

    }
);


projectWrapper.addEventListener(
    "mouseup",
    () => {

        isDown = false;

        projectWrapper.style.cursor =
            "grab";

    }
);


projectWrapper.addEventListener(
    "mousemove",
    event => {

        if (!isDown) return;

        event.preventDefault();


        const x =
            event.pageX -
            projectWrapper.offsetLeft;


        const walk =
            (x - startX) * 1.5;


        projectWrapper.scrollLeft =
            scrollLeft - walk;

    }
);


/* =====================================================
   PROJECT LINK PROTECTION
===================================================== */

const projectLinks =
    document.querySelectorAll(
        ".project-link"
    );


projectLinks.forEach(link => {

    link.addEventListener("click", event => {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Add the GitHub repository link here after the project is uploaded."
            );

        }

    });

});