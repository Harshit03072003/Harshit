function toggleTheme() {
    document.body.classList.toggle("dark-theme");


    const isDarkMode = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}


window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
};