const inputField = document.getElementById("user-input");

window.onload = function () {
    const savedInput = localStorage.getItem("userInput");
    if (savedInput) {
        inputField.value = savedInput;
    }
};

function saveInput() {
    localStorage.setItem("userInput", inputField.value);
    alert("Input saved!");
}

function clearInput() {
    localStorage.removeItem("userInput");
    inputField.value = "";
    alert("Input cleared!");
}