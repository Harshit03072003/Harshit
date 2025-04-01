const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

function appendValue(value) {
    if (display) {
        display.value += value;
    }
}

function clearDisplay() {
    if (display) {
        display.value = "";
    }
}

function calculateResult() {
    try {
        if (!display || !historyList) return;

        const expression = display.value.trim();
        if (!expression) {
            display.value = "Error";
            return;
        }

        const result = new Function(`return ${expression}`)();

        historyList.innerHTML += `<li>${expression} = ${result}</li>`;
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
};