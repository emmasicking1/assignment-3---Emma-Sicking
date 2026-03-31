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
    welcomeMessage.textContent = "Fresh pastries, warm bread, and cozy café vibes are waiting for you!";
}

if (welcomeMessage) {
    welcomeMessage.addEventListener("click", changeWelcomeMessage);
}

function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message submitted successfully!";
        formMessage.style.color = "green";

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
}

if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
}
