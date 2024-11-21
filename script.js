document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for fade-in animation
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

// Theme toggle and persistence logic
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const logo = document.getElementById("logo");

    // Check the user's last theme preference or default to dark mode
    const userTheme = localStorage.getItem("theme") || "dark";
    themeStyle.href = userTheme === "light" ? "style-light.css" : "style.css";
    logo.src = userTheme === "light" 
        ? "https://i.ibb.co/HVBM2Q9/white-black-no-BG.png"  // White logo for light mode
        : "https://i.ibb.co/0C6TvPx/black-white-no-BG.png"; // Black logo for dark mode
    themeToggle.innerHTML = userTheme === "light" 
        ? '<i class="fas fa-moon"></i>'  // Moon icon for light mode
        : '<i class="fas fa-sun"></i>';  // Sun icon for dark mode

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const currentTheme = themeStyle.href.includes("style-light.css") ? "light" : "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save new theme preference
    });

    function applyTheme(theme) {
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

// First load animation logic
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem('pageLoaded')) {
        // First time loading the page, trigger animation
        const elements = document.querySelectorAll('.header, .about, .projects, .footer');
        
        elements.forEach((el, index) => {
            // Add delay based on element index
            el.classList.add('visible');
            el.style.animationDelay = `${index * 0.2}s`;
        });

        // Set the flag to prevent animation on future loads
        localStorage.setItem('pageLoaded', 'true');
    } else {
        // If page was already loaded, just make them visible
        const elements = document.querySelectorAll('.header, .about, .projects, .footer');
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }
});
