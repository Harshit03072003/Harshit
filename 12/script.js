function switchTab(index) {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    tabs[index].classList.add("active");
    contents[index].classList.add("active");
}