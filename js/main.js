/** @format */

let filterButtons = document.querySelectorAll(".our-work ul li");
let workItems = document.querySelectorAll(".our-work .box");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) =>
            btn.classList.remove("active", "rounded-pill", "main-btn")
        );
        // Add active class to the clicked button
        button.classList.add("active", "rounded-pill", "main-btn");
        let cont = button.textContent;
        workItems.forEach((item) => {
            if (item.dataset.work.includes(cont) || cont === "All") {
                item.parentElement.style.display = "block";
            } else {
                item.parentElement.style.display = "none";
            }
        });
    });
});

