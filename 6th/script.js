const colorPicker = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");


colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value;
    colorCode.textContent = colorPicker.value;
});