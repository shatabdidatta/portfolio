/* ==================== THEME TOGGLE ==================== */

const themeToggle =
    document.getElementById("theme-toggle");

const themeIcon =
    document.getElementById("theme-icon");


/*
    Check whether the user previously selected
    dark mode.
*/

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.textContent = "☀";

}


/* Toggle theme */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        themeIcon.textContent = "☀";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeIcon.textContent = "☾";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* ==================== ACTIVE NAVIGATION ==================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

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


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});