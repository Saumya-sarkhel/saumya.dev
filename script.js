function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    toggleBtn.textContent = theme === 'dark' ? '🔥' : '🌙';
    toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
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

    // Try to play video when it's ready
    video.addEventListener('canplay', function() {
        video.play().catch(function(error) {
            console.log("Video play failed:", error);
        });
    });

    // Add form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.email.value.trim();
            const message = this.message.value.trim();

            if (email && message) {
                // Here you would typically send this data to your backend
                // For now, we'll just log it and show a success message
                console.log('Form submitted:', { email, message });

                // Clear the form
                this.reset();

                // Show success message (you can customize this)
                alert('Thank you for your message! I will get back to you soon.');
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});

document.querySelector('.back-to-top-button').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const button = document.querySelector('.back-to-top-button');
    if (window.scrollY > 300) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }
});
