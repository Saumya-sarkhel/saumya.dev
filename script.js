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
  const navUl = document.querySelector('.mobile-menu');
  // const overlay = document.querySelector('.menu-overlay');

  const body = document.body; // Get the body element

  if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
      navUl.classList.toggle('show');
      // body.classList.toggle('menu-open'); // Toggles 'menu-open' class
    });
  }
  document.addEventListener('click', (e) => {
    // Close menu if click is outside the nav and menu is open
    if (!e.target.closest('nav') && navUl.classList.contains('show')) {
      navUl.classList.remove('show');
      body.classList.remove('menu-open'); // Removes 'menu-open' class
    }
  });

  window.addEventListener('resize', () => {
    // Close menu and enable scroll if window is resized above 768px
    if (window.innerWidth > 768 && navUl.classList.contains('show')) {
      navUl.classList.remove('show');
      body.classList.remove('menu-open'); // Removes 'menu-open' class
    }
  });

  const video = document.getElementById('ghosttyVideo');

  // Try to play video when it's ready
  video.addEventListener('canplay', function () {
    video.play().catch(function (error) {
      console.log("Video play failed:", error);
    });
  });

  // Add form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (email && message) {
        console.log('Form submitted:', { email, message });
        this.reset();
        console.log('Thank you for your message! I will get back to you soon.');
      } else {
        console.log('Please fill in all fields.');
      }
    });
  }
});

document.querySelector('.back-to-top-button').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function () {
  const button = document.querySelector('.back-to-top-button');
  if (window.scrollY > 300) {
    button.style.display = 'flex';
  } else {
    button.style.display = 'none';
  }
});
