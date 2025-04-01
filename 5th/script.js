document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;


    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();


    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";


    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }


    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }


    if (age === "" || isNaN(age) || age < 18) {
        document.getElementById("ageError").textContent = "You must be at least 18 years old.";
        isValid = false;
    }


    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
});