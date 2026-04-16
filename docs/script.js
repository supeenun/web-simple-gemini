const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('.icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
});
