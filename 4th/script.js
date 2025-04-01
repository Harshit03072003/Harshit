
const exchangeRates = {
    "USD": { "INR": 83, "EUR": 0.91, "USD": 1 },
    "INR": { "USD": 0.012, "EUR": 0.011, "INR": 1 },
    "EUR": { "USD": 1.10, "INR": 91, "EUR": 1 }
};


const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convert");
const resultDisplay = document.getElementById("result");

function convertCurrency() {
    let amount = parseFloat(amountInput.value);
    let from = fromCurrency.value;
    let to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultDisplay.textContent = "Enter a valid amount";
        return;
    }

    let convertedAmount = amount * exchangeRates[from][to];
    resultDisplay.textContent = convertedAmount.toFixed(2);
}


convertBtn.addEventListener("click", convertCurrency);