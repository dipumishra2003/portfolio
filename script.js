const themeToggler = document.getElementById('theme-toggler');
const body = document.body;

// saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggler.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
} else {
    body.classList.add('light-mode');
}

// click
themeToggler.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        themeToggler.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        themeToggler.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('theme', 'dark');
    }
});
