// ==================== CONTACT FORM ====================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    // Prevent the browser from refreshing the page
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check whether all fields contain information
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show a success message
    alert("Thank you, " + name + "! Your message has been received.");

    // Clear the form
    contactForm.reset();
});