const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light mode";
    } else {
        themeButton.textContent = "🌙 Dark mode";
    }
});

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();
    formMessage.textContent = `Thank you, ${visitorName}! Your details have been entered.`;
    contactForm.reset();
});
