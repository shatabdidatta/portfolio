/* ==================================================
   SHATABDI DATTA SRISTY
   PORTFOLIO JAVASCRIPT
   ================================================== */


/* ==================================================
   THEME
   ================================================== */

const themeButton =
    document.getElementById("theme-button");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


function updateThemeButton() {

    const darkMode =
        document.body.classList.contains("dark-mode");


    themeButton.setAttribute(
        "aria-label",
        darkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
    );

}


updateThemeButton();


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const darkMode =
        document.body.classList.contains("dark-mode");


    localStorage.setItem(
        "portfolio-theme",
        darkMode ? "dark" : "light"
    );


    updateThemeButton();

});



/* ==================================================
   MOBILE MENU
   ================================================== */

const menuButton =
    document.getElementById("menu-button");


const mobileNav =
    document.getElementById("mobile-nav");


menuButton.addEventListener("click", () => {

    const isOpen =
        mobileNav.classList.toggle("open");


    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


const mobileLinks =
    mobileNav.querySelectorAll("a");


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* ==================================================
   NAV ACTIVE SECTION
   ================================================== */

const sections =
    document.querySelectorAll("main section");


const navLinks =
    document.querySelectorAll(".desktop-nav .nav-link");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                const currentId =
                    entry.target.getAttribute("id");


                navLinks.forEach((link) => {

                    link.classList.remove("active");


                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


sections.forEach((section) => {

    observer.observe(section);

});



/* ==================================================
   CALCULATOR
   ================================================== */

const calculatorDisplay =
    document.getElementById(
        "calculator-display"
    );


const previewExpression =
    document.getElementById(
        "preview-expression"
    );


const calculatorButtons =
    document.querySelectorAll(
        ".calculator-grid button"
    );


let currentInput = "";

let previousInput = "";

let operator = "";

let shouldResetDisplay = false;



function updateDisplay(value) {

    calculatorDisplay.textContent =
        value || "0";

}



function updatePreview(value) {

    previewExpression.textContent =
        value || "";

}



function appendNumber(number) {

    if (shouldResetDisplay) {

        currentInput = "";

        shouldResetDisplay = false;

    }


    if (
        number === "." &&
        currentInput.includes(".")
    ) {
        return;
    }


    if (
        currentInput === "0" &&
        number !== "."
    ) {

        currentInput = "";

    }


    currentInput += number;

    updateDisplay(currentInput);

}



function chooseOperator(selectedOperator) {

    if (currentInput === "") {
        return;
    }


    if (
        previousInput !== "" &&
        operator !== ""
    ) {

        calculateResult();

    }


    previousInput = currentInput;

    operator = selectedOperator;

    shouldResetDisplay = true;


    updatePreview(
        `${previousInput} ${operator}`
    );

}



function calculateResult() {

    if (
        previousInput === "" ||
        currentInput === "" ||
        operator === ""
    ) {
        return;
    }


    const first =
        Number(previousInput);


    const second =
        Number(currentInput);


    let result;


    switch (operator) {

        case "+":
            result = first + second;
            break;


        case "−":
            result = first - second;
            break;


        case "×":
            result = first * second;
            break;


        case "÷":

            if (second === 0) {

                updateDisplay("Error");

                currentInput = "";

                previousInput = "";

                operator = "";

                updatePreview("");

                return;

            }

            result = first / second;

            break;


        default:
            return;

    }


    result =
        Number(result.toFixed(10));


    updatePreview(
        `${previousInput} ${operator} ${currentInput} =`
    );


    currentInput =
        String(result);


    previousInput = "";

    operator = "";

    shouldResetDisplay = true;


    updateDisplay(currentInput);

}



function clearCalculator() {

    currentInput = "";

    previousInput = "";

    operator = "";

    shouldResetDisplay = false;


    updateDisplay("0");

    updatePreview("");

}



function deleteNumber() {

    if (shouldResetDisplay) {
        return;
    }


    currentInput =
        currentInput.slice(0, -1);


    updateDisplay(currentInput);

}



/* Calculator button events */

calculatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const value =
            button.dataset.value;


        const action =
            button.dataset.action;


        if (action === "clear") {

            clearCalculator();

            return;

        }


        if (action === "delete") {

            deleteNumber();

            return;

        }


        if (action === "calculate") {

            calculateResult();

            return;

        }


        if (!value) {
            return;
        }


        if (
            ["+", "−", "×", "÷"].includes(value)
        ) {

            chooseOperator(value);

            return;

        }


        if (value === "%") {

            if (currentInput !== "") {

                currentInput =
                    String(
                        Number(currentInput) / 100
                    );

                updateDisplay(currentInput);

            }

            return;

        }


        appendNumber(value);

    });

});



/* ==================================================
   KEYBOARD SUPPORT
   ================================================== */

document.addEventListener("keydown", (event) => {

    const key =
        event.key;


    if (
        /^[0-9.]$/.test(key)
    ) {

        appendNumber(key);

        return;

    }


    if (
        key === "+" ||
        key === "-"
    ) {

        chooseOperator(
            key === "-"
                ? "−"
                : "+"
        );

        return;

    }


    if (
        key === "*" ||
        key === "x" ||
        key === "X"
    ) {

        chooseOperator("×");

        return;

    }


    if (key === "/") {

        event.preventDefault();

        chooseOperator("÷");

        return;

    }


    if (key === "Enter" || key === "=") {

        calculateResult();

        return;

    }


    if (key === "Backspace") {

        deleteNumber();

        return;

    }


    if (key === "Escape") {

        clearCalculator();

    }

});



/* ==================================================
   CURRENT YEAR
   ================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();