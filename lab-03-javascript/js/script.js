
let availableSeats = 12;


function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}

function checkSeats() {
    let message = document.getElementById("seatMessage");
    if (availableSeats > 0) {
        message.textContent = "Seats are available. Remaining seats: " + availableSeats;
    } else {
        message.textContent = "Sorry, no seats are available.";
    }
}

function showGreeting() {
    let name = document.getElementById("studentName").value;
    let output = document.getElementById("greetingMessage");
    output.textContent = "Hello, " + name + ". Welcome to CSE472 Lab 03!";
}

function showVenueReminder() {
    let message = document.getElementById("venueMessage");
    message.textContent = "Venue: Department Computer Lab, Southeast University.";
}
