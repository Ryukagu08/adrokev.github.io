// Select elements
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeStyle = document.getElementById('theme-style');

// Function to switch theme
function switchTheme(theme) {
    if (theme === 'light') {
        themeStyle.setAttribute('href', 'style.css');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Change icon to sun
    } else {
        themeStyle.setAttribute('href', 'style-light.css');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Change icon to moon
    }
}

// Event listener for theme toggle button
themeToggleButton.addEventListener('click', () => {
    // Determine current theme
    const currentTheme = themeStyle.getAttribute('href') === 'style-light.css' ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply new theme
    switchTheme(newTheme);

    // Save new theme in localStorage
    localStorage.setItem('theme', newTheme);
});

// Check localStorage for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark theme
    switchTheme(savedTheme);
});
