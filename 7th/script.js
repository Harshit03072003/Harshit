const textarea = document.getElementById("textInput");
const counter = document.getElementById("charCounter");
const maxChars = 160;
const warningThreshold = 150;

textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength} / ${maxChars}`;

    if (currentLength >= warningThreshold) {
        counter.classList.add("warning");
    } else {
        counter.classList.remove("warning");
    }

    if (currentLength > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
        counter.textContent = `${maxChars} / ${maxChars}`;
    }
});
