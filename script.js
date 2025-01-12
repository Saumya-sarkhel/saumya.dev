function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const toggleBtn = document.getElementById('theme-toggle-btn');
    toggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    const toggleBtn = document.getElementById('theme-toggle-btn');
    toggleBtn.addEventListener('click', toggleTheme);

    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navUl.classList.contains('show')) {
            navUl.classList.remove('show');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navUl.classList.contains('show')) {
            navUl.classList.remove('show');
        }
    });

    const video = document.getElementById('ghosttyVideo');
    
    // Force play the video
    video.play().catch(function(error) {
        console.log("Video play failed:", error);
    });

    // Try to play video when it's ready
    video.addEventListener('canplay', function() {
        video.play().catch(function(error) {
            console.log("Video play failed:", error);
        });
    });
}); 