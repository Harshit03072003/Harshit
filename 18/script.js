const titles = document.querySelectorAll(".accordion-title");

        titles.forEach(title => {
            title.addEventListener("click", function() {
                const content = this.nextElementSibling;
                content.classList.toggle("active");
            });
        });