const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
    greeting.textContent = "Good afternoon! Thanks for stopping by.";
} else {
    greeting.textContent = "Good evening! Glad to have you here.";
}
