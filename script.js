// Select elements
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeStyle = document.getElementById('theme-style');
const logo = document.getElementById('logo'); // Ensure your logo has this ID

// Function to switch theme
function switchTheme(theme) {
    if (theme === 'light') {
        themeStyle.setAttribute('href', 'style-light.css');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Change icon to sun
        if (logo) logo.src = 'https://i.ibb.co/HVBM2Q9/white-black-no-BG.png'; // Replace with your light mode logo URL
    } else if (theme === 'dark') {
        themeStyle.setAttribute('href', 'style.css');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Change icon to moon
        if (logo) logo.src = 'https://i.ibb.co/0C6TvPx/black-white-no-BG.png'; // Dark mode logo URL
    }
}

// Event listener for theme toggle button
themeToggleButton.addEventListener('click', () => {
    // Determine the current theme
    const currentTheme = themeStyle.getAttribute('href') === 'style-light.css' ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply the new theme
    switchTheme(newTheme);

    // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);
});

// Check localStorage for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark theme
    switchTheme(savedTheme);
});
