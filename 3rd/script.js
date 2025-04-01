const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;


function updateCounter() {
    counterDisplay.textContent = count;
}


increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});
resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});
