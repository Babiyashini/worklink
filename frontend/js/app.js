
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    message.textContent = "Login form submitted successfully!";
    message.style.color = "green";

    console.log("Email:", email);
});
