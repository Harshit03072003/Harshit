function capitalizeFirstLetter(word) {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeInput() {
    let input = document.getElementById("textInput").value;
    let output = capitalizeFirstLetter(input);
    document.getElementById("output").innerText = output;
}