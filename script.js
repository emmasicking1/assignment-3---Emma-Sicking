const themeButton = document.getElementById("themeButton");
const welcomeMessage = document.getElementById("welcomeMessage");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function switchTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}

if (themeButton) {
    themeButton.addEventListener("click", switchTheme);
}

function changeWelcomeMessage() {
    if (welcomeMessage.textContent === "Goods for all. I love pastries and fresh baked treats. Stop by today!") {
        welcomeMessage.textContent = "Fresh pastries, warm bread, and cozy café vibes are waiting for you!";
    } else {
        welcomeMessage.textContent = "Goods for all. I love pastries and fresh baked treats. Stop by today!";
    }
}

if (welcomeMessage) {
    welcomeMessage.addEventListener("click", changeWelcomeMessage);
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        formMessage.textContent = "Enter a valid email.";
    } else {
        formMessage.textContent = "Message submitted!";
    }
}

if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
}
