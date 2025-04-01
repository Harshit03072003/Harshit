let randomNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const message = document.getElementById("message");

    if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
        message.textContent = "Please enter a valid number between 1 and 10.";
        message.className = "fail";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "Correct! You guessed the number!";
        message.className = "success";
        score++;
        document.getElementById("score").textContent = score;
        resetGame(false);
    } else {
        message.textContent = "Wrong guess! Try again.";
        message.className = "fail";
    }
}

function resetGame(resetScore = true) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("message").textContent = "";
    document.getElementById("userGuess").value = "";
    if (resetScore) {
        score = 0;
        document.getElementById("score").textContent = score;
    }
}