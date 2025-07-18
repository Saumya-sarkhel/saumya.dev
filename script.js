document.addEventListener('DOMContentLoaded', () => {
  // Theme Management
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

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  const toggleBtn = document.getElementById('theme-toggle-btn');
  toggleBtn.addEventListener('click', toggleTheme);

  // Mobile Menu Management
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('.mobile-menu');
  const body = document.body;

  if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
      navUl.classList.toggle('show');
      body.classList.toggle('menu-open'); // Toggle 'menu-open' class for overflow handling
    });
  }

  document.addEventListener('click', (e) => {
    // Close menu if click is outside the nav and menu is open
    if (!e.target.closest('nav') && navUl.classList.contains('show')) {
      navUl.classList.remove('show');
      body.classList.remove('menu-open'); // Remove 'menu-open' class
    }
  });

  window.addEventListener('resize', () => {
    // Close menu and enable scroll if window is resized above 768px
    if (window.innerWidth > 768 && navUl.classList.contains('show')) {
      navUl.classList.remove('show');
      body.classList.remove('menu-open'); // Remove 'menu-open' class
    }
  });

  // Video Autoplay
  const video = document.getElementById('ghosttyVideo');
  if (video) {
    video.addEventListener('canplay', function () {
      video.play().catch(function (error) {
        console.log("Video play failed:", error);
      });
    });
  }

  // Form Handling
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

  // Back to Top Button
  const backToTopButton = document.querySelector('.back-to-top-button');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  }
});
