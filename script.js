document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const logo = document.getElementById("logo");

    // Immediately set the theme based on the saved preference in localStorage
    const userTheme = localStorage.getItem("theme") || "dark";
    applyTheme(userTheme);

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const currentTheme = themeStyle.href.includes("style-light.css") ? "light" : "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
    });

    function applyTheme(theme) {
        // Apply the theme immediately before rendering content
        if (theme === "light") {
            themeStyle.href = "style-light.css"; // Apply light theme
            logo.src = "https://i.ibb.co/HVBM2Q9/white-black-no-BG.png"; // White logo for light theme
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
        } else {
            themeStyle.href = "style.css"; // Apply dark theme
            logo.src = "https://i.ibb.co/0C6TvPx/black-white-no-BG.png"; // Black logo for dark theme
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
        }
    }
});
