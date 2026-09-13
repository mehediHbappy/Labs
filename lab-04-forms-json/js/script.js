// Lab 03: JavaScript Foundations and Simple Interaction
// (carried over so the earlier interactions keep working)

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

// Lab 04: Forms, Validation, JSON and Local Storage

// Reads the form, validates it, builds a registration object,
// converts it to JSON, and saves it in localStorage.
function submitRegistration() {
    let name = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let email = document.getElementById("studentEmail").value;
    let workshop = document.getElementById("workshop").value;
    let message = document.getElementById("formMessage");

    // Simple required-field validation, one field at a time
    if (name === "") {
        message.textContent = "Please enter your full name.";
        return;
    }
    if (studentId === "") {
        message.textContent = "Please enter your student ID.";
        return;
    }
    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }
    if (workshop === "") {
        message.textContent = "Please select a workshop.";
        return;
    }

    // Group the validated values into one object
    let registration = {
        name: name,
        studentId: studentId,
        email: email,
        workshop: workshop
    };

    // Convert the object to JSON text and save it in the browser
    let jsonData = JSON.stringify(registration);
    localStorage.setItem("registration", jsonData);

    // Show the JSON text and a confirmation message on the page
    document.getElementById("jsonOutput").textContent = jsonData;
    message.textContent = "Registration saved successfully.";
}

// Loads the saved registration from localStorage and displays it
function showSavedRegistration() {
    let savedData = localStorage.getItem("registration");
    let output = document.getElementById("savedMessage");

    if (savedData === null) {
        output.textContent = "No saved registration was found.";
        return;
    }

    let registration = JSON.parse(savedData);
    output.textContent =
        registration.name + " (ID: " + registration.studentId + ") registered for " +
        registration.workshop + ".";
}

// Removes the saved practice registration from localStorage
function clearRegistration() {
    localStorage.removeItem("registration");
    document.getElementById("jsonOutput").textContent = "No registration saved yet.";
    document.getElementById("savedMessage").textContent = "Saved registration cleared.";
}
