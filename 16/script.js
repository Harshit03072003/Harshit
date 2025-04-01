const passwordInput = document.getElementById("password");
const strengthMessage = document.getElementById("strength-message");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    checkStrength(password);
});

function checkStrength(password) {
    let strength = "";
    let color = "red";

    const weakRegex = /^(?=.*[a-z]).{6,}$/;
    const mediumRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;     //chatgpt but not working
    const strongRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{10,}$/;

    if (strongRegex.test(password)) {
        strength = "Strong";
        color = "green";
    } else if (mediumRegex.test(password)) {
        strength = "Medium";
        color = "orange";
    } else if (weakRegex.test(password)) {
        strength = "Weak";
        color = "red";
    } else {
        strength = "Very Weak";
        color = "darkred";
    }

    strengthMessage.textContent = Password`Strength: ${strength}`;
    strengthMessage.style.color = color;
};