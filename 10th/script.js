function fetchJoke() {
    const jokeElement = document.getElementById("joke");
    const spinner = document.getElementById("spinner");

    spinner.style.display = "block";
    jokeElement.innerText = "";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            jokeElement.innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            jokeElement.innerText = "Oops! Something went wrong.";
            console.error("Error fetching joke:", error);
        })
        .finally(() => {
            spinner.style.display = "none";
        });
}
