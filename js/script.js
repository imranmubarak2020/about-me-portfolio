const welcomeButton = document.getElementById("welcome-button");
const welcomeMessage = document.getElementById("welcome-message");

welcomeButton.addEventListener("click", function () {
    if (welcomeMessage.textContent === "") {
        welcomeMessage.textContent = "Welcome to Allaodhaiy's portfolio!";
        welcomeButton.textContent = "Hide Message";
    } else {
        welcomeMessage.textContent = "";
        welcomeButton.textContent = "Say Hello";
    }
});