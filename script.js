document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeInElements.forEach((el) => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const logo = document.getElementById("logo");

    // Set initial theme based on user preference or default to dark mode
    const userTheme = localStorage.getItem("theme") || "dark";
    themeStyle.href = userTheme === "light" ? "style-light.css" : "style.css";
    logo.src = userTheme === "light" 
        ? "https://i.ibb.co/HVBM2Q9/white-black-no-BG.png"  // Black logo for light mode
        : "https://i.ibb.co/0C6TvPx/black-white-no-BG.png"; // White logo for dark mode
    themeToggle.innerHTML = userTheme === "light" 
        ? '<i class="fas fa-moon"></i>'  // Show moon for light mode
        : '<i class="fas fa-sun"></i>';  // Show sun for dark mode

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        if (themeStyle.href.includes("style.css")) {
            // Switch to light mode
            themeStyle.href = "style-light.css";
            logo.src = "https://i.ibb.co/HVBM2Q9/white-black-no-BG.png"; // Black logo
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Switch to moon icon
        } else {
            // Switch to dark mode
            themeStyle.href = "style.css";
            logo.src = "https://i.ibb.co/0C6TvPx/black-white-no-BG.png"; // White logo
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Switch to sun icon
        }
    });
});
