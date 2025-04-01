const searchInput = document.getElementById("search");
const items = document.querySelectorAll("#item-list li");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});